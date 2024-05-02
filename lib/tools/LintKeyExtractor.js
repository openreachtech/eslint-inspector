'use strict'

const path = require('path')

class LintKeyExtractor {
  /**
   * Constructor.
   *
   * @param {LintKeyExtractorParams} params - Parameters.
   */
  constructor ({
    filePath,
  }) {
    this.filePath = filePath
  }

  /**
   * Factory method.
   *
   * @param {LintKeyExtractorFactoryParams} params - Parameters.
   * @returns {LintKeyExtractor} Instance of this class.
   */
  static create ({
    filePath,
  }) {
    return new this({
      filePath,
    })
  }

  /**
   * Extract rule id.
   *
   * @returns {string | null} - Rule ID.
   * @public
   */
  extractRuleId () {
    if (
      !this.filePath
      || this.filePath === '<text>'
    ) {
      return null
    }

    const trimRegex = /^.+(?<=\$\/)|(?:\/\$.+)?\.js$/ug

    return this.filePath
      .replace(trimRegex, '')
  }

  /**
   * Extract message id.
   *
   * @returns {string | null} - Message ID.
   * @public
   */
  extractMessageId () {
    if (
      !this.filePath
      || this.filePath === '<text>'
    ) {
      return null
    }

    const parts = this.filePath.split('/$')
    if (parts.length < 2) {
      return null
    }

    const [
      ,
      messageId = null,
    ] = parts

    if (!messageId) {
      return null
    }

    return messageId.replace(/^(?:.+\/)*|\.js$/ug, '')
  }

  /**
   * Get plugin name.
   *
   * @param {path.ParsedPath} pathHash - Parsed path.
   * @returns {string?} Plugin name.
   */
  getPluginName (pathHash) {
    const baseDir = path.basename(pathHash.dir)

    if (!this.plugins.includes(baseDir)) {
      return null
    }

    return baseDir
  }
}

module.exports = LintKeyExtractor

/**
 * @typedef {{
 *   filePath: string,
 * }} LintKeyExtractorParams
 */

/**
 * @typedef {LintKeyExtractorParams} LintKeyExtractorFactoryParams
 */
