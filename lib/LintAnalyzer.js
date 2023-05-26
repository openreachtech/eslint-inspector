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
   * Works as expected.
   *
   * @returns {boolean} - Works as expected.
   */
  worksAsExpected () {
    return this.hitMessages.length > 0
      && this.unexpectedMessages.length === 0
  }

  /**
   * Has expected lint.
   *
   * @returns {boolean} - Has.
   */
  hasExpectedLint () {
    return this.hitMessages.length > 0
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

  /**
   * Get unexpected lint.
   *
   * @returns {import('eslint').ESLint.LintResult} - Generated lint.
   */
  getUnexpectedLint () {
    if (this.lint.messages.length > 0) {
      return this.lint
    }

    return {
      ...this.lint,

      fatalErrorCount: 1,
      errorCount: 1,
      messages: [
        {
          ruleId: this.ruleId,
          severity: 2, // error
          message: this.generateNoLintMessage(this.message),
          line: 0,
          column: 0,
        }
      ],
    }
  }

  /**
   * Generate no lints message.
   *
   * @param {string | RegExp | null} message - Message.
   * @returns {string} - Generated no lints message.
   */
  generateNoLintMessage (message) {
    const coreMessage = '🔎 No lints that should be here'

    if (!message) {
      return coreMessage
    }

    return `${coreMessage}\n${' '.repeat(14)}${message}`
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
