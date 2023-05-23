'use strict'

const path = require('path')

const strictRules = [
  'no-restricted-syntax',
]

class LintKeyExtractor {
  /**
   * Constructor.
   *
   * @param {LintKeyExtractorParams} params - Parameters.
   */
  constructor ({
    filePath,
  }) {
    this.filePath = filePath
  }

  /**
   * Factory method.
   *
   * @param {LintKeyExtractorParams} params - Parameters.
   * @returns {LintKeyExtractor} Instance of this class.
   */
  static create (params) {
    return new this(params)
  }

  /**
   * get: ruleId.
   *
   * @returns {string} Rule ID.
   */
  get ruleId () {
    if (
      !this.filePath
      || this.filePath === '<text>'
    ) {
      return null
    }

    const strictRuleId = strictRules.find(ruleId =>
      this.filePath.includes(`${ruleId}/`)
    )

    if (strictRuleId) {
      return strictRuleId
    }

    return path.parse(this.filePath)
      .name
      || null
  }
}

module.exports = LintKeyExtractor

/**
 * @typedef {{
 *   filePath: string,
 * }} LintKeyExtractorParams
 */
