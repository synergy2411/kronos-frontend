const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "main.js"
    },
    mode : "development",
    devServer : {
        contentBase : "./src"
    },
    module : {
        rules : [{
            test : /\.css%/,
            use : ["styke-loader", "css-loader"]
        }]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./src/index.html"
        })
    ]
}