const packageJson = require('../package.json');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ZipPlugin = require('zip-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new ZipPlugin({
            path: '../',

            filename: `${packageJson.name}-${[packageJson.version]}.zip`,

            pathMapper: function(assetPath) {
                if (!assetPath.endsWith('.js')) {
                    return path.basename(assetPath);
                }

                return assetPath;
            },

            fileOptions: {
                mtime: new Date(),
                mode: 0o100664,
                compress: true,
                forceZip64Format: false,
            },

            zipOptions: {
                forceZip64Format: false,
            },
        })
    ]
});
