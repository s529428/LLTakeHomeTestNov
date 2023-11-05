const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js',
        map: './src/map.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            encoding: false,
                        },
                    },
                ],
            }
        ]
    },
};