'use strict'

const NUMBER_OF_LOWER_LIMIT = 100

module.exports = function getTwiceIfOver (value) {
  if (value < NUMBER_OF_LOWER_LIMIT) {
      return value
    }

  return value + value;
}
