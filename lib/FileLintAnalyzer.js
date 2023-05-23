'use strict'

const path = require('path')

const LintAnalyzer = require('./LintAnalyzer')
const LintKeyExtractor = require('./tools/LintKeyExtractor')

class FileLintAnalyzer extends LintAnalyzer {
  /**
   * Factory method.
   *
   * @param {FileLintAnalyzerFactoryParams} params - Parameters of this factory method.
   * @returns {FileLintAnalyzer} Instance of this class.
   */
  static create ({
    lint,
  }) {
    const ruleId = this.getRuleIdFromFilePath(lint.filePath)

    return super.create({
      lint,
      ruleId,
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
