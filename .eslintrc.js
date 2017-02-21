module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:react/recommended", "prettier", "prettier/react"],
  plugins: ["react", "prettier", "graphql"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    "prettier/prettier": "error",
    "graphql/template-strings": [
      "error",
      {
        // Import default settings for your GraphQL client. Supported values:
        // 'apollo', 'relay', 'lokka', 'literal'
        env: "apollo",

        // Import your schema JSON here
        schemaJson: require("./dist/api/schema.json")

        // OR provide absolute path to your schema JSON
        // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),

        // tagName is gql by default
      }
    ]
  }
};
