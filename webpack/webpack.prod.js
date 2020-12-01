const packageJson = require('../package.json');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new FileManagerPlugin({
            events: {
                onEnd: {
                    archive: [
                        {
                            source: path.join(__dirname, '../dist/'),
                            destination: path.join(__dirname, '../dist/', `${packageJson.name}-${packageJson.version}.zip`),
                            format: 'zip',
                            options: {
                                gzip: true,
                                gzipOptions: {
                                    level: 1,
                                },
                                globOptions: {
                                    nomount: true,
                                },
                            },
                        },
                    ],
                },
            },
        }),
    ],
});
