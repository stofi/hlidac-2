/* eslint-disable */
module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  // parser: '@typescript-eslint/parser',
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
    // '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'import', 'vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',

      {
        blankLine: 'always',
        prev: '*',
        next: [
          'interface',
          'type',
          'return',
          'export',
          'function',
          'class',
          'multiline-const',
          'multiline-block-like',
          'multiline-expression',
        ],
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages.
          ['^vue'],
          // ['^@?nuxt'],
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-deprecated-slot-attribute': 'off',

    'vue/valid-v-slot': 'off',
    camelcase: 1,
    'no-use-before-define': 'off',

    'vue/no-deprecated-slot-attribute': 'off',

    'vue/valid-v-slot': 'off',
    camelcase: 1,
    'no-use-before-define': 'off',
    // 'prettier/prettier': 1,
    'vue/camelcase': 'warn',
    'vue/component-name-in-template-casing': 'warn',
    'vue/custom-event-name-casing': [
      'warn',
      'kebab-case',
      { ignores: ['click:row'] },
    ],
    'vue/new-line-between-multi-line-property': 'warn',
    'vue/next-tick-style': 'warn',
    'vue/no-useless-v-bind': 'warn',
    'vue/no-useless-mustaches': 'warn',
    'vue/no-duplicate-attr-inheritance': 'warn',
    'vue/no-multiple-objects-in-class': 'warn',
    'vue/no-potential-component-option-typo': 'warn',
    'vue/no-static-inline-styles': 'warn',
    'vue/no-reserved-component-names': 'warn',
    'vue/padding-line-between-blocks': 'warn',
    'vue/require-name-property': 'warn',
    'vue/v-on-event-hyphenation': [
      'warn',
      'always',
      {
        ignore: [
          'click:row',
          'ionBlur',
          'ionChange',
          'ionCancel',
          'ionFocus',
          'ionInfinite',
          'ionRefresh',
          'ionError',
          'ionImgDidLoad',
          'ionImgWillLoad',
        ],
      },
    ],
    'vue/no-v-text-v-html-on-component': ['off', {}],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
