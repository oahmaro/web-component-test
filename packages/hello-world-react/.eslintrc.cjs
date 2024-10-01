/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@web-components-monorepo-starter/eslint-config/base.js'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
