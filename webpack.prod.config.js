const path = require('path');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log('prod')
module.exports = merge(common, {
    devtool: false,
    plugins: [
        new MiniCssExtractPlugin({
            // 每次打包重命名资源，可以防止客户端缓存
            filename: "[name]-[hash:8].css",
        })
    ]
});