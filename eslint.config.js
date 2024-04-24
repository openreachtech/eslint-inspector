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

  {
    rules: {
      'capitalized-comments': 'off',
      'func-style': 'off',
      'guard-for-in': 'off',
      'id-length': 'off',
      'line-comment-position': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-statements': 'off',
      'no-console': 'off',
      'no-inline-comments': 'off',
      'no-magic-numbers': 'off',
      'no-plusplus': 'off',
      'no-ternary': 'off',
      'no-undef': 'off',
      'no-undefined': 'off',
      'no-underscore-dangle': 'off',
      'no-warning-comments': 'off',
      'one-var': 'off',
      'sort-keys': 'off',
      strict: 'off',
    },
  },
]
