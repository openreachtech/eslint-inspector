'use strict'

const openreachtechConfig = require('@openreachtech/eslint-config')

module.exports = [
  /*
   * If ignores is used without any other keys in the configuration object, then the patterns act as global ignores. Here’s an example:
   *
   * https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores
   */
  {
    ignores: [
      'index.mjs',
    ],
  },

  ...openreachtechConfig,
]
