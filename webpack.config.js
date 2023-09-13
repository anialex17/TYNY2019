const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');


module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: false,
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin(),
        new miniCss({
            filename: 'style.css',
        }),
    ],
    devServer: {
        port: 3000
    }

}