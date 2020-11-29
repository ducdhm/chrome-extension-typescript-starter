const packageJson = require('../package.json');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ZipFilesPlugin = require('webpack-zip-files-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new ZipFilesPlugin({
            entries: [
                { src: path.join(__dirname, './dist/') },
            ],
            output: path.join(__dirname, './dist/', `${packageJson.name}-${[packageJson.version]}`),
            format: 'zip',
        }),
    ]
});
