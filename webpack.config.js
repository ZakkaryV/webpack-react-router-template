const path = require('path');

console.log(path.resolve(__dirname, 'dist'))
module.exports = {

    // Tells Webpack where to begin building it's dependency tree
    entry: ["./src/app.js"],

    // Specifies where to put the bundle and what to name it
    output: {
        filename: "bundle.js"
    },

    // Defines which loader to use for a given extension
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}