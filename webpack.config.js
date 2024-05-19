const path = require('path');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
    entry: './scripts.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
                MiniCss.loader,
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new MiniCss({
            filename: 'style.css',
        }),
    ]
};