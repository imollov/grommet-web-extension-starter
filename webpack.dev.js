const ChromeExtensionReloader = require('webpack-chrome-extension-reloader');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new ChromeExtensionReloader({
      port: 9090,
      entries: {
        background: 'background',
      },
    }),
  ],
});
