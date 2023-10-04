'use strict'

const {
  ConstructorSpyGenerator,
} = require('@openreachtech/renchan-test-tools')
const LintAnalyzer = require('../../lib/LintAnalyzer')

describe('LintAnalyzer', () => {
  describe('constructor', () => {
    describe('to keep property', () => {
      /** @type {Array<object>} */
      const cases = [
        {
          params: {
            ruleId: 'indent',
            message: /Expected indentation of \d+ spaces but found \d+./,
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
            ruleId: 'semi',
            message: 'Extra semicolon.',
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

      describe('#lint', () => {
        test.each(cases)('rule id: $params.ruleId', ({ params }) => {
          const analyzer = new LintAnalyzer(params)

          expect(analyzer)
            .toHaveProperty('lint', params.lint)
          expect(analyzer.lint)
            .toBe(params.lint) // same reference
        })
      })

      describe('#ruleId', () => {
        test.each(cases)('rule id: $params.ruleId', ({ params }) => {
          const analyzer = new LintAnalyzer(params)

          expect(analyzer)
            .toHaveProperty('ruleId', params.ruleId)
        })
      })

      describe('#message', () => {
        test.each(cases)('rule id: $params.ruleId', ({ params }) => {
          const analyzer = new LintAnalyzer(params)

          expect(analyzer)
            .toHaveProperty('message', params.message)
        })
      })
    })
  })
})

describe('LintAnalyzer', () => {
  describe('.create()', () => {
    describe('to be instance of LintAnalyzer', () => {
      /** @type {Array<object>} */
      const cases = [
        {
          params: {
            ruleId: 'indent',
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
            ruleId: 'semi',
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

      test.each(cases)('rule id: $params.ruleId', ({ params }) => {
        const analyzer = LintAnalyzer.create(params)

        expect(analyzer)
          .toBeInstanceOf(LintAnalyzer)
      })
    })

    describe('to call constructor', () => {
      /** @type {Array<object>} */
      const cases = [
        {
          params: {
            ruleId: 'indent',
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
            ruleId: 'semi',
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

      test.each(cases)('rule id: $params.ruleId', ({ params }) => {
        const DerivedClass = ConstructorSpyGenerator.create({ jest })
          .generateSpyKitClass(LintAnalyzer)

        DerivedClass.create(params)

        expect(DerivedClass.__spy__)
          .toHaveBeenCalledWith(params)

        DerivedClass.__spy__
          .mockRestore()
      })
    })
  })
})

describe('LintAnalyzer', () => {
  describe('#getHitLintMessages()', () => {
    describe('with ruleId only', () => {
      /** @type {Array<object>} */
      const cases = [
        {
          params: {
            ruleId: 'indent',
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
            },
          },
          expected: [
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
        },
        {
          params: {
            ruleId: 'semi',
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
            },
          },
          expected: [
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
        },
      ]

      test.each(cases)('rule id: $params.ruleId', ({ params, expected }) => {
        const analyzer = LintAnalyzer.create(params)

        const messages = analyzer.getHitLintMessages()

        expect(messages)
          .toEqual(expected)
      })
    })

    describe('with ruleId and message', () => {
      /** @type {Array<object>} */
      const cases = [
        {
          params: {
            ruleId: 'no-restricted-syntax',
            message: 'Never use `let` variable declaration.',
            lint: {
              messages: [
                {
                  ruleId: 'no-restricted-syntax',
                  severity: 2,
                  message: 'Never use `let` variable declaration.', // ✅
                  line: 5,
                  column: 1,
                  nodeType: 'VariableDeclaration',
                  messageId: 'restrictedSyntax',
                  endLine: 5,
                  endColumn: 12,
                },
                {
                  ruleId: 'no-restricted-syntax',
                  severity: 2,
                  message: 'Never use `Array#forEach()`.', // ❌
                  line: 6,
                  column: 1,
                  nodeType: 'CallExpression',
                  messageId: 'restrictedSyntax',
                  endLine: 8,
                  endColumn: 3,
                },
              ],
            },
          },
          expected: [
            {
              ruleId: 'no-restricted-syntax',
              severity: 2,
              message: 'Never use `let` variable declaration.',
              line: 5,
              column: 1,
              nodeType: 'VariableDeclaration',
              messageId: 'restrictedSyntax',
              endLine: 5,
              endColumn: 12,
            },
          ],
        },
      ]

      test.each(cases)('rule id: $params.ruleId', ({ params, expected }) => {
        const analyzer = LintAnalyzer.create(params)

        const messages = analyzer.getHitLintMessages()

        expect(messages)
          .toEqual(expected)
      })
    })
  })
})

describe('LintAnalyzer', () => {
  describe('#getUnexpectedLintMessages()', () => {
    describe('with ruleId only', () => {
      describe('with expected message', () => {
        /** @type {Array<object>} */
        const cases = [
          {
            params: {
              ruleId: 'indent',
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
              },
            },
            expected: [
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
          },
          {
            params: {
              ruleId: 'semi',
              lint: {
                filePath: '/Users/username/repository-name/tests/targets/standard/semi.js',
                messages: [
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
              },
            },
            expected: [
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
          },
        ]

        test.each(cases)('rule id: $params.ruleId', ({ params, expected }) => {
          const analyzer = LintAnalyzer.create(params)

          const messages = analyzer.getUnexpectedLintMessages()

          expect(messages)
            .toEqual(expected)
        })
      })

      describe('without expected message', () => {
        /** @type {Array<object>} */
        const cases = [
          {
            params: {
              ruleId: 'indent',
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
              },
            },
          },
          {
            params: {
              ruleId: 'semi',
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
              },
            },
          },
        ]

        test.each(cases)('rule id: $params.ruleId', ({ params }) => {
          const analyzer = LintAnalyzer.create(params)

          const messages = analyzer.getUnexpectedLintMessages()

          expect(messages)
            .toBeInstanceOf(Array)
          expect(messages)
            .toHaveLength(0)
        })
      })
    })

    describe('with ruleId and message', () => {
      describe('with expected message', () => {
        /** @type {Array<object>} */
        const cases = [
          {
            params: {
              ruleId: 'no-restricted-syntax',
              message: 'Never use `let` variable declaration.',
              lint: {
                messages: [
                  {
                    ruleId: 'no-restricted-syntax',
                    severity: 2,
                    message: 'Never use `let` variable declaration.',
                    line: 5,
                    column: 1,
                    nodeType: 'VariableDeclaration',
                    messageId: 'restrictedSyntax',
                    endLine: 5,
                    endColumn: 12,
                  },
                  {
                    ruleId: 'no-restricted-syntax',
                    severity: 2,
                    message: 'Never use `Array#forEach()`.',
                    line: 6,
                    column: 1,
                    nodeType: 'CallExpression',
                    messageId: 'restrictedSyntax',
                    endLine: 8,
                    endColumn: 3,
                  },
                ],
              },
            },
            expected: [
              {
                ruleId: 'no-restricted-syntax',
                severity: 2,
                message: 'Never use `Array#forEach()`.',
                line: 6,
                column: 1,
                nodeType: 'CallExpression',
                messageId: 'restrictedSyntax',
                endLine: 8,
                endColumn: 3,
              },
            ],
          },
        ]

        test.each(cases)('rule id: $params.ruleId', ({ params, expected }) => {
          const analyzer = LintAnalyzer.create(params)

          const messages = analyzer.getUnexpectedLintMessages()

          expect(messages)
            .toEqual(expected)
        })
      })
    })
  })
})

describe('LintAnalyzer', () => {
  describe('#worksAsExpected()', () => {
    describe('to be truthy', () => {
      /** @type {Array<object>} */
      const cases = [
        {
          params: {
            ruleId: 'indent',
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
            },
          },
        },
        {
          params: {
            ruleId: 'semi',
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
            },
          },
        },
      ]

      test.each(cases)('rule id: $params.ruleId', ({ params }) => {
        const analyzer = LintAnalyzer.create(params)

        const actual = analyzer.worksAsExpected()

        expect(actual)
          .toBeTruthy()
      })
    })

    describe('to be falsy', () => {
      /** @type {Array<object>} */
      const cases = [
        {
          params: {
            ruleId: 'indent',
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
            },
          },
        },
        {
          params: {
            ruleId: 'semi',
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/semi.js',
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
              ],
            },
          },
        },
        {
          params: {
            ruleId: 'quotes',
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/quotes.js',
              messages: [],
            },
          },
        },
      ]

      test.each(cases)('rule id: $params.ruleId', ({ params }) => {
        const analyzer = LintAnalyzer.create(params)

        const actual = analyzer.worksAsExpected()

        expect(actual)
          .toBeFalsy()
      })
    })
  })
})

describe('LintAnalyzer', () => {
  describe('.generateNoLintMessage()', () => {
    const cases = [
      {
        params: {
          message: 'Never use let',
        },
        expected: '🔎 No lints that should be here\n              Never use let',
      },
      {
        params: {
          message: 'Never use var',
        },
        expected: '🔎 No lints that should be here\n              Never use var',
      },
      {
        params: {
          message: /Expected indentation of \d+ spaces but found \d+./,
        },
        expected: '🔎 No lints that should be here\n              /Expected indentation of \\d+ spaces but found \\d+./',
      },
      {
        params: {
          message: null,
        },
        expected: '🔎 No lints that should be here',
      },
    ]

    test.each(cases)('message: $params.message', ({ params, expected }) => {
      const actual = LintAnalyzer.generateNoLintMessage(params.message)

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('LintAnalyzer', () => {
  describe('#getUnexpectedLint()', () => {
    describe('with ruleId only', () => {
      describe('has hit messages', () => {
        /** @type {Array<object>} */
        const cases = [
          {
            params: {
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
              },
            },
          },
          {
            params: {
              ruleId: 'semi',
              message: null,
              lint: {
                filePath: '/Users/username/repository-name/tests/targets/standard/semi.js',
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
                ],
              },
            },
          },
        ]

        test.each(cases)('rule id: $params.ruleId', ({ params }) => {
          const analyzer = LintAnalyzer.create(params)

          const actual = analyzer.getUnexpectedLint()

          expect(actual)
            .toEqual(params.lint)
        })
      })

      describe('has no hit messages', () => {
        /** @type {Array<object>} */
        const cases = [
          {
            params: {
              ruleId: 'indent',
              message: null,
              lint: {
                filePath: '/Users/username/repository-name/tests/targets/standard/indent.js',
                messages: [],
              },
            },
            expected: {
              filePath: '/Users/username/repository-name/tests/targets/standard/indent.js',
              fatalErrorCount: 1,
              errorCount: 1,
              messages: [
                {
                  ruleId: 'indent',
                  severity: 2,
                  message: '🔎 No lints that should be here',
                  line: 0,
                  column: 0,
                },
              ],
            },
          },
          {
            params: {
              ruleId: 'semi',
              message: null,
              lint: {
                filePath: '/Users/username/repository-name/tests/targets/standard/semi.js',
                messages: [],
              },
            },
            expected: {
              filePath: '/Users/username/repository-name/tests/targets/standard/semi.js',
              fatalErrorCount: 1,
              errorCount: 1,
              messages: [
                {
                  ruleId: 'semi',
                  severity: 2,
                  message: '🔎 No lints that should be here',
                  line: 0,
                  column: 0,
                },
              ],
            },
          },
          {
            params: {
              ruleId: 'quotes',
              message: null,
              lint: {
                filePath: '/Users/username/repository-name/tests/targets/standard/quotes.js',
                messages: [],
              },
            },
            expected: {
              filePath: '/Users/username/repository-name/tests/targets/standard/quotes.js',
              fatalErrorCount: 1,
              errorCount: 1,
              messages: [
                {
                  ruleId: 'quotes',
                  severity: 2,
                  message: '🔎 No lints that should be here',
                  line: 0,
                  column: 0,
                },
              ],
            },
          },
        ]

        test.each(cases)('rule id: $params.ruleId', ({ params, expected }) => {
          const analyzer = LintAnalyzer.create(params)

          const actual = analyzer.getUnexpectedLint()

          expect(actual)
            .toEqual(expected)
        })
      })
    })

    describe('with ruleId and message', () => {
      describe('has hit messages', () => {
        /** @type {Array<object>} */
        const cases = [
          {
            params: {
              ruleId: 'no-restricted-syntax',
              message: 'Never use `let`',
              lint: {
                filePath: '/Users/username/repository-name/tests/targets/standard/no-restricted-syntax/noLet.js',
                messages: [
                  {
                    ruleId: 'no-restricted-syntax',
                    severity: 2,
                    message: 'Never user `let`.',
                    line: 10,
                    column: 1,
                    nodeType: 'VariableDeclaration',
                    messageId: 'restrictedSyntax',
                    endLine: 10,
                    endColumn: 12,
                  },
                ],
              },
            },
          },
          {
            params: {
              ruleId: 'no-restricted-syntax',
              message: 'Never use `Array#forEach()`',
              lint: {
                filePath: '/Users/username/repository-name/tests/targets/standard/no-restricted-syntax/noArrayForEach.js',
                messages: [
                  {
                    ruleId: 'no-restricted-syntax',
                    severity: 2,
                    message: 'Never user `Array#forEach()`.',
                    line: 6,
                    column: 1,
                    nodeType: 'CallExpression',
                    messageId: 'restrictedSyntax',
                    endLine: 8,
                    endColumn: 3,
                  },
                ],
              },
            },
          },
        ]

        test.each(cases)('rule id: $params.ruleId', ({ params }) => {
          const analyzer = LintAnalyzer.create(params)

          const actual = analyzer.getUnexpectedLint()

          expect(actual)
            .toEqual(params.lint)
        })
      })

      describe('has no hit messages', () => {
        /** @type {Array<object>} */
        const cases = [
          {
            params: {
              ruleId: 'no-restricted-syntax',
              message: 'Never use `let`',
              lint: {
                filePath: '/Users/username/repository-name/tests/targets/standard/no-restricted-syntax/noLet.js',
                messages: [],
              },
            },
            expected: {
              filePath: '/Users/username/repository-name/tests/targets/standard/no-restricted-syntax/noLet.js',
              messages: [
                {
                  ruleId: 'no-restricted-syntax',
                  severity: 2, // error
                  message: '🔎 No lints that should be here\n              Never use `let`',
                  line: 0,
                  column: 0,
                },
              ],
              fatalErrorCount: 1,
              errorCount: 1,
            },
          },
          {
            params: {
              ruleId: 'no-restricted-syntax',
              message: 'Never use `Array#forEach()`',
              lint: {
                filePath: '/Users/username/repository-name/tests/targets/standard/no-restricted-syntax/noArrayForEach.js',
                messages: [],
              },
            },
            expected: {
              filePath: '/Users/username/repository-name/tests/targets/standard/no-restricted-syntax/noArrayForEach.js',
              messages: [
                {
                  ruleId: 'no-restricted-syntax',
                  severity: 2, // error
                  message: '🔎 No lints that should be here\n              Never use `Array#forEach()`',
                  line: 0,
                  column: 0,
                },
              ],
              fatalErrorCount: 1,
              errorCount: 1,
            },
          },
        ]

        test.each(cases)('rule id: $params.ruleId', ({ params, expected }) => {
          const analyzer = LintAnalyzer.create(params)

          const actual = analyzer.getUnexpectedLint()

          expect(actual)
            .toEqual(expected)
        })
      })
    })
  })
})
