const path = require("path");

module.exports = {
    entry : "./es6-demo.js",
    output : {
        path : path.resolve(__dirname,"/dist"),
        filename : "main.js"
    },
    mode : "development",
    devServer : {
        contentBase : "./"
    }
}