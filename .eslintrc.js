module.exports = {
    extends: ['@nekohack/eslint-config-react'],
    plugins: ['@typescript-eslint'],
    root: true,
    env: { node: true, es6: true },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    settings: {
        react: {
            pragma: 'h'
        }
    }
}