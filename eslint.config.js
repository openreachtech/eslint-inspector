'use strict'

const jestPlugin = require('eslint-plugin-jest')
const jsdocPlugin = require('eslint-plugin-jsdoc')
const openreachtechPlugin = require('eslint-plugin-openreachtech')

/**
 * ESLint Config
 *
 * @type {Array<import('eslint').Linter.FlatConfig>}
 */
module.exports = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    ignores: [
      '**/node_modules/**',
    ],
  },

  {
    rules: {
      indent: [
        'error',
        2,
        {
          ignoredNodes: [],
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: {
            parameters: 1,
            body: 1,
          },
          FunctionExpression: {
            parameters: 1,
            body: 1,
          },
          StaticBlock: {
            body: 1,
          },
          CallExpression: {
            arguments: 1,
          },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          offsetTernaryExpressions: false,
          ignoreComments: false,
        },
      ],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      semi: [
        'error',
        'never',
        {
          beforeStatementContinuationChars: 'never',
        },
      ],
      'accessor-pairs': [
        'error',
        {
          setWithoutGet: true,
          getWithoutSet: false,
          enforceForClassMembers: true,
        },
      ],
      'array-bracket-newline': [
        'error',
        'consistent',
      ],
      'array-bracket-spacing': [
        'error',
        'never',
        {
          arraysInArrays: false,
          objectsInArrays: false,
          singleValue: false,
        },
      ],
      'array-callback-return': [
        'error',
        {
          allowImplicit: false,
          checkForEach: true,
        },
      ],
      'array-element-newline': [
        'error',
        'consistent',
        {
          multiline: true,
          minItems: null,
        },
      ],
      'arrow-body-style': [
        'error',
        'as-needed',
        {
          requireReturnForObjectLiteral: false,
        },
      ],
      'arrow-parens': [
        'error',
        'as-needed',
        {
          requireForBlockBody: false,
        },
      ],
      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      'block-scoped-var': [
        'error',
      ],
      'block-spacing': [
        'error',
        'always',
      ],
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],
      camelcase: [
        'error',
        {
          properties: 'always',
          ignoreDestructuring: false,
          ignoreImports: false,
          ignoreGlobals: false,
          allow: [],
        },
      ],
      'capitalized-comments': [
        'off',
        'always',
        {
          ignoreInlineComments: false,
          ignoreConsecutiveComments: false,
          ignorePattern: '^$',
        },
      ],
      'class-methods-use-this': [
        'off',
        {
          enforceForClassFields: true,
          exceptMethods: [],
        },
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      'comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'comma-style': [
        'error',
        'last',
      ],
      complexity: [
        'error',
        {
          max: 8,
        },
      ],
      'computed-property-spacing': [
        'error',
        'never',
        {
          enforceForClassMembers: true,
        },
      ],
      'consistent-return': [
        'error',
        {
          treatUndefinedAsUnspecified: true,
        },
      ],
      'consistent-this': [
        'error',
        'that',
      ],
      'constructor-super': [
        'error',
      ],
      curly: [
        'error',
        'all',
      ],
      'default-case': [
        'error',
      ],
      'default-case-last': [
        'error',
      ],
      'default-param-last': [
        'error',
      ],
      'dot-location': [
        'error',
        'property',
      ],
      'dot-notation': [
        'off',
        {
          allowKeywords: true,
          allowPattern: '^$',
        },
      ],
      'eol-last': [
        'error',
        'always',
      ],
      eqeqeq: [
        'error',
        'always',
      ],
      'for-direction': [
        'off',
      ],
      'func-call-spacing': [
        'error',
        'never',
      ],
      'func-name-matching': [
        'error',
        'always',
      ],
      'func-names': [
        'error',
        'as-needed',
      ],
      'func-style': [
        'off',
        'expression',
        {
          allowArrowFunctions: false,
        },
      ],
      'function-call-argument-newline': [
        'error',
        'consistent',
      ],
      'function-paren-newline': [
        'off',
        'consistent',
      ],
      'generator-star-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      'getter-return': [
        'error',
        {
          allowImplicit: false,
        },
      ],
      'grouped-accessor-pairs': [
        'error',
        'getBeforeSet',
      ],
      'guard-for-in': [
        'off',
      ],
      'id-denylist': [
        'error',
        'item',
        'list',
      ],
      'id-length': [
        'error',
        {
          min: 2,
          properties: 'always',
          exceptions: [
            '_',
            '$',
          ],
          exceptionPatterns: [],
        },
      ],
      'id-match': [
        'error',
        '^[\\$\\w]+$',
        {
          properties: true,
          classFields: true,
          onlyDeclarations: false,
          ignoreDestructuring: false,
        },
      ],
      'implicit-arrow-linebreak': [
        'off',
        'beside',
      ],
      'init-declarations': [
        'error',
        'always',
      ],
      'jsx-quotes': [
        'error',
        'prefer-double',
      ],
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
          mode: 'strict',
        },
      ],
      'keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      'line-comment-position': [
        'off',
        {
          position: 'above',
          applyDefaultIgnorePatterns: true,
          ignorePattern: '^$',
        },
      ],
      'linebreak-style': [
        'error',
        'unix',
      ],
      'lines-around-comment': [
        'error',
        {
          beforeBlockComment: true,
          afterBlockComment: false,
          beforeLineComment: false,
          afterLineComment: false,
          allowArrayStart: true,
          allowArrayEnd: false,
          allowBlockStart: true,
          allowBlockEnd: false,
          allowClassStart: true,
          allowClassEnd: false,
          allowObjectStart: true,
          allowObjectEnd: false,
          ignorePattern: '',
          applyDefaultIgnorePatterns: true,
        },
      ],
      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: false,
        },
      ],
      'logical-assignment-operators': [
        'error',
        'always',
        {
          enforceForIfStatements: false,
        },
      ],
      'max-classes-per-file': [
        'error',
        {
          max: 1,
          ignoreExpressions: true,
        },
      ],
      'max-depth': [
        'error',
        4,
      ],
      'max-len': [
        'off',
        {
          code: 80,
          tabWidth: 4,
        },
      ],
      'max-lines': [
        'off',
        {
          max: 300,
          skipBlankLines: false,
          skipComments: false,
        },
      ],
      'max-lines-per-function': [
        'off',
        {
          max: 50,
          skipBlankLines: false,
          skipComments: false,
          IIFEs: false,
        },
      ],
      'max-nested-callbacks': [
        'error',
        10,
      ],
      'max-params': [
        'error',
        4,
      ],
      'max-statements': [
        'off',
        10,
      ],
      'max-statements-per-line': [
        'error',
        {
          max: 1,
        },
      ],
      'multiline-comment-style': [
        'off',
        'starred-block',
      ],
      'multiline-ternary': [
        'error',
        'always',
      ],
      'new-cap': [
        'error',
        {
          newIsCap: true,
          capIsNew: true,
          newIsCapExceptions: [],
          capIsNewExceptions: [
            'DATE',
            'STRING',
            'TINYINT',
          ],
          properties: true,
        },
      ],
      'new-parens': [
        'error',
        'always',
      ],
      'newline-per-chained-call': [
        'error',
        {
          ignoreChainWithDepth: 1,
        },
      ],
      'no-alert': [
        'error',
      ],
      'no-array-constructor': [
        'error',
      ],
      'no-async-promise-executor': [
        'error',
      ],
      'no-await-in-loop': [
        'error',
      ],
      'no-bitwise': [
        'off',
        {
          allow: [],
          int32Hint: false,
        },
      ],
      'no-caller': [
        'error',
      ],
      'no-case-declarations': [
        'error',
      ],
      'no-class-assign': [
        'error',
      ],
      'no-compare-neg-zero': [
        'error',
      ],
      'no-cond-assign': [
        'error',
        'except-parens',
      ],
      'no-confusing-arrow': [
        'error',
        {
          allowParens: true,
          onlyOneSimpleParam: false,
        },
      ],
      'no-console': [
        'error',
      ],
      'no-const-assign': [
        'error',
      ],
      'no-constant-binary-expression': [
        'error',
      ],
      'no-constant-condition': [
        'error',
        {
          checkLoops: true,
        },
      ],
      'no-constructor-return': [
        'error',
      ],
      'no-continue': [
        'off',
      ],
      'no-control-regex': [
        'error',
      ],
      'no-debugger': [
        'error',
      ],
      'no-delete-var': [
        'error',
      ],
      'no-div-regex': [
        'error',
      ],
      'no-dupe-args': [
        'error',
      ],
      'no-dupe-class-members': [
        'error',
      ],
      'no-dupe-else-if': [
        'error',
      ],
      'no-dupe-keys': [
        'error',
      ],
      'no-duplicate-case': [
        'error',
      ],
      'no-duplicate-imports': [
        'error',
        {
          includeExports: false,
        },
      ],
      'no-else-return': [
        'error',
        {
          allowElseIf: true,
        },
      ],
      'no-empty': [
        'error',
        {
          allowEmptyCatch: false,
        },
      ],
      'no-empty-character-class': [
        'error',
      ],
      'no-empty-function': [
        'error',
        {
          allow: [
            'arrowFunctions',
          ],
        },
      ],
      'no-empty-pattern': [
        'error',
      ],
      'no-eq-null': [
        'error',
      ],
      'no-eval': [
        'error',
      ],
      'no-ex-assign': [
        'error',
      ],
      'no-extend-native': [
        'error',
      ],
      'no-extra-bind': [
        'error',
      ],
      'no-extra-boolean-cast': [
        'error',
        {
          enforceForLogicalOperands: true,
        },
      ],
      'no-extra-label': [
        'error',
      ],
      'no-extra-parens': [
        'off',
        'all',
        {
          conditionalAssign: false,
          returnAssign: false,
          nestedBinaryExpressions: false,
          ignoreJSX: 'none',
          enforceForArrowConditionals: false,
          enforceForSequenceExpressions: false,
          enforceForNewInMemberExpressions: false,
          enforceForFunctionPrototypeMethods: false,
        },
      ],
      'no-extra-semi': [
        'error',
      ],
      'no-fallthrough': [
        'error',
        {
          allowEmptyCase: true,
        },
      ],
      'no-floating-decimal': [
        'error',
      ],
      'no-func-assign': [
        'error',
      ],
      'no-global-assign': [
        'error',
        {
          exceptions: [],
        },
      ],
      'no-implicit-coercion': [
        'error',
        {
          boolean: true,
          number: true,
          string: true,
          disallowTemplateShorthand: true,
          allow: [],
        },
      ],
      'no-implicit-globals': [
        'error',
        {
          lexicalBindings: false,
        },
      ],
      'no-implied-eval': [
        'error',
      ],
      'no-import-assign': [
        'error',
      ],
      'no-inline-comments': [
        'off',
        {
          ignorePattern: '^$',
        },
      ],
      'no-inner-declarations': [
        'error',
        'functions',
      ],
      'no-invalid-regexp': [
        'error',
        {
          allowConstructorFlags: [],
        },
      ],
      'no-invalid-this': [
        'error',
        {
          capIsConstructor: true,
        },
      ],
      'no-irregular-whitespace': [
        'error',
        {
          skipComments: false,
          skipRegExps: false,
          skipStrings: false,
          skipTemplates: false,
        },
      ],
      'no-iterator': [
        'error',
      ],
      'no-label-var': [
        'error',
      ],
      'no-labels': [
        'error',
        {
          allowLoop: false,
          allowSwitch: false,
        },
      ],
      'no-lone-blocks': [
        'off',
      ],
      'no-lonely-if': [
        'error',
      ],
      'no-loop-func': [
        'error',
      ],
      'no-loss-of-precision': [
        'error',
      ],
      'no-magic-numbers': [
        'off',
        {
          detectObjects: false,
          enforceConst: false,
          ignore: [],
          ignoreArrayIndexes: false,
          ignoreDefaultValues: false,
        },
      ],
      'no-misleading-character-class': [
        'error',
      ],
      'no-mixed-operators': [
        'error',
        {
          allowSamePrecedence: true,
          groups: [
            [
              '+',
              '-',
              '*',
              '/',
              '%',
              '**',
            ],
            [
              '&',
              '|',
              '^',
              '~',
              '<<',
              '>>',
              '>>>',
            ],
            [
              '==',
              '!=',
              '===',
              '!==',
              '>',
              '>=',
              '<',
              '<=',
            ],
            [
              '&&',
              '||',
            ],
            [
              'in',
              'instanceof',
            ],
          ],
        },
      ],
      'no-mixed-spaces-and-tabs': [
        'error',
      ],
      'no-multi-assign': [
        'error',
        {
          ignoreNonDeclaration: false,
        },
      ],
      'no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: false,
          exceptions: {
            Property: true,
          },
        },
      ],
      'no-multi-str': [
        'error',
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],
      'no-negated-condition': [
        'error',
      ],
      'no-nested-ternary': [
        'error',
      ],
      'no-new': [
        'error',
      ],
      'no-new-func': [
        'error',
      ],
      'no-new-object': [
        'error',
      ],
      'no-new-symbol': [
        'error',
      ],
      'no-new-wrappers': [
        'error',
      ],
      'no-nonoctal-decimal-escape': [
        'error',
      ],
      'no-obj-calls': [
        'error',
      ],
      'no-octal': [
        'error',
      ],
      'no-octal-escape': [
        'error',
      ],
      'no-param-reassign': [
        'error',
        {
          props: true,
        },
      ],
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: false,
        },
      ],
      'no-promise-executor-return': [
        'error',
      ],
      'no-proto': [
        'error',
      ],
      'no-prototype-builtins': [
        'error',
      ],
      'no-redeclare': [
        'error',
        {
          builtinGlobals: true,
        },
      ],
      'no-regex-spaces': [
        'error',
      ],
      'no-restricted-exports': [
        'error',
      ],
      'no-restricted-globals': [
        'error',
      ],
      'no-restricted-imports': [
        'error',
      ],
      'no-restricted-properties': [
        'error',
        {
          object: 'expect',
          property: 'anything',
          message: 'Never use `expect.anything()`.',
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CallExpression[callee.property.name=forEach]',
          message: 'Never use forEach method',
        },
        {
          selector: 'CallExpression[callee.type=MemberExpression][callee.property.name=/^(every|filter|find|findIndex|findLast|findLastIndex|flatMap|forEach|group|groupToMap|map|reduce|reduceRight|some)$/] IfStatement',
          message: 'Never use if in higher-order function',
        },
        {
          selector: 'DoWhileStatement',
          message: 'Never use do-while',
        },
        {
          selector: 'ForInStatement',
          message: 'Never use for-in',
        },
        {
          selector: 'ForOfStatement',
          message: 'Never use for-of',
        },
        {
          selector: 'ForStatement',
          message: 'Never use for',
        },
        {
          selector: 'Identifier[name=/.+(Data|Info|Item|List|Manager)$/]',
          message: 'Not allowed to use \'Data\', \'Info\', \'Item\', \'List\', and \'Manager\' as suffix of identifier.',
        },
        {
          selector: 'IfStatement IfStatement',
          message: 'Never use nested-if including else-if',
        },
        {
          selector: 'SwitchStatement',
          message: 'Never use switch',
        },
        {
          selector: 'VariableDeclaration[kind=let]',
          message: 'Never use let',
        },
        {
          selector: 'WhileStatement',
          message: 'Never use while',
        },
      ],
      'no-return-assign': [
        'error',
        'except-parens',
      ],
      'no-return-await': [
        'error',
      ],
      'no-script-url': [
        'error',
      ],
      'no-self-assign': [
        'error',
        {
          props: true,
        },
      ],
      'no-self-compare': [
        'error',
      ],
      'no-sequences': [
        'error',
        {
          allowInParentheses: true,
        },
      ],
      'no-setter-return': [
        'error',
      ],
      'no-shadow': [
        'error',
        {
          builtinGlobals: true,
          hoist: 'all',
          ignoreOnInitialization: true,
          allow: [
            'it',
            'length',
            'name',
            'status',
            'target',
          ],
        },
      ],
      'no-shadow-restricted-names': [
        'error',
      ],
      'no-sparse-arrays': [
        'error',
      ],
      'no-tabs': [
        'error',
        {
          allowIndentationTabs: false,
        },
      ],
      'no-template-curly-in-string': [
        'error',
      ],
      'no-ternary': [
        'off',
      ],
      'no-this-before-super': [
        'error',
      ],
      'no-throw-literal': [
        'error',
      ],
      'no-trailing-spaces': [
        'error',
        {
          skipBlankLines: false,
          ignoreComments: false,
        },
      ],
      'no-undef': [
        'error',
        {
          typeof: false,
        },
      ],
      'no-undef-init': [
        'error',
      ],
      'no-undefined': [
        'off',
      ],
      'no-underscore-dangle': [
        'off',
        {
          allow: [],
          allowAfterThis: false,
          allowAfterSuper: false,
          allowAfterThisConstructor: false,
          enforceInMethodNames: false,
          enforceInClassFields: false,
          allowFunctionParams: true,
          allowInArrayDestructuring: true,
          allowInObjectDestructuring: true,
        },
      ],
      'no-unexpected-multiline': [
        'error',
      ],
      'no-unmodified-loop-condition': [
        'error',
      ],
      'no-unneeded-ternary': [
        'error',
        {
          defaultAssignment: false,
        },
      ],
      'no-unreachable': [
        'error',
      ],
      'no-unreachable-loop': [
        'error',
      ],
      'no-unsafe-finally': [
        'error',
      ],
      'no-unsafe-negation': [
        'error',
        {
          enforceForOrderingRelations: false,
        },
      ],
      'no-unsafe-optional-chaining': [
        'error',
        {
          disallowArithmeticOperators: true,
        },
      ],
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
          enforceForJSX: false,
        },
      ],
      'no-unused-labels': [
        'error',
      ],
      'no-unused-private-class-members': [
        'error',
      ],
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      'no-use-before-define': [
        'error',
        {
          functions: false,
          classes: true,
          variables: true,
          allowNamedExports: false,
        },
      ],
      'no-useless-backreference': [
        'error',
      ],
      'no-useless-call': [
        'error',
      ],
      'no-useless-catch': [
        'error',
      ],
      'no-useless-computed-key': [
        'error',
        {
          enforceForClassMembers: false,
        },
      ],
      'no-useless-concat': [
        'error',
      ],
      'no-useless-constructor': [
        'error',
      ],
      'no-useless-escape': [
        'error',
      ],
      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      'no-useless-return': [
        'error',
      ],
      'no-var': [
        'error',
      ],
      'no-void': [
        'error',
        {
          allowAsStatement: false,
        },
      ],
      'no-warning-comments': [
        'off',
        {
          terms: [
            'todo',
            'fixme',
            'xxx',
          ],
          location: 'start',
        },
      ],
      'no-whitespace-before-property': [
        'error',
      ],
      'no-with': [
        'error',
      ],
      'nonblock-statement-body-position': [
        'error',
        'beside',
        {
          overrides: {},
        },
      ],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            consistent: true,
            multiline: false,
          },
          ObjectPattern: {
            consistent: true,
            multiline: false,
          },
          ImportDeclaration: {
            consistent: true,
            multiline: false,
          },
          ExportDeclaration: {
            consistent: true,
            multiline: false,
          },
        },
      ],
      'object-curly-spacing': [
        'error',
        'always',
        {
          arraysInObjects: true,
          objectsInObjects: true,
        },
      ],
      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      'object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: false,
          ignoreConstructors: false,
          avoidExplicitReturnArrows: false,
        },
      ],
      'one-var': [
        'error',
        'never',
      ],
      'one-var-declaration-per-line': [
        'error',
        'initializations',
      ],
      'operator-assignment': [
        'error',
        'always',
      ],
      'operator-linebreak': [
        'error',
        'before',
        {
          overrides: {
            '=': 'after',
            '+=': 'after',
            '-=': 'after',
            '*=': 'after',
            '/=': 'after',
            '%=': 'after',
            '**=': 'after',
            '<<=': 'after',
            '>>=': 'after',
            '>>>=': 'after',
            '&=': 'after',
            '|=': 'after',
            '^=': 'after',
          },
        },
      ],
      'padded-blocks': [
        'error',
        'never',
        {
          allowSingleLineBlocks: false,
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'directive',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'block',
            'break',
            'class',
            'continue',
            'function',
            'return',
            'throw',
            'try',
          ],
        },
      ],
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
        },
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'prefer-exponentiation-operator': [
        'error',
      ],
      'prefer-named-capture-group': [
        'off',
      ],
      'prefer-numeric-literals': [
        'error',
      ],
      'prefer-object-has-own': [
        'error',
      ],
      'prefer-object-spread': [
        'error',
      ],
      'prefer-promise-reject-errors': [
        'error',
        {
          allowEmptyReject: false,
        },
      ],
      'prefer-regex-literals': [
        'error',
        {
          disallowRedundantWrapping: false,
        },
      ],
      'prefer-rest-params': [
        'error',
      ],
      'prefer-spread': [
        'error',
      ],
      'prefer-template': [
        'error',
      ],
      'quote-props': [
        'error',
        'as-needed',
        {
          keywords: false,
          unnecessary: true,
          numbers: false,
        },
      ],
      radix: [
        'error',
        'as-needed',
      ],
      'require-atomic-updates': [
        'error',
        {
          allowProperties: false,
        },
      ],
      'require-await': [
        'off',
      ],
      'require-unicode-regexp': [
        'error',
      ],
      'require-yield': [
        'error',
      ],
      'rest-spread-spacing': [
        'error',
        'never',
      ],
      'semi-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'semi-style': [
        'error',
        'first',
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: [
            'none',
            'all',
            'multiple',
            'single',
          ],
          allowSeparatedGroups: false,
        },
      ],
      'sort-keys': [
        'off',
        'asc',
        {
          caseSensitive: true,
          minKeys: 2,
          natural: false,
          allowLineSeparatedGroups: false,
        },
      ],
      'sort-vars': [
        'off',
        {
          ignoreCase: false,
        },
      ],
      'space-before-blocks': [
        'error',
        {
          functions: 'always',
          keywords: 'always',
          classes: 'always',
        },
      ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'always',
          asyncArrow: 'always',
        },
      ],
      'space-in-parens': [
        'error',
        'never',
      ],
      'space-infix-ops': [
        'error',
        {
          int32Hint: false,
        },
      ],
      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false,
          overrides: {},
        },
      ],
      'spaced-comment': [
        'error',
        'always',
        {
          line: {
            exceptions: [
              '/',
              '-',
              '=',
              '+',
            ],
          },
          block: {
            exceptions: [
              '*',
            ],
            balanced: true,
          },
        },
      ],
      strict: [
        'error',
        'safe',
      ],
      'switch-colon-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'symbol-description': [
        'error',
      ],
      'template-curly-spacing': [
        'error',
        'never',
      ],
      'template-tag-spacing': [
        'error',
        'always',
      ],
      'unicode-bom': [
        'error',
        'never',
      ],
      'use-isnan': [
        'error',
        {
          enforceForSwitchCase: true,
          enforceForIndexOf: true,
        },
      ],
      'valid-typeof': [
        'error',
        {
          requireStringLiterals: false,
        },
      ],
      'vars-on-top': [
        'error',
      ],
      'wrap-iife': [
        'error',
        'inside',
        {
          functionPrototypeMethods: true,
        },
      ],
      'wrap-regex': [
        'off',
      ],
      'yield-star-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      yoda: [
        'error',
        'never',
      ],
    },
  },
  {
    ...jestPlugin.configs['flat/recommended'],

    rules: {
      ...jestPlugin.configs['flat/recommended'].rules,

      'jest/consistent-test-it': [
        'error',
        {
          fn: 'test',
          withinDescribe: 'test',
        },
      ],
      'jest/expect-expect': [
        'error',
        {
          assertFunctionNames: [
            'expect',
          ],
          additionalTestBlockFunctions: [],
        },
      ],
      'jest/max-expects': [
        'error',
        {
          max: 5,
        },
      ],
      'jest/max-nested-describe': [
        'error',
        {
          max: 5,
        },
      ],
      'jest/no-alias-methods': [
        'error',
      ],
      'jest/no-commented-out-tests': [
        'error',
      ],
      'jest/no-conditional-expect': [
        'error',
      ],
      'jest/no-conditional-in-test': [
        'error',
      ],
      'jest/no-deprecated-functions': [
        'error',
      ],
      'jest/no-disabled-tests': [
        'error',
      ],
      'jest/no-done-callback': [
        'error',
      ],
      'jest/no-duplicate-hooks': [
        'error',
      ],
      'jest/no-export': [
        'error',
      ],
      'jest/no-focused-tests': [
        'error',
      ],
      'jest/no-hooks': [
        'off',
      ],
      'jest/no-identical-title': [
        'off',
      ],
      'jest/no-interpolation-in-snapshots': [
        'error',
      ],
      'jest/no-jasmine-globals': [
        'error',
      ],
      'jest/no-large-snapshots': [
        'error',
        {
          maxSize: 12,
          inlineMaxSize: 6,
        },
      ],
      'jest/no-mocks-import': [
        'error',
      ],
      'jest/no-restricted-jest-methods': [
        'error',
        {},
      ],
      'jest/no-restricted-matchers': [
        'error',
        {},
      ],
      'jest/no-standalone-expect': [
        'error',
        {
          additionalTestBlockFunctions: [],
        },
      ],
      'jest/no-test-prefixes': [
        'error',
      ],
      'jest/no-test-return-statement': [
        'error',
      ],
      'jest/no-untyped-mock-factory': [
        'error',
      ],
      'jest/prefer-called-with': [
        'error',
      ],
      'jest/prefer-comparison-matcher': [
        'error',
      ],
      'jest/prefer-each': [
        'error',
      ],
      'jest/prefer-equality-matcher': [
        'error',
      ],
      'jest/prefer-expect-assertions': [
        'off',
      ],
      'jest/prefer-expect-resolves': [
        'error',
      ],
      'jest/prefer-hooks-in-order': [
        'error',
      ],
      'jest/prefer-hooks-on-top': [
        'error',
      ],
      'jest/prefer-lowercase-title': [
        'off',
        {
          ignore: [],
          allowedPrefixes: [],
          ignoreTopLevelDescribe: true,
        },
      ],
      'jest/prefer-mock-promise-shorthand': [
        'error',
      ],
      'jest/prefer-snapshot-hint': [
        'error',
        'multi',
      ],
      'jest/prefer-spy-on': [
        'error',
      ],
      'jest/prefer-strict-equal': [
        'off',
      ],
      'jest/prefer-to-be': [
        'error',
      ],
      'jest/prefer-to-contain': [
        'error',
      ],
      'jest/prefer-to-have-length': [
        'error',
      ],
      'jest/prefer-todo': [
        'error',
      ],
      'jest/require-hook': [
        'off',
        {
          allowedFunctionCalls: [],
        },
      ],
      'jest/require-to-throw-message': [
        'error',
      ],
      'jest/require-top-level-describe': [
        'error',
        {},
      ],
      'jest/valid-describe-callback': [
        'error',
      ],
      'jest/valid-expect-in-promise': [
        'error',
      ],
      'jest/valid-expect': [
        'error',
        {
          alwaysAwait: false,
          asyncMatchers: [
            'toResolve',
            'toReject',
          ],
          minArgs: 1,
          maxArgs: 1,
        },
      ],
      'jest/valid-title': [
        'error',
        {
          ignoreTypeOfDescribeName: false,
          disallowedWords: [],
          mustMatch: {},
          mustNotMatch: [
            '\\.$',
            'Titles should not end with a full-stop (.)',
          ],
        },
      ],
    },
  },
  {
    plugins: {
      jsdoc: jsdocPlugin,
    },
    rules: {
      'jsdoc/check-access': [
        'error',
      ],
      'jsdoc/check-alignment': [
        'error',
      ],
      'jsdoc/check-indentation': [
        'error',
        {
          excludeTags: [
            'example',
            'param',
            'returns',
            'type',
            'typedef',
            'yields',
          ],
        },
      ],
      'jsdoc/check-line-alignment': [
        'error',
        'never',
        {
          tags: [
            'param',
            'arg',
            'argument',
            'property',
            'prop',
            'returns',
            'return',
          ],
          customSpacings: [
            {
              postDelimiter: 1,
            },
            {
              postTag: 1,
            },
            {
              postType: 1,
            },
            {
              postName: 1,
            },
            {
              postHyphen: 1,
            },
          ],
          preserveMainDescriptionPostDelimiter: false,
          wrapIndent: '',
        },
      ],
      'jsdoc/check-param-names': [
        'error',
        {
          allowExtraTrailingParamDocs: false,
          checkDestructured: true,
          checkRestProperty: false,
          enableFixer: false,
          disableExtraPropertyReporting: false,
          useDefaultObjectProperties: false,
        },
      ],
      'jsdoc/check-property-names': [
        'error',
        {
          enableFixer: false,
        },
      ],
      'jsdoc/check-syntax': [
        'error',
      ],
      'jsdoc/check-tag-names': [
        'error',
        {
          definedTags: [],
          enableFixer: true,
          jsxTags: false,
          typed: false,
        },
      ],
      'jsdoc/check-types': [
        'error',
        {
          noDefaults: false,
          unifyParentAndChildTypeChecks: false,
          exemptTagContexts: [],
        },
      ],
      'jsdoc/check-values': [
        'error',
        {
          allowedAuthors: [],
          allowedLicenses: [],
          numericOnlyVariation: false,
          licensePattern: '/([^\\\\n\\\\r]*)/gu',
        },
      ],
      'jsdoc/empty-tags': [
        'error',
        {
          tags: [],
        },
      ],
      'jsdoc/implements-on-classes': [
        'error',
      ],
      'jsdoc/imports-as-dependencies': [
        'off',
      ],
      'jsdoc/informative-docs': [
        'off',
        {
          aliases: [
            'an',
            'our',
          ],
          uselessWords: [
            'a',
            'an',
            'i',
            'in',
            'of',
            's',
            'the',
          ],
        },
      ],
      'jsdoc/match-description': [
        'off',
        {
          mainDescription: true,
          matchDescription: '^\\n?([A-Z`\\d_][\\s\\S]*[.?!`]\\s*)?$',
          message: 'JSDoc description must start with a capital letter.',
          nonemptyTags: true,
          tags: {},
        },
      ],
      'jsdoc/match-name': [
        'error',
        {
          match: [],
        },
      ],
      'jsdoc/multiline-blocks': [
        'error',
        {
          allowMultipleTags: true,
          multilineTags: [
            '*',
          ],
          noFinalLineText: true,
          noMultilineBlocks: false,
          noSingleLineBlocks: true,
          noZeroLineText: true,
          singleLineTags: [
            'lends',
            'type',
            'inheritdoc',
            'override',
          ],
        },
      ],
      'jsdoc/no-bad-blocks': [
        'error',
        {
          ignore: [
            'ts-check',
            'ts-expect-error',
            'ts-ignore',
            'ts-nocheck',
          ],
          preventAllMultiAsteriskBlocks: false,
        },
      ],
      'jsdoc/no-blank-block-descriptions': [
        'error',
      ],
      'jsdoc/no-blank-blocks': [
        'error',
        {
          enableFixer: false,
        },
      ],
      'jsdoc/no-defaults': [
        'error',
        {
          noOptionalParamNames: false,
        },
      ],
      'jsdoc/no-missing-syntax': [
        'error',
        {
          contexts: [],
        },
      ],
      'jsdoc/no-multi-asterisks': [
        'error',
        {
          allowWhitespace: true,
          preventAtEnd: true,
          preventAtMiddleLines: true,
        },
      ],
      'jsdoc/no-restricted-syntax': [
        'error',
        {
          contexts: [],
        },
      ],
      'jsdoc/no-types': [
        'error',
        {
          contexts: [],
        },
      ],
      'jsdoc/no-undefined-types': [
        'error',
        {
          definedTypes: [],
          disableReporting: false,
          markVariablesAsUsed: true,
        },
      ],
      'jsdoc/require-asterisk-prefix': [
        'error',
        'always',
        {
          tags: {},
        },
      ],
      'jsdoc/require-description': [
        'off',
        {
          checkConstructors: true,
          checkGetters: true,
          checkSetters: true,
          descriptionStyle: 'body',
          exemptedBy: [
            'inheritdoc',
          ],
        },
      ],
      'jsdoc/require-description-complete-sentence': [
        'off',
        {
          abbreviations: [],
          newlineBeforeCapsAssumesBadSentenceEnd: false,
          tags: [],
        },
      ],
      'jsdoc/require-example': [
        'off',
        {
          checkConstructors: true,
          checkGetters: false,
          checkSetters: false,
          enableFixer: true,
          exemptedBy: [
            'inheritdoc',
          ],
          exemptNoArguments: false,
        },
      ],
      'jsdoc/require-file-overview': [
        'off',
        {
          tags: {
            file: {
              initialCommentsOnly: true,
              mustExist: true,
              preventDuplicates: true,
            },
          },
        },
      ],
      'jsdoc/require-hyphen-before-param-description': [
        'error',
        'always',
        {
          tags: {},
        },
      ],
      'jsdoc/require-jsdoc': [
        'error',
        {
          checkConstructors: true,
          checkGetters: true,
          checkSetters: true,
          contexts: [],
          enableFixer: true,
          exemptEmptyConstructors: false,
          exemptEmptyFunctions: false,
          fixerMessage: '',
          publicOnly: false,
          require: {
            ArrowFunctionExpression: false,
            ClassDeclaration: false,
            ClassExpression: false,
            FunctionDeclaration: true,
            FunctionExpression: false,
            MethodDefinition: true,
          },
        },
      ],
      'jsdoc/require-param': [
        'error',
        {
          autoIncrementBase: 0,
          checkRestProperty: false,
          checkDestructured: true,
          checkDestructuredRoots: true,
          checkTypesPattern: '/^(?:[oO]bject|[aA]rray|PlainObject|Generic(?:Object|Array))$/',
          enableFixer: true,
          enableRootFixer: true,
          enableRestElementFixer: true,
          unnamedRootBase: [
            'root',
          ],
          useDefaultObjectProperties: false,
        },
      ],
      'jsdoc/require-param-description': [
        'off',
        {
          defaultDestructuredRootDescription: 'The root object',
          setDefaultDestructuredRootDescription: false,
        },
      ],
      'jsdoc/require-param-name': [
        'error',
      ],
      'jsdoc/require-param-type': [
        'error',
        {
          defaultDestructuredRootType: 'object',
          setDefaultDestructuredRootType: false,
        },
      ],
      'jsdoc/require-property': [
        'error',
      ],
      'jsdoc/require-property-description': [
        'error',
      ],
      'jsdoc/require-property-name': [
        'error',
      ],
      'jsdoc/require-property-type': [
        'error',
      ],
      'jsdoc/require-returns': [
        'error',
        {
          checkConstructors: false,
          checkGetters: true,
          exemptedBy: [
            'inheritdoc',
          ],
          forceRequireReturn: false,
          forceReturnsWithAsync: false,
        },
      ],
      'jsdoc/require-returns-check': [
        'error',
        {
          exemptAsync: true,
          exemptGenerators: false,
          reportMissingReturnForUndefinedTypes: false,
        },
      ],
      'jsdoc/require-returns-description': [
        'off',
      ],
      'jsdoc/require-returns-type': [
        'error',
      ],
      'jsdoc/require-throws': [
        'error',
        {
          exemptedBy: [
            'inheritdoc',
          ],
        },
      ],
      'jsdoc/require-yields': [
        'error',
        {
          exemptedBy: [
            'inheritdoc',
          ],
          forceRequireYields: false,
          withGeneratorTag: true,
          next: false,
          forceRequireNext: false,
          nextWithGeneratorTag: false,
        },
      ],
      'jsdoc/require-yields-check': [
        'error',
        {
          checkGeneratorsOnly: false,
          next: false,
        },
      ],
      'jsdoc/sort-tags': [
        'error',
        {
          alphabetizeExtras: false,
          linesBetween: 0,
          reportIntraTagGroupSpacing: false,
          reportTagGroupSpacing: true,
        },
      ],
      'jsdoc/tag-lines': [
        'error',
        'never',
        {
          count: 1,
          startLines: 1,
          endLines: 0,
          applyToEndTag: true,
          tags: {},
        },
      ],
      'jsdoc/text-escaping': [
        'off',
        {
          escapeHTML: false,
          escapeMarkdown: false,
        },
      ],
      'jsdoc/valid-types': [
        'error',
        {
          allowEmptyNamepaths: true,
        },
      ],
    },
  },
  {
    plugins: {
      openreachtech: openreachtechPlugin,
    },
    rules: {
      'openreachtech/empty-line-after-super': [
        'error',
      ],
      'openreachtech/indent-in-infix-expression': [
        'error',
      ],
      'openreachtech/newline-per-parameter': [
        'error',
      ],
      'openreachtech/no-if-in-oneline': [
        'error',
      ],
      'openreachtech/no-unexpected-multiline': [
        'error',
      ],
    },
  },
]
