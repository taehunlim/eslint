module.exports = {
  extends: ["./eslint-config-airbnb-base/index", "./rules/variables"].map(
    require.resolve
  ),
  env: {
    browser: true,
  },
};
