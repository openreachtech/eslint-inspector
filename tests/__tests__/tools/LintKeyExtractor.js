'use strict'

const path = require('path')

const {
  ConstructorSpyGenerator,
} = require('@openreachtech/renchan-test-tools')

const LintKeyExtractor = require('../../../lib/tools/LintKeyExtractor')

describe('LintKeyExtractor', () => {
  describe('constructor', () => {
    describe('to keep property', () => {
      describe('#filePath', () => {
        const cases = [
          { params: { filePath: '/root/tests/targets/standard/indent.js' } },
          { params: { filePath: '/root/tests/targets/standard/semi.js' } },
          { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax.js' } },
          { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax/noLet.js' } },
          { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax/ArrayForEach.js' } },
        ]

        test.each(cases)('filePath: $params.filePath', ({ params }) => {
          const constructorParams = {
            ...params,
            plugins: [],
          }

          const extractor = new LintKeyExtractor(constructorParams)

          expect(extractor)
            .toHaveProperty('filePath', params.filePath)
        })
      })
    })
  })
})

describe('LintKeyExtractor', () => {
  describe('.create()', () => {
    describe('to be instance of LintKeyExtractor', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/standard/indent.js',
            plugins: [],
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/semi.js',
            plugins: [],
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax.js',
            plugins: [],
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/noLet.js',
            plugins: [],
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/ArrayForEach.js',
            plugins: [],
          },
        },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params }) => {
        const extractor = LintKeyExtractor.create(params)

        expect(extractor)
          .toBeInstanceOf(LintKeyExtractor)
      })
    })

    describe('to call constructor', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/standard/indent.js',
            plugins: [],
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/semi.js',
            plugins: [],
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax.js',
            plugins: [],
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/noLet.js',
            plugins: [],
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/ArrayForEach.js',
            plugins: [],
          },
        },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params }) => {
        const DerivedClass = ConstructorSpyGenerator.create({ jest })
          .generateSpyKitClass(LintKeyExtractor)

        DerivedClass.create(params)

        expect(DerivedClass.__spy__)
          .toHaveBeenCalledWith(params)

        DerivedClass.__spy__
          .mockClear()
      })
    })
  })
})

