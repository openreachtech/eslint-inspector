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
