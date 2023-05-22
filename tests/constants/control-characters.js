'use strict'

const CONTROL_CHARACTERS = {
  RESET_STYLE: '\x1b[0m',
  BOLD_STYLE: '\x1b[1m',
  COLOR_DEFAULT: '\x1b[39m',
  COLOR_GRAY: '\x1b[2m',
  COLOR_RED: '\x1b[31m',
  COLOR_WHITE: '\x1b[22m',
  UNDERLINE_OPEN: '\x1b[4m',
  UNDERLINE_CLOSE: '\x1b[24m',
}

module.exports = CONTROL_CHARACTERS
