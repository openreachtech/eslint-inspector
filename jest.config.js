'use strict'

module.exports = {
  setupFilesAfterEnv: [
    '@openreachtech/renchan-test-tools/lib/environment/setupAfterEnv.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
}
