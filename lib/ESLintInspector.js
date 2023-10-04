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
   * Create ESLint client.
   *
   * @returns {ESLint} - Instance of ESLint.
   */
  static createESLintClient () {
    return new ESLint()
  }

  /**
   * Create instance of this class with file paths.
   *
   * @param {{
   *   filePaths: Array<string>,
   *   configPath?: string,
   *   messageHash?: {
   *     [messageId: string]: string,
   *   },
   * }} params - Parameters.
   * @returns {Promise<ESLintInspector>} - Instance of this class.
   */
  static async createAsyncWithFilePaths ({
    filePaths,
    configPath = '.eslintrc.yml',
    messageHash = {},
  }) {
    const eslint = this.createESLintClient()

    const lints = await eslint.lintFiles(filePaths)
    const config = await eslint.calculateConfigForFile(configPath)

    const analyzers = lints.map(it =>
      FileLintAnalyzer.create({
        lint: it,
        plugins: config.plugins,
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
      .some(it => it.unexpectedMessages.length > 0)
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

  /**
   * Get formatted log if unexpected.
   *
   * @returns {Promise<string | null>} - Formatted log.
   */
  async getFormattedLogIfUnexpected () {
    if (this.worksAsExpected()) {
      return null
    }

    return this.getUnexpectedLintLog()
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
