# ESLint Inspector

* ESLintInspector is a JavaScript module designed to validate your ESLint configurations. This module enables automated testing to ensure that your ESLint setup is working as expected, using Jest as the testing framework.

## Installation

* Node.js is required. If it is not already installed, please do so before proceeding.

  | tools | version |
  | :-- | :-- |
  | Node.js | ^20.12.2 |
  | npm | ^10.5.0 |

* A testing tool such as Jest is required. The following is an example of how to install Jest. If you prefer to use a different testing tool, please refer to its specific installation guide.

  ```
  npm install --save-dev jest
  ```

* Create a `.npmrc` file in the root directory of your project and add any necessary configurations. This might be required for installing certain npm packages.

* Please add the following line to your `.npmrc` file.

  ```
  @openreachtech:registry=https://npm.pkg.github.com
  ```

* You can install `ESLintInspector` with the following command:

  ```
  npm install --save-dev @openreachtech/eslint-inspector
  ```

## Usage

1. First, place your ESLint configuration file `eslint.config.js` in the root directory of your project.
2. Create a directory of intent error codes, and put intent error files in it.
3. A directory is named with `$`-suffix like `xxx$/`.
4. An intent error file is named with the ESLint rule name.

* Example: a directory of an intentional linted files

  ```
  linted$/
  ├── nested$/  # May use nested directory to categorize
  |   └ semi.js # Confirm to work rule id: `semi`
  |
  ├── indent.js # Confirm to work rule id: `indent`
  └── quotes.js # Confirm to work rule id: `quotes`
  ```

## Structure of Directories

* Here is the structure of directories for Jest.

  ```
  /your-eslint-config-repository
  |
  ├── tests/            # Test root directory
  |   ├── __tests__/    # Test files
  |   |   └── eslint.js # Entry point to confirm ESLint config
  |   |
  |   └── linted$/      # Intentional linted files root
  |       ├── nested$/  # May use nested directory to categorize
  |       |   └ semi.js # Confirm to work rule id: `semi`
  |       |
  |       ├── indent.js # Confirm to work rule id: `indent`
  |       └── quotes.js # Confirm to work rule id: `quotes`
  |
  ├── eslint.config.js  # ESLint configuration
  └── package.json      # Package information and dependencies
  ```

* If you want to confirm plugin rules, rule name includes `/`, thus we can not create lint error file with rule id as is. In such case, use the plugin name as a folder, and use the part after `/` as the file name.

  ```
  /your-eslint-config-repository
  |
  └── tests/
      └── linted$/
          ├── jsdoc/                 # JSDoc rules
          |   └ require-jsdoc.js     # Confirm to work rule id: `jsdoc/require-jsdoc`
          |
          └── jest/                  # Jest rules
              └ no-disabled-tests.js # Confirm to work rule id: `jest/no-disabled-tests`
  ```

## Intent Error Code Files

* Create a code that contains lint to verify that the ESLint rules are working. `ESLintInspector` uses the file name as the target rule id to confirm.

* The rule id `indent` will be confirmed  by `tests/linted$/indent.js`

  ```javascript
  module.exports = function doubleValue (value, ignore) {
    if (ignore) {
      return value
      } // <----------------------- ❌ this line should be warned `indent`

    return value + value
  }
  ```

* The rule id `quotes` will be confirmed  by `tests/linted$/quotes.js`

  ```javascript
  const BUTTON_LABEL = {
    POSITIVE: 'OK',
    NEGATIVE: "CANCEL", // <----------------------- ❌ uses double quotes
  }

  module.exports = BUTTON_LABEL
  ```

* The rule id `semi` will be confirmed  by `tests/linted$/nested$/semi.js`

  ```javascript
  const MILLISECONDS_PER_ONE_DAY = 60 * 60 * 24 * 1000
  const MILLISECONDS_PER_ONE_WEEK = MILLISECONDS_PER_ONE_DAY * 7; // <--- ❌ uses semi-colon

  module.exports = {
    MILLISECONDS_PER_ONE_DAY,
    MILLISECONDS_PER_ONE_WEEK,
  }
  ```

## Test Case

* Here is an example of a Jest test case:

  ```javascript
  const {
    ESLintInspector,
  } = require('@openreachtech/eslint-inspector')

  test('should work as expected', async () => {
    const inspector = await ESLintInspector.createAsyncWithFilePaths({
      filePaths: [
        'tests/linted$/',
      ],
    })

    const unexpectedLog = await inspector.getUnexpectedLog()

    expect(unexpectedLog)
      .toBeNull()
  })
  ```

## Strict Check with Lint Error Message

* In some cases, you would like to have separate files for checking the behavior of some rules for each message. You guys can create a intent error file for each rule.

* For strict inspections, create a intent error file with the folder name as the rule name and the message id as the file name inside it.

* `eslint.config.js`

  ```js
  'use strict'

  module.exports = [
    ...

    {
      rules: {
        'no-restricted-syntax': [
          'error',
          {
            selector: 'SwitchStatement',
            message: 'Never use switch',
          },
          {
            selector: 'VariableDeclaration[kind=let]',
            message: 'Never use let',
          },
        ],
      },
    },
  ]
  ```

* Structure of directories for Jest.

  ```
  /your-eslint-config-repository
  |
  └── tests/
      └── linted$/
          └── no-restricted-syntax/ # Confirm to work rule id: `no-restricted-syntax`
              ├── $noLet.js         # message id: noLet "Never use let"
              └── $noSwitch.js      # message id: noSwitch "Never use switch"
  ```

* Define message id and lint error message as an object hash and pass it as the argument to `ESLintInspector.createAsyncWithFilePaths()`.

  ```javascript
  // Define object hash by message id and lint error message.
  const messageHash = {
    'no-restricted-syntax': {
      noLet: 'Never use let',
      noSwitch: 'Never use switch',
    },
  }

  const {
    ESLintInspector,
  } = require('@openreachtech/eslint-inspector')

  test('should work as expected', async () => {
    const inspector = await ESLintInspector.createAsyncWithFilePaths({
      filePaths: [
        'tests/linted$/',
      ],
      messageHash, // <----------------- ✅
    })

    const unexpectedLog = await inspector.getUnexpectedLog()

    expect(unexpectedLog)
      .toBeNull()
  })
  ```

## Spec

* `ESLintInspector` decide that the specified rule is working correctly for each intent error file of each rule id, when the following conditions are met.

1. The lint result includes one or more lint error of the specified rule id.
2. Any lint errors other than the specified rule id are not included in the lint result.

## Note

* When ESLint is applied to the ESLlint config repository, the files contained in the `tests/linted$/` directory may fail. To avoid it, specify the following options.

  ```
  npx eslint . --ignore-pattern "/tests/linted$/*"
  ```

## License

* This project is released under the MIT License.<br>
See [here](./LICENSE)

## Contribution

* We welcome bug reports, feature requests, and code contributions. Please feel free to contact us through GitHub Issues or Pull Requests. We strive to meet user expectations and your contributions are highly appreciated!

## Authors

* [Open Reach Tech inc.](https://openreach.tech)
