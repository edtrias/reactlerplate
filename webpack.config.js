const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const ENV = process.env.NODE_ENV;
const isProduction = ENV === 'production';

const config = {
    devServer: {
        open: true,
        overlay: {
            errors: true,
            warnings: true,
        },
        inline: true,
        port: 3000,
        contentBase: path.join(__dirname, 'src/public'),
    },
    devtool: 'inline-source-map', // prevents an error to be shown in devtools
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        alias: {
            scss: path.resolve(__dirname, './src/scss'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            favicon: './public/favicon.ico',
        }),
    ],
};

module.exports = () => {
    return config;
};
