const {
  config, output, plugins, getRules,
} = require('./common');

module.exports = {
  ...config,
  plugins,
  output,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: getRules(),
  },
};
