'use strict'

const {
  ConstructorSpyGenerator,
} = require('@openreachtech/renchan-test-tools')

const FileLintAnalyzer = require('../../lib/FileLintAnalyzer')
const LintAnalyzer = require('../../lib/LintAnalyzer')

describe('FileLintAnalyzer', () => {
  describe('super class', () => {
    test('to be instance of LintAnalyzer', () => {
      expect(FileLintAnalyzer.prototype)
        .toBeInstanceOf(LintAnalyzer)
    })
  })
})

describe('FileLintAnalyzer', () => {
  describe('.createWithExtractedRuleId()', () => {
    describe('to be instance of FileLintAnalyzer', () => {
      /** @type {Array<object>} */
      const cases = [
        {
          params: {
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/indent.js',
              messages: [
                {
                  ruleId: 'indent',
                  severity: 2,
                  message: 'Expected indentation of 4 spaces but found 6.',
                  line: 9,
                  column: 1,
                  nodeType: 'Keyword',
                  messageId: 'wrongIndentation',
                  endLine: 9,
                  endColumn: 7,
                  fix: {
                    range: [141, 147],
                    text: '    ',
                  },
                },
                {
                  ruleId: 'indent',
                  severity: 2,
                  message: 'Expected indentation of 2 spaces but found 4.',
                  line: 11,
                  column: 1,
                  nodeType: 'Punctuator',
                  messageId: 'wrongIndentation',
                  endLine: 11,
                  endColumn: 5,
                  fix: {
                    range: [161, 165],
                    text: '  ',
                  },
                },
              ],
              suppressedMessages: [],
              errorCount: 2,
              fatalErrorCount: 0,
              warningCount: 0,
              fixableErrorCount: 2,
              fixableWarningCount: 0,
              source: 'dummy code of indent.js',
              usedDeprecatedRules: [],
            },
          },
        },
        {
          params: {
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/semi.js',
              messages: [
                {
                  ruleId: 'semi',
                  severity: 2,
                  message: 'Extra semicolon.',
                  line: 3,
                  column: 18,
                  nodeType: 'ExpressionStatement',
                  messageId: 'extraSemi',
                  endLine: 3,
                  endColumn: 19,
                  fix: {
                    range: [28, 32],
                    text: '111',
                  },
                },
              ],
              suppressedMessages: [],
              errorCount: 1,
              fatalErrorCount: 0,
              warningCount: 0,
              fixableErrorCount: 1,
              fixableWarningCount: 0,
              source: 'dummy code of semi.js',
              usedDeprecatedRules: [],
            },
          },
        },
      ]

      test.each(cases)('file path: $params.lint.filePath', ({ params }) => {
        const analyzer = FileLintAnalyzer.createWithExtractedRuleId(params)

        expect(analyzer)
          .toBeInstanceOf(FileLintAnalyzer)
      })
    })

    describe('to call constructor', () => {
      /** @type {Array<object>} */
      const cases = [
        {
          params: {
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/indent.js',
              messages: [
                {
                  ruleId: 'indent',
                  severity: 2,
                  message: 'Expected indentation of 4 spaces but found 6.',
                  line: 9,
                  column: 1,
                  nodeType: 'Keyword',
                  messageId: 'wrongIndentation',
                  endLine: 9,
                  endColumn: 7,
                  fix: {
                    range: [141, 147],
                    text: '    ',
                  },
                },
                {
                  ruleId: 'indent',
                  severity: 2,
                  message: 'Expected indentation of 2 spaces but found 4.',
                  line: 11,
                  column: 1,
                  nodeType: 'Punctuator',
                  messageId: 'wrongIndentation',
                  endLine: 11,
                  endColumn: 5,
                  fix: {
                    range: [161, 165],
                    text: '  ',
                  },
                },
              ],
              suppressedMessages: [],
              errorCount: 2,
              fatalErrorCount: 0,
              warningCount: 0,
              fixableErrorCount: 2,
              fixableWarningCount: 0,
              source: 'dummy code of indent.js',
              usedDeprecatedRules: [],
            },
          },
          expected: {
            ruleId: 'indent',
            message: null,
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/indent.js',
              messages: [
                {
                  ruleId: 'indent',
                  severity: 2,
                  message: 'Expected indentation of 4 spaces but found 6.',
                  line: 9,
                  column: 1,
                  nodeType: 'Keyword',
                  messageId: 'wrongIndentation',
                  endLine: 9,
                  endColumn: 7,
                  fix: {
                    range: [141, 147],
                    text: '    ',
                  },
                },
                {
                  ruleId: 'indent',
                  severity: 2,
                  message: 'Expected indentation of 2 spaces but found 4.',
                  line: 11,
                  column: 1,
                  nodeType: 'Punctuator',
                  messageId: 'wrongIndentation',
                  endLine: 11,
                  endColumn: 5,
                  fix: {
                    range: [161, 165],
                    text: '  ',
                  },
                },
              ],
              suppressedMessages: [],
              errorCount: 2,
              fatalErrorCount: 0,
              warningCount: 0,
              fixableErrorCount: 2,
              fixableWarningCount: 0,
              source: 'dummy code of indent.js',
              usedDeprecatedRules: [],
            },
          },
        },
        {
          params: {
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/semi.js',
              messages: [
                {
                  ruleId: 'semi',
                  severity: 2,
                  message: 'Extra semicolon.',
                  line: 3,
                  column: 18,
                  nodeType: 'ExpressionStatement',
                  messageId: 'extraSemi',
                  endLine: 3,
                  endColumn: 19,
                  fix: {
                    range: [28, 32],
                    text: '111',
                  },
                },
              ],
              suppressedMessages: [],
              errorCount: 1,
              fatalErrorCount: 0,
              warningCount: 0,
              fixableErrorCount: 1,
              fixableWarningCount: 0,
              source: 'dummy code of semi.js',
              usedDeprecatedRules: [],
            },
          },
          expected: {
            ruleId: 'semi',
            message: null,
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/semi.js',
              messages: [
                {
                  ruleId: 'semi',
                  severity: 2,
                  message: 'Extra semicolon.',
                  line: 3,
                  column: 18,
                  nodeType: 'ExpressionStatement',
                  messageId: 'extraSemi',
                  endLine: 3,
                  endColumn: 19,
                  fix: {
                    range: [28, 32],
                    text: '111',
                  },
                },
              ],
              suppressedMessages: [],
              errorCount: 1,
              fatalErrorCount: 0,
              warningCount: 0,
              fixableErrorCount: 1,
              fixableWarningCount: 0,
              source: 'dummy code of semi.js',
              usedDeprecatedRules: [],
            },
          },
        },
      ]

      test.each(cases)('file path: $params.lint.filePath', ({ params, expected }) => {
        const DerivedClass = ConstructorSpyGenerator.create({ jest })
          .generateSpyKitClass(FileLintAnalyzer)

        DerivedClass.createWithExtractedRuleId(params)

        expect(DerivedClass.__spy__)
          .toHaveBeenCalledWith(expected)

        DerivedClass.__spy__
          .mockRestore()
      })
    })
  })
})

