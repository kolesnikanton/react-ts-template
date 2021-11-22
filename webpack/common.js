// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const config = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};

const getRules = () => ([
  { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
  { test: /\.css$/, use: ['style-loader', 'css-loader'] },
]);

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
  }),
];

const output = {
  path: resolve(__dirname, '..', 'dist'),
  filename: 'index_bundle.js',
  publicPath: '/',
  clean: true,
};

module.exports = {
  config, plugins, getRules, output,
};
