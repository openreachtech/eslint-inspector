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
          { params: { filePath: '/root/tests/targets/standard/indent.js' } },
          { params: { filePath: '/root/tests/targets/standard/semi.js' } },
          { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax.js' } },
          { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax/noLet.js' } },
          { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax/ArrayForEach.js' } },
        ]

        test.each(cases)('filePath: $params.filePath', ({ params }) => {
          const extractor = new LintKeyExtractor(params)

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
        { params: { filePath: '/root/tests/targets/standard/indent.js' } },
        { params: { filePath: '/root/tests/targets/standard/semi.js' } },
        { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax.js' } },
        { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax/noLet.js' } },
        { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax/ArrayForEach.js' } },
      ]

      test.each(cases)('filePath: $params.filePath', ({ params }) => {
        const extractor = LintKeyExtractor.create(params)

        expect(extractor)
          .toBeInstanceOf(LintKeyExtractor)
      })
    })

    describe('to call constructor', () => {
      const cases = [
        { params: { filePath: '/root/tests/targets/standard/indent.js' } },
        { params: { filePath: '/root/tests/targets/standard/semi.js' } },
        { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax.js' } },
        { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax/noLet.js' } },
        { params: { filePath: '/root/tests/targets/standard/no-restricted-syntax/ArrayForEach.js' } },
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
