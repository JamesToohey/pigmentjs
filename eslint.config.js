const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = [
  {
    ignores: ["dist/**/*", "test/**/*", "*.js"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.es2021,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "no-console": "warn",
      "comma-dangle": ["warn", "always-multiline"],
      "no-sparse-arrays": "warn",
      "no-unreachable": "error",
      "no-unsafe-negation": "error",
      "getter-return": "error",
      "no-compare-neg-zero": "error",
      "no-debugger": "error",
      "no-trailing-spaces": "error",
      "no-extra-semi": "warn",
      "eqeqeq": "error",
      "curly": "warn",
      "dot-notation": "error",
      "no-alert": "error",
      "no-unused-expressions": "warn",
      "no-useless-escape": "error",
      "require-await": "error",
      "prefer-const": "error",
      "camelcase": "error",
      "comma-spacing": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
