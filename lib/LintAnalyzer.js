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
    message = null,
  }) {
    this.lint = lint
    this.ruleId = ruleId
    this.message = message
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
    const messagesHitRuleId = this.lint
      .messages
      .filter(it =>
        it.ruleId === this.ruleId
      )

    if (!this.message) {
      return messagesHitRuleId
    }

    const messageRegExp = this.message instanceof RegExp
      ? this.message
      : new RegExp(`^${this.message}$`)

    return messagesHitRuleId
      .filter(it =>
        messageRegExp.test(it.message)
      )
  }

  /**
   * get: unexpected messages.
   *
   * @returns {Array<Object>} - Unexpected messages.
   */

  get unexpectedMessages () {
    if (!this.message) {
      return this.lint
        .messages
        .filter(it =>
          it.ruleId !== this.ruleId
        )
    }

    const messageRegExp = this.message instanceof RegExp
      ? this.message
      : new RegExp(`^${this.message}$`)

    return this.lint
      .messages
      .filter(it =>
        it.ruleId !== this.ruleId
        || !messageRegExp.test(it.message)
      )
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
