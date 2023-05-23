'use strict'

class LintAnalyzer {
  /**
   * Constructor.
   *
   * @param {LintAnalyzerParams} params - Parameters of this constructor.
   */
  constructor ({
    lint,
    ruleId,
  }) {
    this.lint = lint
    this.ruleId = ruleId
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
   * get: hit messages.
   *
   * @returns {Array<Object>} - Hit messages.
   */
  get hitMessages () {
    return this.lint
      .messages
      .filter(it => it.ruleId === this.ruleId)
  }

  /**
   * get: unexpected messages.
   *
   * @returns {Array<Object>} - Unexpected messages.
   */

  get unexpectedMessages () {
    return this.lint
      .messages
      .filter(it => it.ruleId !== this.ruleId)
  }
}

module.exports = LintAnalyzer

/**
 * @typedef {{
 *   lint: import('eslint').ESLint.LintResult,
 *   ruleId: string,
 *   message?: string | RegExp | null,
 * }} LintAnalyzerParams
 */
