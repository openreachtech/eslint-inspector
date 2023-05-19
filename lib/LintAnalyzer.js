'use strict'

class LintAnalyzer {
  /**
   * Constructor.
   *
   * @param {LintAnalyzerParams} params - Parameters of this constructor.
   */
  constructor ({
    lint,
  }) {
    this.lint = lint
  }

  /**
   * Factory method.
   *
   * @param {LintAnalyzerParams} params - Parameters of this factory method.
   * @returns {LintAnalyzer} Instance of this class.
   */
  static create (params) {
    return new this(params)
  }

  /**
   * get: rule ID from file path.
   *
   * @returns {string?} - Rule ID.
   */
  get ruleId () {
    const [, ruleId] = this.lint
      .filePath
      .match(/\/([^/]+)\.[^.]+$/)
      ?? []

    return ruleId ?? null
  }
}

module.exports = LintAnalyzer

/**
 * @typedef {{
 *   lint: import('eslint').ESLint.LintResult,
 * }} LintAnalyzerParams
 */
