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
   * @param {LintAnalyzerFactoryParams} params - Parameters of this factory method.
   * @returns {LintAnalyzer} Instance of this class.
   */
  static create (params) {
    return new this(params)
  }

  /**
   * Generate no lints message.
   *
   * @param {string | RegExp | null} message - Message.
   * @returns {string} - Generated no lints message.
   */
  static generateNoLintMessage (message) {
    const coreMessage = '🔎 No lints that should be here'

    if (!message) {
      return coreMessage
    }

    return `${coreMessage}\n${' '.repeat(14)}${message}`
  }

  /**
   * Works as expected.
   *
   * @returns {boolean} - Works as expected.
   * @public
   */
  worksAsExpected () {
    return this.getHitLintMessages().length > 0
      && this.getUnexpectedLintMessages().length === 0
  }

  /**
   * Get hit lint messages.
   *
   * @returns {Array<import('eslint').Linter.LintMessage>} - Hit messages.
   * @public
   */
  getHitLintMessages () {
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
      : new RegExp(`^${this.message}$`, 'u')

    return messagesHitRuleId
      .filter(it =>
        messageRegExp.test(it.message)
      )
  }

  /**
   * Get unexpected lint messages.
   *
   * @returns {Array<import('eslint').Linter.LintMessage>} - Unexpected lint messages.
   * @public
   */
  getUnexpectedLintMessages () {
    if (!this.message) {
      return this.lint
        .messages
        .filter(it =>
          it.ruleId !== this.ruleId
        )
    }

    const messageRegExp = this.message instanceof RegExp
      ? this.message
      : new RegExp(`^${this.message}$`, 'u')

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
   * @public
   */
  getUnexpectedLint () {
    if (this.lint.messages.length > 0) {
      return this.lint
    }

    const message = /** @type {typeof LintAnalyzer} */ (this.constructor)
      .generateNoLintMessage(this.message)

    return {
      ...this.lint,

      fatalErrorCount: 1,
      errorCount: 1,
      messages: [
        {
          message,
          ruleId: this.ruleId,
          severity: 2, // error
          line: 0,
          column: 0,
        },
      ],
    }
  }
}

module.exports = LintAnalyzer

/**
 * @typedef {{
 *   lint: import('eslint').ESLint.LintResult,
 *   ruleId: string | null,
 *   message?: string | RegExp | null,
 * }} LintAnalyzerParams
 */

/**
 * @typedef {LintAnalyzerParams} LintAnalyzerFactoryParams
 */
