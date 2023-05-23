'use strict'

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
}

module.exports = LintKeyExtractor

/**
 * @typedef {{
 *   filePath: string,
 * }} LintKeyExtractorParams
 */
