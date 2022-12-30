/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    // suggestions
    camelcase: 'error',
    // complexity: ['error', 3],
    'default-param-last': ['error'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'func-style': ['error', 'declaration'],
    'no-console': 'error',
    'no-empty-function': 'error',
    'no-plusplus': 'error',
    'no-unneeded-ternary': 'warn',
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-regex-literals': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'spaced-comment': ['warn', 'always'],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    // https://eslint.org/docs/latest/rules/#layout--formatting
    quotes: ['error', 'single'],
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/array-type': ['warn', { default: 'generic', readonly: 'generic' }],
  },
};