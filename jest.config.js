'use strict'

module.exports = {
  setupFilesAfterEnv: [
    '@openreachtech/renchan-test-tools/lib/environment/setupAfterEnv.js',
    '<rootDir>/jest/setupAfterEnv.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
}
