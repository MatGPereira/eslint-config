module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["eslint:recommended", "standard", "plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
        "tabWidth": 2,
        "singleQuote": true,
        "trailingComma": 'all',
        "arrowParens": 'always',
        "semi": true,
      },
    ],
    "line-comment-position": [
      "error",
      {
        "ignorePattern": "info",
        "applyDefaultIgnorePatterns": false
      }
    ],
    "yoda": [
      "error",
      "never"
    ],
    "strict": [
      "error",
      "global"
    ],
    "sort-keys": [
      "error",
      "asc",
      {
        "caseSensitive": false,
        "natural": false,
        "minKeys": 2
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "multiple",
          "single"
        ],
        "allowSeparatedGroups": true
      }
    ],
    "require-yield": "error",
    "require-await": "error",
    "radix": [
      "error",
      "always"
    ],
    "prefer-template": "error",
    "prefer-spread": "error",
    "prefer-rest-params": "error",
    "prefer-object-spread": "error", // This can be changed if you want to use Object.assign
    "prefer-named-capture-group": "error",
    "prefer-destructuring": [
      "error",
      {
        "object": true,
        "array": true
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "prefer-arrow-callback": "error",
    "operator-assignment": [
      "error",
      "always"
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        "avoidQuotes": true
      }
    ],
    "no-warning-comments": [
      "error",
      {
        "decoration": [
          "/",
          "*"
        ]
      }
    ],
    "no-void": "error",
    "no-var": "error",
    "no-useless-return": "error",
    "no-useless-rename": "error",
    "no-useless-escape": "error",
    "no-useless-constructor": "error",
    "no-useless-concat": "error",
    "no-useless-computed-key": "error",
    "no-unused-labels": "error",
    "no-unused-expressions": [
      "error",
      {
        "allowTernary": false,
        "allowShortCircuit": true
      }
    ],
    "no-unneeded-ternary": [
      "error",
      {
        "defaultAssignment": true
      }
    ],
    "no-throw-literal": "error",
    "no-shadow-restricted-names": "error",
    "no-return-assign": [
      "error",
      "always"
    ],
    "no-redeclare": "error",
    "no-param-reassign": "error",
    "no-new-wrappers": "error",
    "no-nested-ternary": "error",
    "no-multi-assign": "error",
    "no-magic-numbers": [
      "error",
      {
        "ignore": [
          1,
          "1n"
        ],
        "ignoreArrayIndexes": true,
        "ignoreClassFieldInitialValues": true,
        "ignoreDefaultValues": false,
        "enforceConst": true,
        "detectObjects": false
      }
    ],
    "no-lonely-if": "error",
    "no-lone-blocks": "error",
    "no-invalid-this": "error",
    "no-eq-null": "error",
    "no-empty-static-block": "error",
    "no-empty-function": "error",
    "no-empty": "error",
    "no-else-return": [
      "error",
      {
        "allowElseIf": false
      }
    ],
    "no-case-declarations": "error",
    "max-params": [
      "error",
      3
    ],
    "max-nested-callbacks": [
      "error",
      3
    ],
    "max-lines-per-function": [
      "error",
      {
        "max": 20,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-lines": [
      "error",
      {
        "max": 100,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-depth": [
      "error",
      3
    ],
    "max-classes-per-file": [
      "error",
      {
        "ignoreExpressions": true,
        "max": 1
      }
    ],
    "logical-assignment-operators": [
      "error",
      "always",
      {
        "enforceForIfStatements": true
      }
    ],
    "id-length": [
      "error",
      {
        "min": 4,
        "properties": "always"
      }
    ],
    "grouped-accessor-pairs": [
      "error",
      "getBeforeSet"
    ],
    "eqeqeq": "error",
    "default-param-last": [
      "error"
    ],
    "default-case-last": "error",
    "default-case": "error",
    "curly": [
      "error",
      "multi"
    ],
    "consistent-return": "error",
    "complexity": [
      "error",
      {
        "max": 2
      }
    ],
    "camelcase": [
      "error",
      {
        "allow": []
      }
    ],
    "valid-typeof": "error",
    "use-isnan": "error",
    "require-atomic-updates": "error",
    "no-useless-assignment": "error",
    "no-unused-private-class-members": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-finally": "error",
    "no-unreachable-loop": "error",
    "no-unreachable": "error",
    "no-unmodified-loop-condition": "error",
    "no-this-before-super": "error",
    "no-template-curly-in-string": "error",
    "no-sparse-arrays": "error",
    "no-setter-return": "error",
    "no-self-assign": "error",
    "no-promise-executor-return": "error",
    "no-loss-of-precision": "error",
    "no-inner-declarations": "error",
    "no-import-assign": "error",
    "no-func-assign": "error",
    "no-fallthrough": "error",
    "no-empty-pattern": "error",
    "no-duplicate-imports": "error",
    "no-duplicate-case": "error",
    "no-dupe-else-if": "error",
    "no-dupe-args": "error",
    "no-constructor-return": "error",
    "no-const-assign": "error",
    "no-compare-neg-zero": "error",
    "no-class-assign": "error",
    "no-async-promise-executor": "error",
    "getter-return": "error",
  }
}
