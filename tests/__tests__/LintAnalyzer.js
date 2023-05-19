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
        const analyzer = new LintAnalyzer(params)

        expect(analyzer)
          .toHaveProperty('lint', params.lint)
        expect(analyzer.lint)
          .toBe(params.lint) // same reference
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
        const analyzer = LintAnalyzer.create(params)

        expect(analyzer)
          .toBeInstanceOf(LintAnalyzer)
      })
    })

    describe('to be instance of LintAnalyzer', () => {
      /** @type {Array<Object>} */
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
  describe('#get:ruleId', () => {
    describe('with correct file path', () => {
      /** @type {Array<Object>} */
      const cases = [
        {
          params: {
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/indent.js',
            },
          },
          expected: 'indent',
        },
        {
          params: {
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/semi.js',
            },
          },
          expected: 'semi',
        },
      ]

      test.each(cases)('file path: $params.lint.filePath', ({ params, expected }) => {
        const analyzer = LintAnalyzer.create(params)

        const ruleId = analyzer.ruleId

        expect(ruleId)
          .toBe(expected)
      })
    })

    describe('with invalid file path', () => {
      /** @type {Array<Object>} */
      const cases = [
        {
          params: {
            lint: {
              filePath: '/Users/username/repository-name/tests/targets/standard/indent',
            },
          },
        },
        {
          params: {
            lint: {
              filePath: '',
            },
          },
        },
      ]

      test.each(cases)('file path: $params.lint.filePath', ({ params, expected }) => {
        const analyzer = LintAnalyzer.create(params)

        const ruleId = analyzer.ruleId

        expect(ruleId)
          .toBeNull()
      })
    })
  })
})

describe('LintAnalyzer', () => {
  describe('#get:hitMessages', () => {
    describe('from messages', () => {
      /** @type {Array<Object>} */
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

      test.each(cases)('file path: $params.lint.filePath', ({ params, expected }) => {
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
    describe('from messages', () => {
      /** @type {Array<Object>} */
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
        .concat([
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
              },
            },
            expected: [],
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
              },
            },
            expected: [],
          },
        ])

      test.each(cases)('file path: $params.lint.filePath', ({ params, expected }) => {
        const analyzer = LintAnalyzer.create(params)

        const messages = analyzer.unexpectedMessages

        expect(messages)
          .toEqual(expected)
      })
    })
  })
})
