'use strict'

const {
  ConstructorSpyGenerator,
} = require('@openreachtech/renchan-test-tools')
const LintAnalyzer = require('../../lib/LintAnalyzer')

describe('LintAnalyzer', () => {
  describe('constructor', () => {
    describe('to keep property', () => {
      /** @type {Array<Object>} */
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
      /** @type {Array<Object>} */
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
      /** @type {Array<Object>} */
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
  describe('#get:hitMessages', () => {
    describe('with ruleId only', () => {
      /** @type {Array<Object>} */
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

        const messages = analyzer.hitMessages

        expect(messages)
          .toEqual(expected)
      })
    })

    describe('with ruleId and message', () => {
      /** @type {Array<Object>} */
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
                  endColumn: 12
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
                  endColumn: 3
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
              endColumn: 12
            },
          ],
        },
      ]

      test.each(cases)('rule id: $params.ruleId', ({ params, expected }) => {
        const analyzer = LintAnalyzer.create(params)

        const messages = analyzer.hitMessages

        expect(messages)
          .toEqual(expected)
      })
    })
  })
})

describe('LintAnalyzer', () => {
  describe('#get:unexpectedMessages', () => {
    describe('with ruleId only', () => {
      describe('with expected message', () => {
        /** @type {Array<Object>} */
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

          const messages = analyzer.unexpectedMessages

          expect(messages)
            .toEqual(expected)
        })
      })

      describe('without expected message', () => {
        /** @type {Array<Object>} */
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

          const messages = analyzer.unexpectedMessages

          expect(messages)
            .toBeInstanceOf(Array)
          expect(messages)
            .toHaveLength(0)
        })
      })
    })

    describe('with ruleId and message', () => {
      describe('with expected message', () => {
        /** @type {Array<Object>} */
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
                    endColumn: 12
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
                    endColumn: 3
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
                endColumn: 3
              },
            ],
          },
        ]

        test.each(cases)('rule id: $params.ruleId', ({ params, expected }) => {
          const analyzer = LintAnalyzer.create(params)

          const messages = analyzer.unexpectedMessages

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
      /** @type {Array<Object>} */
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
      /** @type {Array<Object>} */
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
            ruleId: 'quote',
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/quote.js',
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
  describe('#generateNoLint()', () => {
    describe('with ruleId only', () => {
      /** @type {Array<Object>} */
      const cases = [
        {
          params: {
            ruleId: 'indent',
          },
          expected: {
            ruleId: 'indent',
            severity: 2,
            message: 'No lints that should be there',
          },
        },
        {
          params: {
            ruleId: 'semi',
          },
          expected: {
            ruleId: 'semi',
            severity: 2,
            message: 'No lints that should be there',
          },
        },
      ]

      test.each(cases)('rule id: $params.ruleId', ({ params, expected }) => {
        const analyzer = LintAnalyzer.create(params)

        const message = analyzer.generateNoLint()

        expect(message)
          .toEqual(expected)
      })
    })

    describe('with ruleId and message', () => {
      /** @type {Array<Object>} */
      const cases = [
        {
          params: {
            ruleId: 'no-restricted-syntax',
            message: 'used `let` variable declaration',
          },
          expected: {
            ruleId: 'no-restricted-syntax "used `let` variable declaration"',
            severity: 2,
            message: 'No lints that should be there',
          },
        },
        {
          params: {
            ruleId: 'no-restricted-syntax',
            message: 'used `Array#forEach()`',
          },
          expected: {
            ruleId: 'no-restricted-syntax "used `Array#forEach()`"',
            severity: 2,
            message: 'No lints that should be there',
          },
        },
      ]

      test.each(cases)('rule id: $params.ruleId', ({ params, expected }) => {
        const analyzer = LintAnalyzer.create(params)

        const message = analyzer.generateNoLint()

        expect(message)
          .toEqual(expected)
      })
    })
  })
})
