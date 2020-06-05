const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: path.resolve('src'),
  entry: {
    background: './background/index.js',
    popup: './popup/index.js',
  },
  output: {
    path: path.resolve('dist/js'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new Dotenv()],
};
