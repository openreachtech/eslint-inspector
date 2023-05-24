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
   * @param {Array<string>} filePaths - File paths.
   * @param {{
   *   [messageId: string]: string,
   * }} messageHash - Message hash.
   * @returns {Promise<ESLintInspector>} - Instance of this class.
   */
  static async createAsyncWithFilePaths (
    filePaths,
    messageHash = {},
  ) {
    const eslint = this.createESLintClient()
    const lints = await eslint.lintFiles(filePaths)

    const analyzers = lints.map(it =>
      FileLintAnalyzer.create(
        {
          lint: it,
        },
        messageHash,
      )
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
      .every(it => it.hitMessages.length > 0)
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
   * Get formatted log.
   *
   * @returns {Promise<string>} - Formatted log.
   */
  async getFormattedLog () {
    const formatter = await ESLintInspector.createESLintClient()
      .loadFormatter('stylish')

    return formatter.format(
      this.analyzers
        .map(it => it.lint)
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

    return this.getFormattedLog()
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
