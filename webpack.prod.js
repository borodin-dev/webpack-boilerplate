const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = merge(common, {
mode: 'production',
  plugins: [
      new CleanWebpackPlugin(['dist']),
      new CopyWebpackPlugin([
              { from: path.resolve(__dirname, 'src/images'), to: path.resolve(__dirname, 'dist/images')},
          ],
          {
              ignore: [
                  {glob:'svg/*'},
              ]
          },
      )
  ],
});

