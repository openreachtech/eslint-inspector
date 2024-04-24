'use strict'

const jestPlugin = require('eslint-plugin-jest')
const jsdocPlugin = require('eslint-plugin-jsdoc')

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

  {
    ...jestPlugin.configs['flat/all'],

    rules: {
      ...jestPlugin.configs['flat/all'].rules,

      'jest/consistent-test-it': 'off',
      'jest/no-alias-methods': 'off',
      'jest/no-identical-title': 'off',
      'jest/prefer-equality-matcher': 'off',
      'jest/prefer-expect-assertions': 'off',
      'jest/prefer-importing-jest-globals': 'off',
      'jest/prefer-lowercase-title': 'off',
      'jest/prefer-strict-equal': 'off',
      'jest/require-hook': 'off',
    },
  },

  {
    ...jsdocPlugin.configs['flat/recommended'],

    rules: {
      ...jsdocPlugin.configs['flat/recommended'].rules,

      'jsdoc/require-jsdoc': 'off',
      'jsdoc/tag-lines': 'off',
    },
  },
]
