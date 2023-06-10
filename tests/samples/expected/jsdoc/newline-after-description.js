'use strict'

class Sample {
  /**
   * get: class name // ❌ Must insert empty line below.
   * @returns {string} - Class name.
   */
  static get className () {
    return this.name
  }
}

module.exports = Sample