describe('FileLintAnalyzer', () => {
  describe('.extractLintKeys()', () => {
    describe('as standard rule', () => {
      /** @type {Array<object>} */
      const cases = [
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/standard/indent.js',
            groupedRuleIds: [
              'no-restricted-syntax',
            ],
          },
          expected: {
            ruleId: 'indent',
            messageId: null,
          },
        },
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/standard/semi.js',
            groupedRuleIds: [
              'no-restricted-syntax',
            ],
          },
          expected: {
            ruleId: 'semi',
            messageId: null,
          },
        },
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/standard/quotes.js',
            groupedRuleIds: [
              'no-restricted-syntax',
            ],
          },
          expected: {
            ruleId: 'quotes',
            messageId: null,
          },
        },
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/standard/no-restricted-syntax.js',
            groupedRuleIds: [
              'no-restricted-syntax',
            ],
          },
          expected: {
            ruleId: 'no-restricted-syntax',
            messageId: null,
          },
        },
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/standard/no-restricted-syntax/noLet.js',
            groupedRuleIds: [
              'no-restricted-syntax',
            ],
          },
          expected: {
            ruleId: 'no-restricted-syntax',
            messageId: 'noLet',
          },
        },
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/standard/no-restricted-syntax/category/noArrayForEach.js',
            groupedRuleIds: [
              'no-restricted-syntax',
            ],
          },
          expected: {
            ruleId: 'no-restricted-syntax',
            messageId: 'noArrayForEach',
          },
        },
        {
          params: {
            filePath: '',
            groupedRuleIds: [
              'no-restricted-syntax',
            ],
          },
          expected: {
            ruleId: null,
            messageId: null,
          },
        },
      ]

      test.each(cases)('file path: $params.filePath', ({ params, expected }) => {
        const result = FileLintAnalyzer.extractLintKeys(params)

        expect(result)
          .toStrictEqual(expected)
      })
    })

    describe('as plugin rule', () => {
      /** @type {Array<object>} */
      const cases = [
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/jest/consistent-test-it.js',
            plugins: [
              'jest',
            ],
          },
          expected: {
            ruleId: 'jest/consistent-test-it',
            messageId: null,
          },
        },
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/jest/no-alias-method.js',
            plugins: [
              'jest',
            ],
          },
          expected: {
            ruleId: 'jest/no-alias-method',
            messageId: null,
          },
        },
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/jest/prefer-equality-matcher.js',
            plugins: [
              'jest',
            ],
          },
          expected: {
            ruleId: 'jest/prefer-equality-matcher',
            messageId: null,
          },
        },
      ]

      test.each(cases)('file path: $params.filePath', ({ params, expected }) => {
        const result = FileLintAnalyzer.extractLintKeys(params)

        expect(result)
          .toStrictEqual(expected)
      })
    })
  })
})
