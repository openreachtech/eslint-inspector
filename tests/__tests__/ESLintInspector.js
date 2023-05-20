'use strict'

const {
  ESLint,
} = require('eslint')

const {
  ConstructorSpyGenerator,
} = require('@openreachtech/renchan-test-tools')

const ESLintInspector = require('../../lib/ESLintInspector')
const LintAnalyzer = require('../../lib/LintAnalyzer')

describe('ESLintInspector', () => {
  describe('constructor', () => {
    describe('to keep property', () => {
      describe('#lints', () => {
        /** @type {Array<Object>} */
        const cases = [
          {
            params: {
              analyzers: [],
            },
          },
          {
            params: {
              analyzers: [
                LintAnalyzer.create({
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
                }),
                LintAnalyzer.create({
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
                }),
              ],
            },
          },
        ]

        test.each(cases)('[0] analyzers: $params.analyzers', ({ params }) => {
          const inspector = new ESLintInspector(params)

          expect(inspector)
            .toHaveProperty('analyzers', params.analyzers)
        })
      })
    })
  })
})

describe('ESLintInspector', () => {
  describe('.create()', () => {
    describe('to return instance of', () => {
      /** @type {Array<Object>} */
      const cases = [
        {
          params: {
            lints: [],
          },
        },
        {
          params: {
            lints: [
              {
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
              {
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
            ],
          },
        },
      ]

      test.each(cases)('[0] lints: $params.lints', ({ params }) => {
        const inspector = ESLintInspector.create(params)

        expect(inspector)
          .toBeInstanceOf(ESLintInspector)
      })
    })

    describe('to call constructor', () => {
      /** @type {Array<Object>} */
      const cases = [
        {
          params: {
            lints: [],
          },
          expected: {
            analyzers: [],
          },
        },
        {
          params: {
            lints: [
              {
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
              {
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
            ],
          },
          expected: {
            analyzers: [
              LintAnalyzer.create({
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
              }),
              LintAnalyzer.create({
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
              }),
            ],
          },
        },
      ]

      test.each(cases)('[0] lints: $params.lints', ({ params, expected }) => {
        const DerivedClass = ConstructorSpyGenerator.create({ jest })
          .generateSpyKitClass(ESLintInspector)

        DerivedClass.create(params)

        expect(DerivedClass.__spy__)
          .toHaveBeenCalledWith(expected)

        DerivedClass.__spy__
          .mockRestore()
      })
    })
  })
})

describe('ESLintInspector', () => {
  describe('.createESLintClient()', () => {
    test('to return instance of ESLint', () => {
      const client = ESLintInspector.createESLintClient()

      expect(client)
        .toBeInstanceOf(ESLint)
    })
  })
})
