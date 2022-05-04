module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-restricted-syntax": 0,
    "no-undef": 0,
    "import/no-unresolved": 0,
    "import/extensions": [1, { typescript: 1 }],
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/function-component-definition": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react/destructuring-assignment": 0,
    "react/button-has-type": [
      1,
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    "prefer-regex-literals": 0,
    "no-shadow": "off",
  },
};
