module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    strict: ['error', 'global'],
    'multiline-comment-style': ['error', 'starred-block'],
    'spaced-comment': ['error', 'always'],
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    'no-extra-semi': 'error',
    'no-expected-multiline': 'error',
    'max-len': ['error', { 'code': 80 }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'space-infix-ops': 'error',
    'space-before-blocks': 'error',
    'brace-style': 'error',
    'keyword-spacing': 'error',
    'arraow-spacing': 'error',
    'space-before-function-paren': [
      'error',
      {
        'annonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    'newline-per-chained-called': 'error',
    'space-in-parens': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'no-multiply-empty-lines': ['error', { 'max' : 1, 'maxEOF' : 1 }],
  }
}
