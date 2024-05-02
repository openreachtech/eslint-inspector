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

// same as /\x1b\[.+?m/g, it is to avoid no-control-regex rule
const controlCharactersRemover = new RegExp(`${'\x1b'}\\[.+?m`, 'gu')

const CONTROL_CHARACTERS = require('../constants/control-characters')

const messageHash = {
  'no-restricted-syntax': {
    noLet: 'Never use let',
  },
}

describe('ESLintInspector', () => {
  describe('constructor', () => {
    describe('to keep property', () => {
      describe('#analyzers', () => {
        /** @type {Array<object>} */
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
      /** @type {Array<object>} */
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
      /** @type {Array<object>} */
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
              'tests/resources/expected$/standard$/indent.js',
              'tests/resources/expected$/standard$/semi.js',
            ],
          },
        },
      ]

      test.each(cases)('[0] filePaths: $params.filePaths.0', async ({ params }) => {
        const inspector = await ESLintInspector.createAsyncWithFilePaths(params)

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
              'tests/resources/expected$/standard$/indent.js',
              'tests/resources/expected$/standard$/semi.js',
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

        await ESLintInspector.createAsyncWithFilePaths(params)

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
                  usedDeprecatedRules: expect.any(Array), // 👀
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
                  usedDeprecatedRules: expect.any(Array), // 👀
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                    filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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

      const {
        COLOR_DEFAULT,
        COLOR_RED,
        COLOR_WHITE,
        COLOR_GRAY,
        UNDERLINE_OPEN,
        UNDERLINE_CLOSE,
      } = CONTROL_CHARACTERS

      const cases = [
        {
          params: {
            analyzers: [
              LintAnalyzer.create({
                ruleId: 'indent',
                lint: {
                  filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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
${RESET}${UNDERLINE_OPEN}/Users/username/repository-name/tests/targets/standard$/indent.js${UNDERLINE_CLOSE}${RESET}
${RESET}   ${COLOR_GRAY}9:1${COLOR_WHITE}   ${COLOR_RED}error${COLOR_DEFAULT}  Expected indentation of 4 spaces but found 6  ${COLOR_GRAY}indent${COLOR_WHITE}${RESET}
${RESET}  ${COLOR_GRAY}11:1${COLOR_WHITE}   ${COLOR_RED}error${COLOR_DEFAULT}  Expected indentation of 2 spaces but found 4  ${COLOR_GRAY}indent${COLOR_WHITE}${RESET}
${RESET}   ${COLOR_GRAY}3:18${COLOR_WHITE}  ${COLOR_RED}error${COLOR_DEFAULT}  Extra semicolon                               ${COLOR_GRAY}semi${COLOR_WHITE}${RESET}
${RESET}${RESET}
${RESET}${UNDERLINE_OPEN}/Users/username/repository-name/tests/targets/standard$/semi.js${UNDERLINE_CLOSE}${RESET}
${RESET}   ${COLOR_GRAY}9:1${COLOR_WHITE}   ${COLOR_RED}error${COLOR_DEFAULT}  Expected indentation of 4 spaces but found 6  ${COLOR_GRAY}indent${COLOR_WHITE}${RESET}
${RESET}  ${COLOR_GRAY}11:1${COLOR_WHITE}   ${COLOR_RED}error${COLOR_DEFAULT}  Expected indentation of 2 spaces but found 4  ${COLOR_GRAY}indent${COLOR_WHITE}${RESET}
${RESET}   ${COLOR_GRAY}3:18${COLOR_WHITE}  ${COLOR_RED}error${COLOR_DEFAULT}  Extra semicolon                               ${COLOR_GRAY}semi${COLOR_WHITE}${RESET}
${RESET}${RESET}
${RESET}${COLOR_RED}${BOLD}✖ 3 problems (3 errors, 0 warnings)${COLOR_WHITE}${COLOR_DEFAULT}${RESET}
${RESET}${COLOR_RED}${BOLD}${COLOR_WHITE}${COLOR_DEFAULT}${COLOR_RED}${BOLD}  3 errors and 0 warnings potentially fixable with the \`--fix\` option.${COLOR_WHITE}${COLOR_DEFAULT}${RESET}
${RESET}${COLOR_RED}${BOLD}${COLOR_WHITE}${COLOR_DEFAULT}${RESET}`,
        },
      ]

      test.each(cases)('[0] rule id: $params.analyzers.0.ruleId', async ({ params, expected }) => {
        const inspector = ESLintInspector.create(params)

        const log = await inspector.getUnexpectedLintLog()

        expect(log.replace(controlCharactersRemover, ''))
          .toBe(expected.replace(controlCharactersRemover, ''))
      })
    })
  })
})

describe('ESLintInspector', () => {
  describe('#getUnexpectedLog()', () => {
    describe('to be null', () => {
      const cases = [
        {
          params: {
            analyzers: [
              LintAnalyzer.create({
                ruleId: 'indent',
                lint: {
                  filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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

        const log = await inspector.getUnexpectedLog()

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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/indent.js',
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
                  filePath: '/Users/username/repository-name/tests/targets/standard$/semi.js',
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

        const log = await inspector.getUnexpectedLog()

        expect(log)
          .toEqual(
            expect.any(String)
          )
      })
    })
  })
})

describe('ESLintInspector', () => {
  describe('#getUnexpectedLog()', () => {
    describe('with file paths', () => {
      const basePath = path.resolve('./tests/')

      describe('to be null', () => {
        const cases = [
          {
            params: {
              filePaths: [
                'tests/resources/expected$/**',
              ],
              messageHash: {
                'no-restricted-syntax': {
                  noLet: 'Never use let',
                },
              },
            },
          },
          {
            params: {
              filePaths: [
                'tests/resources/expected$/standard$/no-restricted-syntax/**',
              ],
              messageHash: {
                'no-restricted-syntax': {
                  noLet: 'Never use let',
                },
              },
            },
          },
        ]

        test.each(cases)('file paths: $params.filePaths', async ({ params }) => {
          const inspector = await ESLintInspector.createAsyncWithFilePaths(params)

          const log = await inspector.getUnexpectedLog()

          expect(log)
            .toBeNull()
        })
      })

      describe('to be log', () => {
        const cases = [
          {
            params: {
              filePaths: [
                'tests/resources/unexpected/**',
              ],
              messageHash: {
                'no-restricted-syntax': {
                  noLet: 'Never use let',
                },
              },
            },
            expected: [
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'resources/unexpected/standard$/indent.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m   \x1B[2m7:1\x1B[22m   \x1B[31merror\x1B[39m  Expected indentation of 4 spaces but found 6  \x1B[2mindent\x1B[22m\x1B[0m',
              '\x1B[0m   \x1B[2m8:1\x1B[22m   \x1B[31merror\x1B[39m  Expected indentation of 2 spaces but found 4  \x1B[2mindent\x1B[22m\x1B[0m',
              '\x1B[0m  \x1B[2m10:23\x1B[22m  \x1B[31merror\x1B[39m  Extra semicolon                               \x1B[2msemi\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'resources/unexpected/standard$/no-restricted-syntax/$noLet.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m0:0\x1B[22m  \x1B[31merror\x1B[39m  🔎 No lints that should be here\x1B[0m',
              '\x1B[0m              Never use let  \x1B[2mno-restricted-syntax\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'resources/unexpected/standard$/semi.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m3:1\x1B[22m   \x1B[31merror\x1B[39m  Unexpected console statement  \x1B[2mno-console\x1B[22m\x1B[0m',
              '\x1B[0m  \x1B[2m5:18\x1B[22m  \x1B[31merror\x1B[39m  Extra semicolon               \x1B[2msemi\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m✖ 6 problems (6 errors, 0 warnings)\x1B[22m\x1B[39m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m\x1B[22m\x1B[39m\x1B[31m\x1B[1m  4 errors and 0 warnings potentially fixable with the `--fix` option.\x1B[22m\x1B[39m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m\x1B[22m\x1B[39m\x1B[0m',
            ]
              .join('\n'),
          },
          {
            params: {
              filePaths: [
                'tests/resources/unexpected/standard$/no-restricted-syntax/**',
              ],
              messageHash: {
                'no-restricted-syntax': {
                  noLet: 'Never use let',
                },
              },
            },
            expected: [
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'resources/unexpected/standard$/no-restricted-syntax/$noLet.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m0:0\x1B[22m  \x1B[31merror\x1B[39m  🔎 No lints that should be here\x1B[0m',
              '\x1B[0m              Never use let  \x1B[2mno-restricted-syntax\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m✖ 1 problem (1 error, 0 warnings)\x1B[22m\x1B[39m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m\x1B[22m\x1B[39m\x1B[0m',
            ]
              .join('\n'),
          },
        ]

        test.each(cases)('file paths: $params.filePaths', async ({ params, expected }) => {
          const inspector = await ESLintInspector.createAsyncWithFilePaths(params)

          const log = await inspector.getUnexpectedLog()

          expect(log.replace(controlCharactersRemover, ''))
            .toBe(expected.replace(controlCharactersRemover, ''))
        })
      })

      describe('no lints', () => {
        const cases = [
          {
            params: {
              filePaths: [
                'tests/resources/no-lints/all$/**',
              ],
              messageHash,
            },
            expected: [
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'resources/no-lints/all$/indent.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m0:0\x1B[22m  \x1B[31merror\x1B[39m  🔎 No lints that should be here  \x1B[2mindent\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'resources/no-lints/all$/no-restricted-syntax/$noLet.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m0:0\x1B[22m  \x1B[31merror\x1B[39m  🔎 No lints that should be here\x1B[0m',
              '\x1B[0m              Never use let  \x1B[2mno-restricted-syntax\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'resources/no-lints/all$/semi.js')}\x1B[24m\x1B[0m`,
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
                'tests/resources/no-lints/with-unexpected$/**',
              ],
              messageHash,
            },
            expected: [
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'resources/no-lints/with-unexpected$/indent.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m   \x1B[2m7:1\x1B[22m   \x1B[31merror\x1B[39m  Expected indentation of 4 spaces but found 6  \x1B[2mindent\x1B[22m\x1B[0m',
              '\x1B[0m   \x1B[2m8:1\x1B[22m   \x1B[31merror\x1B[39m  Expected indentation of 2 spaces but found 4  \x1B[2mindent\x1B[22m\x1B[0m',
              '\x1B[0m  \x1B[2m10:23\x1B[22m  \x1B[31merror\x1B[39m  Extra semicolon                               \x1B[2msemi\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'resources/no-lints/with-unexpected$/no-restricted-syntax/$noLet.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m0:0\x1B[22m  \x1B[31merror\x1B[39m  🔎 No lints that should be here\x1B[0m',
              '\x1B[0m              Never use let  \x1B[2mno-restricted-syntax\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              `\x1B[0m\x1B[4m${path.join(basePath, 'resources/no-lints/with-unexpected$/semi.js')}\x1B[24m\x1B[0m`,
              '\x1B[0m  \x1B[2m3:1\x1B[22m   \x1B[31merror\x1B[39m  Unexpected console statement  \x1B[2mno-console\x1B[22m\x1B[0m',
              '\x1B[0m  \x1B[2m5:18\x1B[22m  \x1B[31merror\x1B[39m  Extra semicolon               \x1B[2msemi\x1B[22m\x1B[0m',
              '\x1B[0m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m✖ 6 problems (6 errors, 0 warnings)\x1B[22m\x1B[39m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m\x1B[22m\x1B[39m\x1B[31m\x1B[1m  4 errors and 0 warnings potentially fixable with the `--fix` option.\x1B[22m\x1B[39m\x1B[0m',
              '\x1B[0m\x1B[31m\x1B[1m\x1B[22m\x1B[39m\x1B[0m',
            ]
              .join('\n'),
          },
        ]

        test.each(cases)('file paths: $params.filePaths', async ({ params, expected }) => {
          const inspector = await ESLintInspector.createAsyncWithFilePaths(params)

          const log = await inspector.getUnexpectedLog()

          expect(log.replace(controlCharactersRemover, ''))
            .toBe(expected.replace(controlCharactersRemover, ''))
        })
      })
    })
  })
})
