'use strict'

const {
  ESLint,
} = require('eslint')

const {
  ConstructorSpyGenerator,
} = require('@openreachtech/renchan-test-tools')

const ESLintInspector = require('../../lib/ESLintInspector')
const FileLintAnalyzer = require('../../lib/FileLintAnalyzer')
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
  describe('.createAsyncWithFiles()', () => {
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
              'tests/samples/standard/indent.js',
              'tests/samples/standard/semi.js',
            ],
          },
        },
      ]

      test.each(cases)('[0] filePaths: $params.filePaths.0', async ({ params }) => {
        const inspector = await ESLintInspector.createAsyncWithFiles(params.filePaths)

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
          mocks: {
            analyzers: [],
          },
        },
        {
          params: {
            filePaths: [
              'tests/samples/standard/indent.js',
              'tests/samples/standard/semi.js',
            ],
          },
          mocks: {
            analyzers: [
              expect.any(FileLintAnalyzer),
              expect.any(FileLintAnalyzer),
            ],
          },
        },
      ]

      test.each(cases)('[0] filePaths: $params.filePaths.0', async ({ params, mocks }) => {
        const mockClient = new ESLint()

        const lintFilesSpy = jest.spyOn(mockClient, 'lintFiles')
        const createESLintClientSpy = jest.spyOn(ESLintInspector, 'createESLintClient')
          .mockReturnValue(mockClient)
        const createSpy = jest.spyOn(ESLintInspector, 'create')

        await ESLintInspector.createAsyncWithFiles(params.filePaths)

        expect(lintFilesSpy)
          .toHaveBeenCalledWith(params.filePaths)
        expect(createSpy)
          .toHaveBeenCalledWith({
            analyzers: mocks.analyzers,
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
