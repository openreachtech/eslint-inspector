'use strict'

const {
  ESLint,
} = require('eslint')

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
    lints,
  }) {
    const analyzers = lints.map(it => LintAnalyzer.create({
      lint: it,
    }))

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

    return this.create({
      lints,
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
