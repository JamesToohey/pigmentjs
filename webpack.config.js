const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: "ts-loader"},
            {test: /\.js$/, loader: "source-map-loader"},
        ],
    },
    output: {
        filename: "pigment.js",
        globalObject: "this",
        path: path.resolve(__dirname, "dist"),
        library: "pigmentjs",
        libraryTarget: "umd",
    },
};
