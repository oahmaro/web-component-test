// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['packages/**'],
  extends: ['@web-components-monorepo-starter/eslint-config/base.js'],
  parserOptions: {
    project: true,
  },
}
