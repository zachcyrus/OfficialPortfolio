const path = require('path');
const CopyPlugin = require("copy-webpack-plugin")

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
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: '/images/',
                        pubicPath: '/images/'
                      }
                    }
                  ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/images", to: "dist/images"}
            ]
        })
    ]
};