'use strict'

const path = require('path')

const {
  ESLint,
} = require('eslint')

const {
  ConstructorSpyGenerator,
} = require('@openreachtech/renchan-test-tools')

const ESLintInspector = require('../../lib/ESLintInspector')
const FileLintAnalyzer = require('../../lib/FileLintAnalyzer')
const LintAnalyzer = require('../../lib/LintAnalyzer')

const CONTROL_CHARACTERS = require('../constants/control-characters')

const messageHash = {
  noLet: 'Object-Oriented Programming does not require `let` variable declaration.',
}

describe('ESLintInspector', () => {
  describe('constructor', () => {
    describe('to keep property', () => {
      describe('#analyzers', () => {
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
                }),
                LintAnalyzer.create({
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
            analyzers: [],
          },
        },
        {
          params: {
            analyzers: [
              LintAnalyzer.create({
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
              }),
              LintAnalyzer.create({
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
              }),
            ],
          },
        },
      ]

      test.each(cases)('[0] analyzers: $params.analyzers.0', ({ params }) => {
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
            analyzers: [],
          },
        },
        {
          params: {
            analyzers: [
              LintAnalyzer.create({
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
              }),
              LintAnalyzer.create({
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
              }),
            ],
          },
        },
      ]

      test.each(cases)('[0] lints: $params.lints', ({ params }) => {
        const DerivedClass = ConstructorSpyGenerator.create({ jest })
          .generateSpyKitClass(ESLintInspector)

        DerivedClass.create(params)

        expect(DerivedClass.__spy__)
          .toHaveBeenCalledWith(params)

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

describe('ESLintInspector', () => {
  describe('.createAsyncWithFilePaths()', () => {
    describe('to return instance of ESLintInspector', () => {
      const cases = [
        {
          params: {
            filePaths: [],
          },
        },
        {
          params: {
            filePaths: [
              'tests/samples/expected/standard/indent.js',
              'tests/samples/expected/standard/semi.js',
            ],
          },
        },
      ]

      test.each(cases)('[0] filePaths: $params.filePaths.0', async ({ params }) => {
        const inspector = await ESLintInspector.createAsyncWithFilePaths(params.filePaths)

        expect(inspector)
          .toBeInstanceOf(ESLintInspector)
      })
    })

    describe('to call ESLint#lintFiles()', () => {
      const cases = [
        {
          params: {
            filePaths: [],
          },
          expected: {
            analyzers: [],
          },
        },
        {
          params: {
            filePaths: [
              'tests/samples/expected/standard/indent.js',
              'tests/samples/expected/standard/semi.js',
            ],
          },
          expected: {
            analyzers: [
              expect.any(FileLintAnalyzer),
              expect.any(FileLintAnalyzer),
            ],
          },
        },
      ]

      test.each(cases)('[0] filePaths: $params.filePaths.0', async ({ params, expected }) => {
        const mockClient = new ESLint()

        const lintFilesSpy = jest.spyOn(mockClient, 'lintFiles')
        const createESLintClientSpy = jest.spyOn(ESLintInspector, 'createESLintClient')
          .mockReturnValue(mockClient)
        const createSpy = jest.spyOn(ESLintInspector, 'create')

        await ESLintInspector.createAsyncWithFilePaths(params.filePaths)

        expect(lintFilesSpy)
          .toHaveBeenCalledWith(params.filePaths)
        expect(createSpy)
          .toHaveBeenCalledWith({
            analyzers: expected.analyzers,
          })

        lintFilesSpy.mockRestore()
        createESLintClientSpy.mockRestore()
        createSpy.mockRestore()
      })
    })
  })
})

describe('ESLintInspector', () => {
  describe('.createAsyncWithText()', () => {
    describe('to return instance of ESLintInspector', () => {
      const cases = [
        {
          params: {
            ruleId: 'indent',
            text: '',
          },
        },
        {
          params: {
            ruleId: 'semi',
            text: 'const alpha = 1;',
          },
        },
      ]

      test.each(cases)('text: $params.text', async ({ params }) => {
        const inspector = await ESLintInspector.createAsyncWithText(params)

        expect(inspector)
          .toBeInstanceOf(ESLintInspector)
      })
    })

    describe('to call ESLint#lintText()', () => {
      const cases = [
        {
          params: {
            ruleId: 'indent',
            text: '',
          },
          expected: {
            analyzers: [
              LintAnalyzer.create({
                ruleId: 'indent',
                lint: {
                  filePath: '<text>',
                  messages: [],
                  suppressedMessages: [],
                  errorCount: 0,
                  fatalErrorCount: 0,
                  warningCount: 0,
                  fixableErrorCount: 0,
                  fixableWarningCount: 0,
                  usedDeprecatedRules: [],
                },
              }),
            ],
          },
        },
        {
          params: {
            ruleId: 'semi',
            text: 'const alpha = 1;',
          },
          expected: {
            analyzers: [
              LintAnalyzer.create({
                ruleId: 'semi',
                lint: {
                  filePath: '<text>',
                  messages: [
                    {
                      ruleId: 'strict',
                      severity: 2,
                      message: 'Use the global form of \'use strict\'.',
                      line: 1,
                      column: 1,
                      nodeType: 'Program',
                      messageId: 'global',
                      endLine: 1,
                      endColumn: 17,
                    },
                    {
                      ruleId: 'no-unused-vars',
                      severity: 2,
                      message: '\'alpha\' is assigned a value but never used.',
                      line: 1,
                      column: 7,
                      nodeType: 'Identifier',
                      messageId: 'unusedVar',
                      endLine: 1,
                      endColumn: 12,
                    },
                    {
                      ruleId: 'semi',
                      severity: 2,
                      message: 'Extra semicolon.',
                      line: 1,
                      column: 16,
                      nodeType: 'VariableDeclaration',
                      messageId: 'extraSemi',
                      endLine: 1,
                      endColumn: 17,
                      fix: {
                        range: [14, 16],
                        text: '1',
                      },
                    },
                    {
                      ruleId: 'eol-last',
                      severity: 2,
                      message: 'Newline required at end of file but not found.',
                      line: 1,
                      column: 17,
                      nodeType: 'Program',
                      messageId: 'missing',
                      fix: {
                        range: [16, 16],
                        text: '\n',
                      },
                    },
                  ],
                  suppressedMessages: [],
                  errorCount: 4,
                  fatalErrorCount: 0,
                  warningCount: 0,
                  fixableErrorCount: 2,
                  fixableWarningCount: 0,
                  source: 'const alpha = 1;',
                  usedDeprecatedRules: [],
                },
              }),
            ],
          },
        },
      ]

      test.each(cases)('text: $params.text', async ({ params, expected }) => {
        const mockClient = new ESLint()

        const lintTextSpy = jest.spyOn(mockClient, 'lintText')
        const createESLintClientSpy = jest.spyOn(ESLintInspector, 'createESLintClient')
          .mockReturnValue(mockClient)
        const createSpy = jest.spyOn(ESLintInspector, 'create')

        await ESLintInspector.createAsyncWithText(params)

        expect(lintTextSpy)
          .toHaveBeenCalledWith(params.text)
        expect(createSpy)
          .toHaveBeenCalledWith({
            analyzers: expected.analyzers,
          })

        lintTextSpy.mockRestore()
        createESLintClientSpy.mockRestore()
        createSpy.mockRestore()
      })
    })
  })
})

describe('ESLintInspector', () => {
  describe('#hitsEachRule()', () => {
    describe('to be truthy', () => {
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
              }),
              LintAnalyzer.create({
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
              }),
            ],
          },
        },
      ]

      test.each(cases)('[0] rule id: $params.analyzers.0.ruleId', async ({ params }) => {
        const inspector = await ESLintInspector.create(params)

        const result = inspector.hitsEachRule()

        expect(result)
          .toBeTruthy()
      })
    })

    describe('to be falsy', () => {
      const cases = [
        {
          params: {
            analyzers: [
              LintAnalyzer.create({
                ruleId: 'indent',
                lint: {
                  filePath: '/Users/username/repository-name/tests/targets/standard/indent.js',
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

      test.each(cases)('[0] rule id: $params.analyzers.0.ruleId', async ({ params }) => {
        const inspector = await ESLintInspector.create(params)

        const result = inspector.hitsEachRule()

        expect(result)
          .toBeFalsy()
      })
    })
  })
})

describe('ESLintInspector', () => {
  describe('#hasUnexpectedHit()', () => {
    describe('to be truthy', () => {
      const cases = [
        {
          params: {
            analyzers: [
              LintAnalyzer.create({
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

      test.each(cases)('[0] rule id: $params.analyzers.0.ruleId', async ({ params }) => {
        const inspector = await ESLintInspector.create(params)

        const result = inspector.hasUnexpectedHit()

        expect(result)
          .toBeTruthy()
      })
    })

    describe('to be falsy', () => {
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
              }),
              LintAnalyzer.create({
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
              }),
            ],
          },
        },
      ]

      test.each(cases)('[0] rule id: $params.analyzers.0.ruleId', async ({ params }) => {
        const inspector = await ESLintInspector.create(params)

        const result = inspector.hasUnexpectedHit()

        expect(result)
          .toBeFalsy()
      })
    })
  })
})

describe('ESLintInspector', () => {
  describe('#worksAsExpected()', () => {
    describe('to be truthy', () => {
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
              }),
            ],
          },
        },
        {
          params: {
            analyzers: [
              LintAnalyzer.create({
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
              }),
            ],
          },
        },
        {
          params: {
            analyzers: [
              LintAnalyzer.create({
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
              }),
              LintAnalyzer.create({
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
              }),
            ],
          },
        },
      ]

      test.each(cases)('[0] rule id: $params.analyzers.0.ruleId', async ({ params }) => {
        const inspector = await ESLintInspector.create(params)

        const result = inspector.worksAsExpected()

        expect(result)
          .toBeTruthy()
      })
    })

    describe('to be falsy', () => {
      describe('with one analyzer', () => {
        const cases = [
          {
            params: {
              analyzers: [
                LintAnalyzer.create({
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
              ],
            },
          },
          {
            params: {
              analyzers: [
                LintAnalyzer.create({
                  ruleId: 'indent',
                  lint: {
                    filePath: '/Users/username/repository-name/tests/targets/standard/indent.js',
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
                    errorCount: 2,
                    fatalErrorCount: 0,
                    warningCount: 0,
                    fixableErrorCount: 2,
                    fixableWarningCount: 0,
                    source: 'dummy code of indent.js',
                    usedDeprecatedRules: [],
                  },
                }),
              ],
            },
          },
          {
            params: {
              analyzers: [
                LintAnalyzer.create({
                  ruleId: 'indent',
                  lint: {
                    filePath: '/Users/username/repository-name/tests/targets/standard/indent.js',
                    messages: [],
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
              ],
            },
          },
          {
            params: {
              analyzers: [
                LintAnalyzer.create({
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
          {
            params: {
              analyzers: [
                LintAnalyzer.create({
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
          {
            params: {
              analyzers: [
                LintAnalyzer.create({
                  ruleId: 'semi',
                  lint: {
                    filePath: '/Users/username/repository-name/tests/targets/standard/semi.js',
                    messages: [],
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
          {
            params: {
              analyzers: [
                LintAnalyzer.create({
                  ruleId: 'indent',
                  lint: {
                    filePath: '/Users/username/repository-name/tests/targets/standard/indent.js',
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

        test.each(cases)('$#', async ({ params }) => {
          const inspector = await ESLintInspector.create(params)

          const result = inspector.worksAsExpected()

          expect(result)
            .toBeFalsy()
        })
      })

      describe('with plural analyzers', () => {
        const cases = [
          {
            params: {
              analyzers: [
                LintAnalyzer.create({
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
                }),
                LintAnalyzer.create({
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
          {
            params: {
              analyzers: [
                LintAnalyzer.create({
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
                }),
              ],
            },
          },
          {
            params: {
              analyzers: [
                LintAnalyzer.create({
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

        test.each(cases)('$#', async ({ params }) => {
          const inspector = await ESLintInspector.create(params)

          const result = inspector.worksAsExpected()

          expect(result)
            .toBeFalsy()
        })
      })
    })
  })
})

describe('ESLintInspector', () => {
  describe('#getUnexpectedLintLog()', () => {
    describe('to be formatted log', () => {
      const RESET = CONTROL_CHARACTERS.RESET_STYLE
      const BOLD = CONTROL_CHARACTERS.BOLD_STYLE
      const COLOR_DEFAULT = CONTROL_CHARACTERS.COLOR_DEFAULT
      const COLOR_RED = CONTROL_CHARACTERS.COLOR_RED
      const COLOR_WHITE = CONTROL_CHARACTERS.COLOR_WHITE
      const COLOR_GRAY = CONTROL_CHARACTERS.COLOR_GRAY
      const UNDERLINE_OPEN = CONTROL_CHARACTERS.UNDERLINE_OPEN
      const UNDERLINE_CLOSE = CONTROL_CHARACTERS.UNDERLINE_CLOSE

      const cases = [
        {
          params: {
            analyzers: [
              LintAnalyzer.create({
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
          expected: `${RESET}${RESET}
${RESET}${UNDERLINE_OPEN}/Users/username/repository-name/tests/targets/standard/indent.js${UNDERLINE_CLOSE}${RESET}
${RESET}   ${COLOR_GRAY}9:1${COLOR_WHITE}   ${COLOR_RED}error${COLOR_DEFAULT}  Expected indentation of 4 spaces but found 6  ${COLOR_GRAY}indent${COLOR_WHITE}${RESET}
${RESET}  ${COLOR_GRAY}11:1${COLOR_WHITE}   ${COLOR_RED}error${COLOR_DEFAULT}  Expected indentation of 2 spaces but found 4  ${COLOR_GRAY}indent${COLOR_WHITE}${RESET}
${RESET}   ${COLOR_GRAY}3:18${COLOR_WHITE}  ${COLOR_RED}error${COLOR_DEFAULT}  Extra semicolon                               ${COLOR_GRAY}semi${COLOR_WHITE}${RESET}
${RESET}${RESET}
${RESET}${UNDERLINE_OPEN}/Users/username/repository-name/tests/targets/standard/semi.js${UNDERLINE_CLOSE}${RESET}
${RESET}   ${COLOR_GRAY}9:1${COLOR_WHITE}   ${COLOR_RED}error${COLOR_DEFAULT}  Expected indentation of 4 spaces but found 6  ${COLOR_GRAY}indent${COLOR_WHITE}${RESET}
${RESET}  ${COLOR_GRAY}11:1${COLOR_WHITE}   ${COLOR_RED}error${COLOR_DEFAULT}  Expected indentation of 2 spaces but found 4  ${COLOR_GRAY}indent${COLOR_WHITE}${RESET}
${RESET}   ${COLOR_GRAY}3:18${COLOR_WHITE}  ${COLOR_RED}error${COLOR_DEFAULT}  Extra semicolon                               ${COLOR_GRAY}semi${COLOR_WHITE}${RESET}
${RESET}${RESET}
${RESET}${COLOR_RED}${BOLD}✖ 3 problems (3 errors, 0 warnings)${COLOR_WHITE}${COLOR_DEFAULT}${RESET}
${RESET}${COLOR_RED}${BOLD}${COLOR_WHITE}${COLOR_DEFAULT}${COLOR_RED}${BOLD}  3 errors and 0 warnings potentially fixable with the \`--fix\` option.${COLOR_WHITE}${COLOR_DEFAULT}${RESET}
${RESET}${COLOR_RED}${BOLD}${COLOR_WHITE}${COLOR_DEFAULT}${RESET}`
        },
      ]

      test.each(cases)('[0] rule id: $params.analyzers.0.ruleId', async ({ params, expected }) => {
        // same as /\x1b\[.+?m/g, it is to avoid no-control-regex rule
        const remover = new RegExp(`${'\x1b'}\\[.+?m`, 'g')

        const inspector = ESLintInspector.create(params)

        const log = await inspector.getUnexpectedLintLog()

        expect(log.replace(remover, ''))
          .toBe(expected.replace(remover, ''))
      })
    })
  })
})

describe('ESLintInspector', () => {
  describe('#getFormattedLogIfUnexpected()', () => {
    describe('to be null', () => {
      const cases = [
        {
          params: {
            analyzers: [
              LintAnalyzer.create({
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
              }),
              LintAnalyzer.create({
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
              }),
            ],
          },
        },
      ]

      test.each(cases)('[0] rule id: $params.analyzers.0.ruleId', async ({ params }) => {
        const inspector = ESLintInspector.create(params)

        const log = await inspector.getFormattedLogIfUnexpected()

        expect(log)
          .toBeNull()
      })
    })

    describe('to be log', () => {
      const cases = [
        {
          params: {
            analyzers: [
              LintAnalyzer.create({
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

      test.each(cases)('[0] rule id: $params.analyzers.0.ruleId', async ({ params }) => {
        const inspector = ESLintInspector.create(params)

        const log = await inspector.getFormattedLogIfUnexpected()

        expect(log)
          .toEqual(
            expect.any(String)
          )
      })
    })
  })
})

describe('ESLintInspector', () => {
  describe('#getFormattedLogIfUnexpected()', () => {
    describe('with file paths', () => {
      const basePath = __dirname.replace(/__tests__$/, '')

      describe('to be null', () => {
        const cases = [
          {
            params: {
              filePaths: [
                'tests/samples/expected/**',
              ],
              messageHash: {
                noLet: 'Object-Oriented Programming does not require `let` variable declaration.',
              },
            },
          },
          {
            params: {
              filePaths: [
                'tests/samples/expected/standard/no-restricted-syntax/**',
              ],
              messageHash: {
                noLet: 'Object-Oriented Programming does not require `let` variable declaration.',
              },
            },
          },
        ]

        test.each(cases)('file paths: $params.filePaths', async ({ params }) => {
          const inspector = await ESLintInspector.createAsyncWithFilePaths(
            params.filePaths,
            params.messageHash
          )

          const log = await inspector.getFormattedLogIfUnexpected()

          expect(log)
            .toBeNull()
        })
      })

      describe('to be log', () => {
        const cases = [
          {
            params: {
              filePaths: [
                'tests/samples/unexpected/**',
              ],
              messageHash: {
                noLet: 'Object-Oriented Programming does not require `let` variable declaration.',
              },
            },
            expected: [
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'samples/unexpected/standard/indent.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m   \x1B[2m7:1\x1B[22m   \x1B[31merror\x1B[39m  Expected indentation of 4 spaces but found 6  \x1B[2mindent\x1B[22m\x1B[0m',
              '\x1B[0m   \x1B[2m8:1\x1B[22m   \x1B[31merror\x1B[39m  Expected indentation of 2 spaces but found 4  \x1B[2mindent\x1B[22m\x1B[0m',
              '\x1B[0m  \x1B[2m10:23\x1B[22m  \x1B[31merror\x1B[39m  Extra semicolon                               \x1B[2msemi\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'samples/unexpected/standard/no-restricted-syntax/noLet.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m0:0\x1B[22m  \x1B[31merror\x1B[39m  🔎 No lints that should be here\x1B[0m',
              '\x1B[0m              Object-Oriented Programming does not require `let` variable declaration  \x1B[2mno-restricted-syntax\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'samples/unexpected/standard/semi.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m3:1\x1B[22m   \x1B[31merror\x1B[39m  Unexpected console statement  \x1B[2mno-console\x1B[22m\x1B[0m',
              '\x1B[0m  \x1B[2m5:18\x1B[22m  \x1B[31merror\x1B[39m  Extra semicolon               \x1B[2msemi\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m✖ 6 problems (6 errors, 0 warnings)\x1B[22m\x1B[39m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m\x1B[22m\x1B[39m\x1B[31m\x1B[1m  4 errors and 0 warnings potentially fixable with the `--fix` option.\x1B[22m\x1B[39m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m\x1B[22m\x1B[39m\x1B[0m'
            ]
              .join('\n'),
          },
          {
            params: {
              filePaths: [
                'tests/samples/unexpected/standard/no-restricted-syntax/**',
              ],
              messageHash: {
                noLet: 'Object-Oriented Programming does not require `let` variable declaration.',
              },
            },
            expected: [
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'samples/unexpected/standard/no-restricted-syntax/noLet.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m0:0\x1B[22m  \x1B[31merror\x1B[39m  🔎 No lints that should be here\x1B[0m',
              '\x1B[0m              Object-Oriented Programming does not require `let` variable declaration  \x1B[2mno-restricted-syntax\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m✖ 1 problem (1 error, 0 warnings)\x1B[22m\x1B[39m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m\x1B[22m\x1B[39m\x1B[0m'
            ]
              .join('\n'),
          },
        ]

        test.each(cases)('file paths: $params.filePaths', async ({ params, expected }) => {
          const inspector = await ESLintInspector.createAsyncWithFilePaths(
            params.filePaths,
            params.messageHash
          )

          const log = await inspector.getFormattedLogIfUnexpected()

          expect(log.replace(controlCharactersRemover, ''))
            .toBe(expected.replace(controlCharactersRemover, ''))
        })
      })

      describe('no lints', () => {
        const cases = [
          {
            params: {
              filePaths: [
                'tests/samples/no-lints/all/**',
              ],
              messageHash,
            },
            expected: [
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'samples/no-lints/all/indent.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m0:0\x1B[22m  \x1B[31merror\x1B[39m  🔎 No lints that should be here  \x1B[2mindent\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'samples/no-lints/all/no-restricted-syntax/noLet.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m0:0\x1B[22m  \x1B[31merror\x1B[39m  🔎 No lints that should be here\x1B[0m',
              '\x1B[0m              Object-Oriented Programming does not require `let` variable declaration  \x1B[2mno-restricted-syntax\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'samples/no-lints/all/semi.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m0:0\x1B[22m  \x1B[31merror\x1B[39m  🔎 No lints that should be here  \x1B[2msemi\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m✖ 3 problems (3 errors, 0 warnings)\x1B[22m\x1B[39m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m\x1B[22m\x1B[39m\x1B[0m',
            ]
              .join('\n'),
          },
          {
            params: {
              filePaths: [
                'tests/samples/no-lints/with-unexpected/**',
              ],
              messageHash,
            },
            expected: [
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'samples/no-lints/with-unexpected/indent.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m   \x1B[2m7:1\x1B[22m   \x1B[31merror\x1B[39m  Expected indentation of 4 spaces but found 6  \x1B[2mindent\x1B[22m\x1B[0m',
              '\x1B[0m   \x1B[2m8:1\x1B[22m   \x1B[31merror\x1B[39m  Expected indentation of 2 spaces but found 4  \x1B[2mindent\x1B[22m\x1B[0m',
              '\x1B[0m  \x1B[2m10:23\x1B[22m  \x1B[31merror\x1B[39m  Extra semicolon                               \x1B[2msemi\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'samples/no-lints/with-unexpected/no-restricted-syntax/noLet.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m0:0\x1B[22m  \x1B[31merror\x1B[39m  🔎 No lints that should be here\x1B[0m',
              '\x1B[0m              Object-Oriented Programming does not require `let` variable declaration  \x1B[2mno-restricted-syntax\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'samples/no-lints/with-unexpected/semi.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m3:1\x1B[22m   \x1B[31merror\x1B[39m  Unexpected console statement  \x1B[2mno-console\x1B[22m\x1B[0m',
              '\x1B[0m  \x1B[2m5:18\x1B[22m  \x1B[31merror\x1B[39m  Extra semicolon               \x1B[2msemi\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m✖ 6 problems (6 errors, 0 warnings)\x1B[22m\x1B[39m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m\x1B[22m\x1B[39m\x1B[31m\x1B[1m  4 errors and 0 warnings potentially fixable with the `--fix` option.\x1B[22m\x1B[39m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m\x1B[22m\x1B[39m\x1B[0m'
            ]
              .join('\n'),
          },
        ]

        test.each(cases)('file paths: $params.filePaths', async ({ params, expected }) => {
          const inspector = await ESLintInspector.createAsyncWithFilePaths(
            params.filePaths,
            params.messageHash
          )

          const log = await inspector.getFormattedLogIfUnexpected()

          expect(log.replace(controlCharactersRemover, ''))
            .toBe(expected.replace(controlCharactersRemover, ''))
        })
      })
    })
  })
})
