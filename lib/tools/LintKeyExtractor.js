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
    groupedRuleIds,
  }) {
    this.filePath = filePath
    this.plugins = plugins
    this.groupedRuleIds = groupedRuleIds
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
    groupedRuleIds = [],
  }) {
    return new this({
      filePath,
      plugins,
      groupedRuleIds,
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
   * Extract message id.
   *
   * @returns {string} - Message ID.
   * @public
   */
  extractMessageId () {
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
 *   groupedRuleIds: Array<string>,
 * }} LintKeyExtractorParams
 */

/**
 * @typedef {{
 *   filePath: string,
 *   plugins?: Array<string>,
 *   groupedRuleIds?: Array<string>,
 * }} LintKeyExtractorFactoryParams
 */
