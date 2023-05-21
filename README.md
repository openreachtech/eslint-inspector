# ESLint Inspector

* `ESLintInspector` is a JavaScript module designed to validate whether your ESLint configurations are correctly set up. This module enables automated testing to ensure that your ESLint setup is functioning as expected, using Jest as the testing framework.

## Installation

* Node.js is required. If it is not installed yet, please do so before proceeding.

* You can install `ESLintInspector` with the following command:

  ```
  npm install --save-dev @openreachtech/eslint-inspector
  ```

## Usage

1. First, place your ESLint configuration file (such as `.eslintrc.json`, `.eslintrc.js`, etc.) in the root directory of your project.
2. Create directory of lint sample codes, and put sample files.
3. Use `ESLintInspector` created with file path to the directory of sample codes.

## Structure of directories

* Structure of directories for Jest.

  ```
  /your-eslint-config-repository
  |
  ├── tests/            # Test root directory
  |   ├── __tests__/    # Test files
  |   |   └── eslint.js # Entry point to confirm ESLint config
  |   |
  |   └── samples/      # Jest snapshots if necessary
  |       ├── nested/   # May use nested directory to categorize
  |       |   └ semi.js # Confirm to work rule id: `semi`
  |       |
  |       ├── indent.js # Confirm to work rule id: `indent`
  |       └── quotes.js # Confirm to work rule id: `quotes`
  |
  ├── .eslintrc.yml     # ESLint configuration
  └── package.json      # Package information and dependencies
  ```

## Sample Code Files

* Create a code that contains lint to verify ESLint rules working. `ESLintInspector` uses the file name as the target rule ID to confirm.

* The rule id `indent` will be confirmed  by `tests/samples/indent.js`

  ```javascript
  module.exports = function doubleValue (value, ignore) {
    if (ignore) {
      return value
      } // <----------------------- ❌ has indent error

    return value + value
  }
  ```

* The rule id `quotes` will be confirmed  by `tests/samples/quotes.js`

  ```javascript
  const BUTTON_LABEL = {
    POSITIVE: 'OK',
    NEGATIVE: "cancel", // <----------------------- ❌ uses double quotes
  }

  module.exports = BUTTON_LABEL
  ```

* The rule id `semi` will be confirmed  by `tests/samples/nested/semi.js`

  ```javascript
  const MILLISECONDS_PER_ONE_DAY = 60 * 60 * 24 * 1000
  const MILLISECONDS_PER_ONE_WEEK = MILLISECONDS_PER_ONE_DAY * 7; // <--- ❌ uses semi-colon

  module.exports = {
    MILLISECONDS_PER_ONE_DAY,
    MILLISECONDS_PER_ONE_WEEK,
  }
  ```

## Test Case

* A sample test case for Jest as follows:

  ```javascript
  const {
    ESLintInspector,
  } = require('@openreachtech/eslint-inspector')

  test('should work as expected', async () => {
    const inspector = await ESLintInspector.createAsyncWithFilePaths([
      'tests/samples/*.js',
    ])

    const unexpectedLog = await inspector.getFormattedLogIfUnexpected()

    expect(unexpectedLog)
      .toBeNull()
  })
  ```

## Spec

* `ESLintInspector` decide that the specified rule is working correctly for each sample file of each rule id, when the following conditions are met.

1. Lint errors of the specified rule id is included in the lint result.
2. Any lint errors other than the specified rule id are not included in the lint result

## Note

* When ESLint is applied to the ESLlint config repository, the files contained in the tests/sample directory make fail. To avoid it, specify the following options.

  ```
  npx eslint --ignore-pattern /tests/samples/* .
  ```
