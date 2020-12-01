const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = '../src/';
const manifestContent = require('../src/manifest');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

module.exports = {
    entry: {
        popup: path.join(__dirname, srcDir + 'popup/index.ts'),
        options: path.join(__dirname, srcDir + 'options/index.ts'),
        background: path.join(__dirname, srcDir + 'background/index.ts'),
        content_script: path.join(__dirname, srcDir + 'content/index.ts'),
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].js',
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        // exclude locale files in moment
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CopyPlugin({
            patterns: [{ from: '.', to: '../', context: 'public' }],
            options: {},
        }),
        new GenerateJsonPlugin('../manifest.json', manifestContent),
    ],
};
