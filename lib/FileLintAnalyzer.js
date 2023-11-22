'use strict'

const LintAnalyzer = require('./LintAnalyzer')
const LintKeyExtractor = require('./tools/LintKeyExtractor')

class FileLintAnalyzer extends LintAnalyzer {
  /**
   * Factory method.
   *
   * @param {FileLintAnalyzerFactoryParams} params - Parameters of this factory method.
   * @returns {FileLintAnalyzer} Instance of this class.
   */
  static createWithExtractedRuleId ({
    lint,
    plugins = [],
    messageHash = {},
  }) {
    const {
      ruleId,
      messageId,
    } = this.extractLintKeys({
      filePath: lint.filePath,
      plugins,
    })

    const message = messageHash[messageId]
      ?? null

    return this.create({
      lint,
      ruleId,
      message,
    })
  }

  /**
   * Extract rule ID and message ID from file path.
   *
   * @param {{
   *   filePath: string,
   *   plugins: Array<string>,
   * }} params - Parameters.
   * @returns {{
   *   ruleId: string,
   *   messageId: string,
   * }} - Rule ID and message ID.
   * @public
   */
  static extractLintKeys (params) {
    const extractor = LintKeyExtractor.create(params)

    return {
      ruleId: extractor.extractRuleId(),
      messageId: extractor.extractMessageId(),
    }
  }
}

module.exports = FileLintAnalyzer

/**
 * @typedef {{
 *   lint: import('eslint').ESLint.LintResult,
 *   plugins?: Array<string>,
 *   messageHash: {
 *     [ruleId: string]: {
 *       [messageId: string]: string,
 *     },
 *   },
 * }} FileLintAnalyzerFactoryParams
 */
