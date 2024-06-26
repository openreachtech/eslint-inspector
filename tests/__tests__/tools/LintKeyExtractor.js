'use strict'

const {
  ConstructorSpyGenerator,
} = require('@openreachtech/renchan-test-tools')

const LintKeyExtractor = require('../../../lib/tools/LintKeyExtractor')

describe('LintKeyExtractor', () => {
  describe('constructor', () => {
    describe('to keep property', () => {
      describe('#filePath', () => {
        const cases = [
          { params: { filePath: '/root/tests/targets/standard$/indent.js' } },
          { params: { filePath: '/root/tests/targets/standard$/semi.js' } },
          { params: { filePath: '/root/tests/targets/standard$/no-restricted-syntax.js' } },
          { params: { filePath: '/root/tests/targets/standard$/no-restricted-syntax/$noLet.js' } },
          { params: { filePath: '/root/tests/targets/standard$/no-restricted-syntax/$ArrayForEach.js' } },
          { params: { filePath: '/root/tests/targets/standard$/jsdoc/no-restricted-syntax/$functionDeclaration.js' } },
        ]

        test.each(cases)('filePath: $params.filePath', ({ params }) => {
          const constructorParams = {
            ...params,
            groupedRuleIds: [],
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
        { params: { filePath: '/root/tests/targets/standard$/indent.js' } },
        { params: { filePath: '/root/tests/targets/standard$/semi.js' } },
        { params: { filePath: '/root/tests/targets/standard$/no-restricted-syntax.js' } },
        { params: { filePath: '/root/tests/targets/standard$/no-restricted-syntax/$noLet.js' } },
        { params: { filePath: '/root/tests/targets/standard$/no-restricted-syntax/$ArrayForEach.js' } },
        { params: { filePath: '/root/tests/targets/standard$/jsdoc/no-restricted-syntax/$functionDeclaration.js' } },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params }) => {
        const extractor = LintKeyExtractor.create(params)

        expect(extractor)
          .toBeInstanceOf(LintKeyExtractor)
      })
    })

    describe('to call constructor', () => {
      const cases = [
        { params: { filePath: '/root/tests/targets/standard$/indent.js' } },
        { params: { filePath: '/root/tests/targets/standard$/semi.js' } },
        { params: { filePath: '/root/tests/targets/standard$/no-restricted-syntax.js' } },
        { params: { filePath: '/root/tests/targets/standard$/no-restricted-syntax/$noLet.js' } },
        { params: { filePath: '/root/tests/targets/standard$/no-restricted-syntax/$ArrayForEach.js' } },
        { params: { filePath: '/root/tests/targets/standard$/jsdoc/no-restricted-syntax/$functionDeclaration.js' } },
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
  describe('#extractRuleId()', () => {
    describe('with ruleId only', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/standard$/indent.js',
          },
          expected: 'indent',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard$/semi.js',
            plugins: [],
          },
          expected: 'semi',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard$/no-restricted-syntax.js',
            groupedRuleIds: [],
            plugins: [],
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

    describe('with ruleId as directory name', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/standard$/no-restricted-syntax/$noLet.js',
          },
          expected: 'no-restricted-syntax',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard$/no-restricted-syntax/$noArrayForEach.js',
          },
          expected: 'no-restricted-syntax',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard$/no-restricted-syntax/$loop-controls/noArrayForEach.js',
          },
          expected: 'no-restricted-syntax',
        },
      ]
        .concat([
          {
            params: {
              filePath: '/root/tests/targets/standard$/no-restricted-syntax/$noLet.js',
            },
            expected: 'no-restricted-syntax',
          },
          {
            params: {
              filePath: '/root/tests/targets/standard$/jsdoc/no-restricted-syntax/$functionDeclaration.js',
            },
            expected: 'jsdoc/no-restricted-syntax',
          },
          {
            params: {
              filePath: '/root/tests/targets/standard$/no-restricted-syntax/$loop-controls/noArrayForEach.js',
            },
            expected: 'no-restricted-syntax',
          },
          {
            params: {
              filePath: '/root/tests/targets/standard$/jsdoc/no-restricted-syntax/$functionDeclaration.js',
            },
            expected: 'jsdoc/no-restricted-syntax',
          },
        ])

      test.each(cases)('filePath: $params.filePath', ({ params, expected }) => {
        const extractor = LintKeyExtractor.create(params)

        expect(extractor.extractRuleId())
          .toBe(expected)
      })
    })

    describe('with plugin name', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets$/jest/consistent-test-it.js',
          },
          expected: 'jest/consistent-test-it',
        },
        {
          params: {
            filePath: '/root/tests/targets$/jest/no-alias-methods.js',
          },
          expected: 'jest/no-alias-methods',
        },
        {
          params: {
            filePath: '/root/tests/targets$/jest/prefer-equality-matcher.js',
          },
          expected: 'jest/prefer-equality-matcher',
        },
        {
          params: {
            filePath: '/root/tests/targets$/jsdoc/newline-after-description.js',
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

    describe('with groupedRuleIds and plugins', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/standard$/no-restricted-syntax/$noLet.js',
          },
          expected: 'no-restricted-syntax',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard$/jsdoc/no-restricted-syntax/$functionDeclaration.js',
          },
          expected: 'jsdoc/no-restricted-syntax',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard$/no-restricted-syntax/$loop-controls/noArrayForEach.js',
          },
          expected: 'no-restricted-syntax',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard$/jsdoc/no-restricted-syntax/$functionDeclaration.js',
          },
          expected: 'jsdoc/no-restricted-syntax',
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
  describe('#extractMessageId()', () => {
    describe('with ruleId only', () => {
      const cases = [
        {
          params: {
            filePath: '/root/tests/targets/standard$/indent.js',
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard$/semi.js',
          },
        },
        {
          params: {
            filePath: '/root/tests/targets/standard$/no-restricted-syntax.js',
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
            filePath: '/root/tests/targets/standard$/no-restricted-syntax/$noLet.js',
          },
          expected: 'noLet',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard$/no-restricted-syntax/$noArrayForEach.js',
          },
          expected: 'noArrayForEach',
        },
        {
          params: {
            filePath: '/root/tests/targets/standard$/no-restricted-syntax/$loop-controls/noArrayForEach.js',
          },
          expected: 'noArrayForEach',
        },
      ]
        .concat([
          {
            params: {
              filePath: '/root/tests/targets/standard$/no-restricted-syntax/$noLet.js',
            },
            expected: 'noLet',
          },
          {
            params: {
              filePath: '/root/tests/targets/standard$/jsdoc/no-restricted-syntax/$functionDeclaration.js',
            },
            expected: 'functionDeclaration',
          },
          {
            params: {
              filePath: '/root/tests/targets/standard$/no-restricted-syntax/$loop-controls/noArrayForEach.js',
            },
            expected: 'noArrayForEach',
          },
          {
            params: {
              filePath: '/root/tests/targets/standard$/plugin-name/rule-name/$messageId.js',
            },
            expected: 'messageId',
          },
          {
            params: {
              filePath: '/root/tests/targets/standard$/plugin-name/rule-name/$categorized/messageId.js',
            },
            expected: 'messageId',
          },
        ])

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
