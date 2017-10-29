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
    }
};
