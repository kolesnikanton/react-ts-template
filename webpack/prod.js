const {
  config, plugins, getRules, output,
} = require('./common');

module.exports = {
  ...config,
  plugins,
  output,
  devtool: false,
  mode: 'production',
  module: {
    rules: getRules('prod'),
  },
};
