'use strict'

const ESLintInspector = require('../../lib/ESLintInspector')
const FileLintAnalyzer = require('../../lib/FileLintAnalyzer')
const LintAnalyzer = require('../../lib/LintAnalyzer')

describe('dual entry points', () => {
  describe('to have property', () => {
    const cases = [
      {
        args: {
          className: 'ESLintInspector',
          declaration: ESLintInspector,
        },
      },
      {
        args: {
          className: 'FileLintAnalyzer',
          declaration: FileLintAnalyzer,
        },
      },
      {
        args: {
          className: 'LintAnalyzer',
          declaration: LintAnalyzer,
        },
      },
    ]

    test.each(cases)('property: $args.className', async ({ args }) => {
      const { default: dualEntryPoints } = await import('../../index.mjs')

      expect(dualEntryPoints)
        .toHaveProperty(
          args.className,
          args.declaration
        )
    })
  })
})
