'use strict'

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
}

module.exports = ESLintInspector

/**
 * @typedef {{
 *   analyzers: Array<LintAnalyzer>,
 * }} ESLintInspectorParams
 */

/**
 * @typedef {{
 *   lints: Array<import('eslint').ESLint.LintResult>,
 * }} ESLintInspectorFactoryParams
 */
