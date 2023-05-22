'use strict'

const mainExports = require('../../index')

const ESLintInspector = require('../../lib/ESLintInspector')
const FileLintAnalyzer = require('../../lib/FileLintAnalyzer')
const LintAnalyzer = require('../../lib/LintAnalyzer')

describe('Classes exported correctly', () => {
  const table = [
    { ExportedClass: ESLintInspector },
    { ExportedClass: FileLintAnalyzer },
    { ExportedClass: LintAnalyzer },
  ]

  test.each(table)('$#. $ExportedClass.name', ({ ExportedClass }) => {
    expect(mainExports)
      .toHaveProperty(ExportedClass.name, ExportedClass)
  })
})
