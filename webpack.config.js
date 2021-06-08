const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const STATIC_PATH = path.resolve(__dirname, 'public');
const BUILD_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.tsx', // точка входа, о которой говорилось ранее.
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // сопоставляет файлы .js, .ts, и .tsx
        loader: 'babel-loader', // использует для указанных типов файлов загрузчик babel-loader (ts-loader не требуется).
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },{
        test: /\.(?:png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },{
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[contenthash].js', //выходной бандл,
    assetModuleFilename: './assets/images/[name].[hash][ext]',
  },
  devServer: {
    contentBase: STATIC_PATH,
    // publicPath: BUILD_PATH,
    compress: true,
    port: 8000,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // favicon: './src/assets/favicon/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new webpack.HotModuleReplacementPlugin(), // used for hot reloading when developing
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
};
