module.exports = {
  extends: "standard-with-typescript",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  rules: {
    indent: "off",
    quotes: "off",
    "comma-dangle": "off",
    semi: "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
  },
};
