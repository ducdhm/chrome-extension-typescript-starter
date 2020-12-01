const packageJson = require('../package.json');

module.exports = {
    'manifest_version': 2,
    'name': packageJson.title,
    'description': packageJson.description,
    'version': packageJson.version,
    'permissions': [
        'storage',
        '<all_urls>',
    ],
    'icons': {
        '16': 'icon_16.png',
        '32': 'icon_32.png',
        '48': 'icon_48.png',
        '128': 'icon_128.png',
    },
    'options_ui': {
        'page': 'options.html',
        'chrome_style': true,
    },
    'browser_action': {
        'default_icon': 'icon_128.png',
        'default_popup': 'popup.html',
    },
    'content_scripts': [
        {
            'matches': [
                '<all_urls>',
            ],
            'js': [
                'js/vendor.js',
                'js/content_script.js',
            ],
        },
    ],
    'background': {
        'scripts': [
            'js/vendor.js',
            'js/background.js',
        ],
    },
};
