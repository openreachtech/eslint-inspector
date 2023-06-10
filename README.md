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
2. Create directory of intent error codes, and put intent error files.
3. Use `ESLintInspector` created with file path to the directory of intent error codes.

## Structure of directories

* Structure of directories for Jest.

  ```
  /your-eslint-config-repository
  |
  ├── tests/            # Test root directory
  |   ├── __tests__/    # Test files
  |   |   └── eslint.js # Entry point to confirm ESLint config
  |   |
  |   └── intents/      # Jest snapshots if necessary
  |       ├── nested/   # May use nested directory to categorize
  |       |   └ semi.js # Confirm to work rule id: `semi`
  |       |
  |       ├── indent.js # Confirm to work rule id: `indent`
  |       └── quotes.js # Confirm to work rule id: `quotes`
  |
  ├── .eslintrc.yml     # ESLint configuration
  └── package.json      # Package information and dependencies
  ```

## Intent Error Code Files

* Create a code that contains lint to verify ESLint rules working. `ESLintInspector` uses the file name as the target rule ID to confirm.

* The rule id `indent` will be confirmed  by `tests/intents/indent.js`

  ```javascript
  module.exports = function doubleValue (value, ignore) {
    if (ignore) {
      return value
      } // <----------------------- ❌ has indent error

    return value + value
  }
  ```

* The rule id `quotes` will be confirmed  by `tests/intents/quotes.js`

  ```javascript
  const BUTTON_LABEL = {
    POSITIVE: 'OK',
    NEGATIVE: "cancel", // <----------------------- ❌ uses double quotes
  }

  module.exports = BUTTON_LABEL
  ```

* The rule id `semi` will be confirmed  by `tests/intents/nested/semi.js`

  ```javascript
  const MILLISECONDS_PER_ONE_DAY = 60 * 60 * 24 * 1000
  const MILLISECONDS_PER_ONE_WEEK = MILLISECONDS_PER_ONE_DAY * 7; // <--- ❌ uses semi-colon

  module.exports = {
    MILLISECONDS_PER_ONE_DAY,
    MILLISECONDS_PER_ONE_WEEK,
  }
  ```

## Test Case

* A test case for Jest as follows:

  ```javascript
  const {
    ESLintInspector,
  } = require('@openreachtech/eslint-inspector')

  test('should work as expected', async () => {
    const inspector = await ESLintInspector.createAsyncWithFilePaths({
      filePaths: [
        'tests/intents/',
      ],
      configPath: '.eslintrc.yml',
    })

    const unexpectedLog = await inspector.getFormattedLogIfUnexpected()

    expect(unexpectedLog)
      .toBeNull()
  })
  ```

## Strict Check with Lint Error Message

* There are some cases where we would like to have separate files for checking the behavior of some rules for each message. Currently, for the `no-restricted-syntax` rule, we can create a intent error file for each selector.

* For strict inspections, create a intent error file with the folder name as the rule name and the message ID as the file name inside it.

* `.eslintrc.yml`

  ```yml
  ...

  rules:
    ...

    no-restricted-syntax:
      - error
      - selector: 'VariableDeclaration[kind="let"]'
        message: 'Never use `let`.'
      - selector: 'SwitchStatement'
        message: 'Never use `switch` statement.'

    ...
  ```

* Structure of directories for Jest.

  ```
  /your-eslint-config-repository
  |
  └── tests/
      └── intents/
          └── no-restricted-syntax/ # Confirm to work rule id: `no-restricted-syntax`
              ├── noLet.js          # message id: noLet "Never use `let`."
              └── noSwitch.js       # message id: noSwitch "Never use `switch` statement."
  ```

* Define message id and lint error message as an object hash and pass it as the argument to `ESLintInspector.createAsyncWithFilePaths()`.

  ```javascript
  // Define object hash by message ID and lint error message.
  const messageHash = {
    noLet: 'Never use `let`.',
    noSwitch: 'Never use `switch` statement.',
  }

  const {
    ESLintInspector,
  } = require('@openreachtech/eslint-inspector')

  test('should work as expected', async () => {
    const inspector = await ESLintInspector.createAsyncWithFilePaths({
      filePaths: [
        'tests/intents/',
      ],
      configPath: '.eslintrc.yml',
      messageHash, // <----------------- ✅
    })

    const unexpectedLog = await inspector.getFormattedLogIfUnexpected()

    expect(unexpectedLog)
      .toBeNull()
  })
  ```

## Spec

* `ESLintInspector` decide that the specified rule is working correctly for each intent error file of each rule id, when the following conditions are met.

1. The lint result includes one or more lint error of the specified rule id.
2. Any lint errors other than the specified rule id are not included in the lint result.

## Note

* When ESLint is applied to the ESLlint config repository, the files contained in the tests/intents directory make fail. To avoid it, specify the following options.

  ```
  npx eslint --ignore-pattern /tests/intents/* .
  ```

## License

* This project is released under the MIT License.<br>
See [here](./LICENSE)

## Contribution

* We welcome bug reports, feature requests, and code contributions. Please feel free to contact us through GitHub Issues or Pull Requests. Your contributions are highly appreciated!

## Authors

* Open Reach Tech inc.

* We strive to meet user expectations and welcome any kind of feedback.
