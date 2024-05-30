module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "import-newlines",
    "unused-imports"
  ],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        "alwaysTryTypes": true,
        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
        // use <root>/path/to/folder/tsconfig.json
        "project": "tsconfig.json"
      }
    }
  },
  rules: {
    "max-len": ["warn", {
      "code": 120
    }],
    "object-curly-spacing": ["warn", "always"],
    "quotes": ["warn", "single"],
    "for-direction": 1,
    "getter-return": 1,
    "no-async-promise-executor": 1,
    "no-case-declarations": 1,
    "no-class-assign": 1,
    "no-compare-neg-zero": 1,
    "no-cond-assign": 1,
    "no-const-assign": 1,
    "no-constant-condition": 1,
    "no-control-regex": 1,
    "no-debugger": 1,
    "no-delete-var": 1,
    "no-dupe-args": 1,
    "no-dupe-class-members": 1,
    "no-dupe-else-if": 1,
    "no-dupe-keys": 1,
    "no-duplicate-case": 1,
    "no-empty": 1,
    "no-empty-character-class": 1,
    "no-empty-pattern": 1,
    "no-ex-assign": 1,
    "no-extra-boolean-cast": 1,
    "no-extra-semi": 1,
    "no-fallthrough": 1,
    "no-func-assign": 1,
    "no-global-assign": 1,
    "no-import-assign": 1,
    "no-inner-declarations": 1,
    "no-invalid-regexp": 1,
    "no-irregular-whitespace": 1,
    "no-loss-of-precision": 1,
    "no-misleading-character-class": 1,
    "no-mixed-spaces-and-tabs": 1,
    "no-new-symbol": 1,
    "no-nonoctal-decimal-escape": 1,
    "no-obj-calls": 1,
    "no-octal": 1,
    "no-prototype-builtins": 1,
    "no-redeclare": 1,
    "no-regex-spaces": 1,
    "no-self-assign": 1,
    "no-setter-return": 1,
    "no-shadow-restricted-names": 1,
    "no-sparse-arrays": 1,
    "no-this-before-super": 1,
    "no-undef": "error",
    "no-unexpected-multiline": 1,
    "no-unreachable": 1,
    "no-unsafe-finally": 1,
    "no-unsafe-negation": 1,
    "no-unsafe-optional-chaining": 1,
    "no-unused-labels": 1,
    "no-useless-backreference": 1,
    "no-useless-catch": 1,
    "no-useless-escape": 1,
    "no-with": 1,
    "require-yield": 1,
    "use-isnan": 1,
    "valid-typeof": 1,
    "jsx-quotes": 1,
    "array-bracket-spacing": 1,
    "arrow-spacing": 1,
    "camelcase": 1,
    "comma-style": 1,
    "default-case": 1,
    "default-case-last": 1,
    "eqeqeq": 1,
    "func-style": 1,
    "no-lonely-if": 1,
    "no-lone-blocks": 1,
    "no-implied-eval": 1,
    "no-implicit-globals": 1,
    "prefer-const": 1,
    "no-var": 1,
    "no-useless-return": 0,
    "operator-linebreak": 0,
    "prefer-arrow-callback": 1,
    "require-await": 1,
    "template-curly-spacing": 1,
    "space-in-parens": 1,
    "space-before-function-paren": 1,
    "spaced-comment": 1,
    "no-inline-comments": "error",
    "no-warning-comments": "error",
    "semi": ["warn", "never"],
    "indent": [
      "warn",
      4,
      { "SwitchCase": 1 }
    ],
    "function-paren-newline": "off",
    "implicit-arrow-linebreak": ["warn", "beside"],
    "no-console": 1,
    "no-eval": 1,
    "no-trailing-spaces": 1,
    "no-unused-expressions": 1,
    "nonblock-statement-body-position": 1,
    "arrow-body-style": 0,
    "arrow-parens": [1, "as-needed", { "requireForBlockBody": true }],

    "import/order": [1,
      {
        "groups": [
          ["builtin", "external"],
          "internal",
          "parent",
          ["sibling", "index"]
        ],
        "pathGroups": [
          {
            "pattern": "src/assets/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "src/components/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "src/modules/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "newlines-between": "always"
      }
    ],
    "import/newline-after-import": ["warn", { "count": 2 }],
    "import/no-named-as-default": 0,
    "import/default": 0,
    "import-newlines/enforce": [
      "warn",
      {
        "items": 3,
        "max-len": 120,
        "semi": false
      }
    ],
    "import/no-duplicates": "off",

    "unused-imports/no-unused-imports": [1],
    "unused-imports/no-unused-vars": [0],

    // Already covered by unused-imports/no-unused-imports
    // "no-unused-vars": 1,

    // "no-use-before-define" set of "off", because better implemented using "@typescript-eslint/no-use-before-define".
    // @typescript-eslint allows using types before defining them
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { "argsIgnorePattern": "^_" }
    ],

    "react/display-name": 0,
    "react/jsx-indent": [2, 4, {
      "indentLogicalExpressions": true
    }],
    "react/no-unescaped-entities": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-first-prop-new-line": [1, "multiline"],
    "react/jsx-max-props-per-line": [1, {
      "maximum": 1
    }],
    "react/jsx-closing-bracket-location": [1, "line-aligned"],
    "react/jsx-one-expression-per-line": [1, { "allow": "literal" }],
    "react/jsx-newline": [1, { "prevent": false }],
    "react/no-unstable-nested-components": 1,

    "@next/next/no-html-link-for-pages": [0],
    "@next/next/no-img-element": "off"

    // stricter rules for future
    // react/jsx-max-depth
    // max-lines
  },
}
