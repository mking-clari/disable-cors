const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/entrypoint',
  output: {
    publicPath: '/',
  },
  devtool: 'eval',
  devServer: {
    host: 'localhost',
    port: 8083,
    https: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
