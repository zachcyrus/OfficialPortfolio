const path = require('path');

module.exports = {
    entry: './src/scripts/script.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
};