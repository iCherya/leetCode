// eslint-disable-next-line no-undef
module.exports = {
    extends: 'eslint:recommended',
    env: {
        browser: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': 'error',
        'array-callback-return': 'error',
        'default-case': 'warn',
        eqeqeq: ['error', 'always'],
        'guard-for-in': 'warn',
        'no-caller': 'error',
        'no-empty-function': 'error',
        'no-eval': 'error',
        'no-extra-bind': 'error',
        'no-floating-decimal': 'error',
        'no-lone-blocks': 'error',
        'no-multi-spaces': 'error',
        'no-new': 'warn',
        'no-return-assign': 'error',
        'no-self-compare': 'error',
        'no-useless-call': 'error',
        'no-undef-init': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        'comma-dangle': ['error', 'never'],
        'func-call-spacing': ['error', 'never'],
        'max-len': ['error', { code: 120, ignoreComments: true }],
        'new-cap': ['error', { newIsCap: true }],
        'new-parens': 'error',
        'no-nested-ternary': 'error',
        'no-unneeded-ternary': 'error',
        quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'arrow-spacing': ['error', { before: true, after: true }],
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-prototype-builtins': 'off',
        'no-var': 'warn',
        'no-unused-vars': ['error', { vars: 'local' }]
    }
};
