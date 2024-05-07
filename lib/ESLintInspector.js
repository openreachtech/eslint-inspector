'use strict'

const {
  ESLint,
} = require('eslint')

const FileLintAnalyzer = require('./FileLintAnalyzer')
const LintAnalyzer = require('./LintAnalyzer')

class ESLintInspector {
  /**
   * Constructor.
   *
   * @param {ESLintInspectorParams} params - Parameters.
   */
  constructor ({
    analyzers,
  }) {
    this.analyzers = analyzers
  }

  /**
   * Factory method.
   *
   * @param {ESLintInspectorFactoryParams} params - Parameters.
   * @returns {ESLintInspector} Instance of this class.
   */
  static create ({
    analyzers,
  }) {
    return new this({
      analyzers,
    })
  }

  /**
   * Create instance of this class with file paths.
   *
   * @param {{
   *   filePaths: Array<string>,
   *   configPath?: string,
   *   messageHash?: {
   *     [ruleId: string]: {
   *       [messageId: string]: string,
   *     },
   *   },
   * }} params - Parameters.
   * @returns {Promise<ESLintInspector>} - Instance of this class.
   */
  static async createAsyncWithFilePaths ({
    filePaths,
    messageHash = {},
  }) {
    const eslint = this.createESLintClient()

    const lints = await eslint.lintFiles(filePaths)

    const analyzers = lints.map(it =>
      FileLintAnalyzer.createWithExtractedRuleId({
        lint: it,
        messageHash,
      })
    )

    return this.create({
      analyzers,
    })
  }

  /**
   * Create instance of this class with text.
   *
   * @param {{
   *   ruleId: string,
   *   text: string,
   * }} params - Parameters.
   * @returns {Promise<ESLintInspector>} - Instance of this class.
   */
  static async createAsyncWithText ({
    ruleId,
    text,
  }) {
    const eslint = this.createESLintClient()
    const lints = await eslint.lintText(text)

    const analyzers = lints.map(it =>
      LintAnalyzer.create({
        ruleId,
        lint: it,
      })
    )

    return this.create({
      analyzers,
    })
  }

  /**
   * Create ESLint client.
   *
   * @returns {ESLint} - Instance of ESLint.
   */
  static createESLintClient () {
    return new ESLint()
  }

  /**
   * Get formatted log if unexpected.
   *
   * @returns {Promise<string | null>} - Formatted log.
   * @public
   */
  async getUnexpectedLog () {
    if (this.worksAsExpected()) {
      return null
    }

    const log = await this.getUnexpectedLintLog()

    return log
  }

  /**
   * Works as expected.
   *
   * @returns {boolean} - Works as expected.
   */
  worksAsExpected () {
    return this.hitsEachRule()
      && !this.hasUnexpectedHit()
  }

  /**
   * Hits each rule.
   *
   * @returns {boolean} - Hits each rule.
   */
  hitsEachRule () {
    return this.analyzers
      .every(it => it.getHitLintMessages().length > 0)
  }

  /**
   * Has unexpected hit.
   *
   * @returns {boolean} - Has.
   */
  hasUnexpectedHit () {
    return this.analyzers
      .some(it => it.getUnexpectedLintMessages().length > 0)
  }

  /**
   * Get unexpected lint log.
   *
   * @returns {Promise<string>} - Formatted log.
   */
  async getUnexpectedLintLog () {
    const formatter = await ESLintInspector.createESLintClient()
      .loadFormatter('stylish')

    return formatter.format(
      this.analyzers
        .filter(it =>
          !it.worksAsExpected()
        )
        .map(it =>
          it.getUnexpectedLint()
        )
    )
  }
}

module.exports = ESLintInspector

/**
 * @typedef {{
 *   analyzers: Array<import('./LintAnalyzer')>,
 * }} ESLintInspectorParams
 */

/**
 * @typedef {ESLintInspectorParams} ESLintInspectorFactoryParams
 */
