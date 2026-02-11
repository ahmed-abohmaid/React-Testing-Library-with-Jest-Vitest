import jestDom from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";
import vitest from "eslint-plugin-vitest";

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:vitest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: {
    "react-refresh": "react-refresh",
    "jest-dom": jestDom,
    "testing-library": testingLibrary,
    vitest,
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "warn", // warning, not error
    "vitest/expect-expect": "off", // distracting red squiggles while writing tests
    "react/prop-types": "off", // turn off props validation
    ...jestDom.configs.recommended.rules,
    ...testingLibrary.configs.react.rules,
    ...vitest.configs.recommended.rules,
  },
  globals: {
    ...vitest.environments.env.globals,
  },
};
