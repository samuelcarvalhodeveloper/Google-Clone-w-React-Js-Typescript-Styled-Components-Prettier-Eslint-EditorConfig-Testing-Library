module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-useless-constructor": 0,
    "no-empty-function": 0,
    "no-undef": 0,
    "no-param-reassign": 0,
    "jsx-a11y/alt-text": 0,
    "react/no-unescaped-entities": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
  },
};
