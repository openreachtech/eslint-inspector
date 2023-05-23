'use strict'

const path = require('path')

const LintAnalyzer = require('./LintAnalyzer')
const LintKeyExtractor = require('./tools/LintKeyExtractor')

class FileLintAnalyzer extends LintAnalyzer {
  /**
   * Factory method.
   *
   * @param {FileLintAnalyzerFactoryParams} params - Parameters of this factory method.
   * @param {{
   *   [messageId: string]: string,
   * }} messageHash - Message hash.
   * @returns {FileLintAnalyzer} Instance of this class.
   */
  static create (
    {
      lint,
    },
    messageHash = {},
  ) {
    const {
      ruleId,
      messageId,
    } = this.extractLintKeys(lint.filePath)

    const message = messageHash[messageId]
      ?? null

    return super.create({
      lint,
      ruleId,
      message,
    })
  }

  /**
   * Get rule ID from file path.
   *
   * @param {string} filePath - File path.
   * @returns {string} - Rule ID.
   */
  static getRuleIdFromFilePath (filePath) {
    return path.parse(filePath).name
  }

  /**
   * Extract rule ID and message ID from file path.
   *
   * @param {string} filePath - File path.
   * @returns {{
   *   ruleId: string,
   *   messageId: string,
   * }} - Rule ID and message ID.
   */
  static extractLintKeys (filePath) {
    const extractor = LintKeyExtractor.create({
      filePath,
    })

    return {
      ruleId: extractor.ruleId,
      messageId: extractor.messageId,
    }
  }
}

module.exports = FileLintAnalyzer

/**
 * @typedef {{
 *   lint: import('eslint').ESLint.LintResult,
 * }} FileLintAnalyzerFactoryParams
 */
