const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcDir = path.resolve(__dirname, 'src');
const publicDir = path.resolve(__dirname, 'public');
const isDev = process.env.NODE_ENV === 'development';
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

module.exports = {
  entry: './src/index.js',
  output: {
    path: publicDir,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': srcDir,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(srcDir, 'index.html'),
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon.ico'),
          to: publicDir,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 8080,
    hot: true,
    client: {
      progress: true,
    },
    watchFiles: {
      paths: ['src/'],
      options: {
        usePolling: false,
      },
    },
  },
};
