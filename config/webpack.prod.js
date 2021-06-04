const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production', 
  devtool: false, 
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.
        public}/template.html`,
      filename: 'template.html',
      templateParameters: {
        analytics: 'Google Analytics ID',
        author: 'Igor Agapov',
        publishedDate: '2021-02-27',
        description:
          'Full Webpack 5 Boilerplate for JavaScript, React & TypeScript projects',
        keywords:
          'webpack, webpack5, boilerplate, template, max, config, bundler, bundle, javascript, react, reactjs, react.js, typescript, project, app',
        title: 'Webpack5 Max',
        url: 'https://example.com'
      }
    }),
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})