describe('LintKeyExtractor', () => {
  describe('#getPluginName()', () => {
    describe('without plugins', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/standard/indent.js',
            plugins: [],
          },
          pathHash: path.parse('/root/tests/targets/standard/indent.js'),
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/semi.js',
            plugins: [],
          },
          pathHash: path.parse('/root/tests/targets/standard/semi.js'),
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax.js',
            plugins: [],
          },
          pathHash: path.parse('/root/tests/targets/standard/no-restricted-syntax.js'),
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/noLet.js',
            plugins: [],
          },
          pathHash: path.parse('/root/tests/targets/standard/no-restricted-syntax/noLet.js'),
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/ArrayForEach.js',
            plugins: [],
          },
          pathHash: path.parse('/root/tests/targets/standard/no-restricted-syntax/ArrayForEach.js'),
        },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params, pathHash }) => {
        const extractor = LintKeyExtractor.create(params)

        const actual = extractor.getPluginName(pathHash)

        expect(actual)
          .toBeNull()
      })
    })

    describe('with plugins', () => {
      const cases = [
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/jest/consistent-test-it.js',
            plugins: [
              'jest',
            ],
          },
          pathHash: path.parse('/Users/username/repository-name/tests/targets/jest/consistent-test-it.js'),
          expected: 'jest',
        },
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/jest/no-alias-method.js',
            plugins: [
              'jest',
            ],
          },
          pathHash: path.parse('/Users/username/repository-name/tests/targets/jest/no-alias-method.js'),
          expected: 'jest',
        },
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/jest/prefer-equality-matcher.js',
            plugins: [
              'jest',
            ],
          },
          pathHash: path.parse('/Users/username/repository-name/tests/targets/jest/prefer-equality-matcher.js'),
          expected: 'jest',
        },
        {
          params: {
            filePath: '/Users/username/repository-name/tests/targets/jsdoc/newline-after-description.js',
            plugins: [
              'jest',
              'jsdoc',
            ],
          },
          pathHash: path.parse('/Users/username/repository-name/tests/targets/jsdoc/newline-after-description.js'),
          expected: 'jsdoc',
        },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params, pathHash, expected }) => {
        const extractor = LintKeyExtractor.create(params)

        const actual = extractor.getPluginName(pathHash)

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('LintKeyExtractor', () => {
  describe('#extractRuleId()', () => {
    describe('with ruleId only', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/standard/indent.js',
          },
          expected: 'indent',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/semi.js',
          },
          expected: 'semi',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax.js',
          },
          expected: 'no-restricted-syntax',
        },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params, expected }) => {
        const extractor = LintKeyExtractor.create(params)

        expect(extractor.extractRuleId())
          .toBe(expected)
      })
    })

    describe('with ruleId "no-restricted-syntax"', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/noLet.js',
          },
          expected: 'no-restricted-syntax',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/noArrayForEach.js',
          },
          expected: 'no-restricted-syntax',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/loop-controls/noArrayForEach.js',
          },
          expected: 'no-restricted-syntax',
        },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params, expected }) => {
        const extractor = LintKeyExtractor.create(params)

        expect(extractor.extractRuleId())
          .toBe(expected)
      })
    })

    describe('with plugins', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/jest/consistent-test-it.js',
            plugins: [
              'jest',
            ],
          },
          expected: 'jest/consistent-test-it',
        },
        {
          params: {
            filePath: '/root/tests/targets/jest/no-alias-methods.js',
            plugins: [
              'jest',
            ],
          },
          expected: 'jest/no-alias-methods',
        },
        {
          params: {
            filePath: '/root/tests/targets/jest/prefer-equality-matcher.js',
            plugins: [
              'jest',
            ],
          },
          expected: 'jest/prefer-equality-matcher',
        },
        {
          params: {
            filePath: '/root/tests/targets/jsdoc/newline-after-description.js',
            plugins: [
              'jest',
              'jsdoc',
            ],
          },
          expected: 'jsdoc/newline-after-description',
        },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params, expected }) => {
        const extractor = LintKeyExtractor.create(params)

        expect(extractor.extractRuleId())
          .toBe(expected)
      })
    })

    describe('invalid file path', () => {
      const cases = [
        { params: { filePath: '<text>' } },
        { params: { filePath: '' } },
        { params: { filePath: null } },
        { params: { filePath: undefined } },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params }) => {
        const extractor = LintKeyExtractor.create(params)

        expect(extractor.extractRuleId())
          .toBeNull()
      })
    })
  })
})

describe('LintKeyExtractor', () => {
  describe('#get:messageId', () => {
    describe('with ruleId only', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/standard/indent.js',
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/semi.js',
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax.js',
          },
        },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params }) => {
        const extractor = LintKeyExtractor.create(params)

        expect(extractor.extractMessageId())
          .toBeNull()
      })
    })

    describe('with ruleId "no-restricted-syntax"', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/noLet.js',
          },
          expected: 'noLet',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/noArrayForEach.js',
          },
          expected: 'noArrayForEach',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard/no-restricted-syntax/loop-controls/noArrayForEach.js',
          },
          expected: 'noArrayForEach',
        },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params, expected }) => {
        const extractor = LintKeyExtractor.create(params)

        expect(extractor.extractMessageId())
          .toBe(expected)
      })
    })

    describe('invalid file path', () => {
      const cases = [
        { params: { filePath: '<text>' } },
        { params: { filePath: '' } },
        { params: { filePath: null } },
        { params: { filePath: undefined } },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params }) => {
        const extractor = LintKeyExtractor.create(params)

        expect(extractor.extractMessageId())
          .toBeNull()
      })
    })
  })
})
