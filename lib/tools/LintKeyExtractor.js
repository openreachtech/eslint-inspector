'use strict'

const path = require('path')

const strictRules = [
  'no-restricted-syntax',
]

class LintKeyExtractor {
  /**
   * Constructor.
   *
   * @param {LintKeyExtractorParams} params - Parameters.
   */
  constructor ({
    filePath,
    plugins,
  }) {
    this.filePath = filePath
    this.plugins = plugins
  }

  /**
   * Factory method.
   *
   * @param {LintKeyExtractorFactoryParams} params - Parameters.
   * @returns {LintKeyExtractor} Instance of this class.
   */
  static create ({
    filePath,
    plugins = [],
  }) {
    return new this({
      filePath,
      plugins,
    })
  }

  /**
   * get: ruleId.
   *
   * @returns {string} Rule ID.
   */
  get ruleId () {
    if (
      !this.filePath
      || this.filePath === '<text>'
    ) {
      return null
    }

    const strictRuleId = strictRules.find(ruleId =>
      this.filePath.includes(`${ruleId}${path.sep}`)
    )

    if (strictRuleId) {
      return strictRuleId
    }

    const pathHash = path.parse(this.filePath)

    const fileName = pathHash.name
      ?.replace(/--/gu, '/')
      ?? null

    if (!fileName) {
      return null
    }

    const pluginName = this.getPluginName(pathHash)

    if (!pluginName) {
      return fileName
    }

    return `${pluginName}/${fileName}`
  }

  /**
   * get: messageId.
   *
   * @returns {string} Message ID.
   */
  get messageId () {
    if (
      !this.filePath
      || this.filePath === '<text>'
    ) {
      return null
    }

    const strictRuleId = strictRules.find(ruleId =>
      this.filePath.includes(`${ruleId}${path.sep}`)
    )

    if (!strictRuleId) {
      return null
    }

    return path.parse(this.filePath)
      .name
      || null
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
 *   plugins: Array<string>,
 * }} LintKeyExtractorParams
 */

/**
 * @typedef {{
 *   filePath: string,
 *   plugins?: Array<string>,
 * }} LintKeyExtractorFactoryParams
 */
