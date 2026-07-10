import module from 'module'
const require = module.createRequire(import.meta.url)

export const ESLintInspector = require('./lib/ESLintInspector')
export const FileLintAnalyzer = require('./lib/FileLintAnalyzer')
export const LintAnalyzer = require('./lib/LintAnalyzer')

export default {
  ESLintInspector,
  FileLintAnalyzer,
  LintAnalyzer,
}
