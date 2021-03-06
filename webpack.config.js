var path = require('path');

module.exports = {
    entry: "./app/assets/scripts/app.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "app.js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}
