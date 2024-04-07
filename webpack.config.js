const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'assets/js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        format: {
          comments: false,
        },
      },
    })],
  },
};
