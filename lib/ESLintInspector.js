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
   * Create instance of this class with files.
   *
   * @param {Array<string>} filePaths - Array of file paths.
   * @returns {Promise<ESLintInspector>} Instance of this class.
   */
  static async createAsyncWithFiles (filePaths) {
    const eslint = this.createESLintClient()
    const lints = await eslint.lintFiles(filePaths)

    const analyzers = lints.map(it =>
      FileLintAnalyzer.create({
        lint: it,
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
