module.exports = {
    entry: {
        main: "./src/index.js"
    },

    output: {
        path: __dirname + '/src/built',
        filename: "[name].js"
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};
