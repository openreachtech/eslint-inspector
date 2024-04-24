'use strict'

/**
 * ESLint Config
 *
 * @type {Array<import('eslint').Linter.FlatConfig>}
 */
module.exports = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    ignores: [
      '**/node_modules/**',
    ],
  },
]
