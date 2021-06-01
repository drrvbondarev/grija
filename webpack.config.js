const path = require('path')
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
}
// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // ...

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],
    module: {
        rules: [
            // CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        
                // изображения
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource',
                },
           // шрифты и SVG
           {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
        },
        ],
    },
    module: {
        rules: [
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
     // ...
     mode: 'development',
     devServer: {
         historyApiFallback: true,
         contentBase: path.resolve(__dirname, './dist'),
         open: true,
         compress: true,
         hot: true,
         port: 8080,
     },

     plugins: [
         // ...
         // применять изменения только при горячей перезагрузке
         new webpack.HotModuleReplacementPlugin(),
         new CleanWebpackPlugin(),
     ],
     module: {
        rules: [
            // CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
}