import module from 'module'
const require = module.createRequire(import.meta.url)

const ESLintInspector = require('./lib/ESLintInspector')
const FileLintAnalyzer = require('./lib/FileLintAnalyzer')
const LintAnalyzer = require('./lib/LintAnalyzer')

export default {
  ESLintInspector,
  FileLintAnalyzer,
  LintAnalyzer,
}
