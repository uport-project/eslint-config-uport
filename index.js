module.exports = {
  extends: ["standard", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    }
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        tabWidth: 2,
        semi: false,
        trailingComma: "all",
        singleQuote: true,
        bracketSpacing: true,
        jsxBracketSameLine: false
      }
    ]
  }
};
