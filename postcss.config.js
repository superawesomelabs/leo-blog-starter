module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-brand-colors"),
    require("postcss-cssnext")({
      browsers: "last 2 versions"
    }),
    require("postcss-browser-reporter")
  ]
};
