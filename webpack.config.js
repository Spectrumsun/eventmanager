const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './client/public');
const APP_DIR = path.resolve(__dirname, './client/src');


module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'env', ]
          }
        }
      }
    ]
  }

};
