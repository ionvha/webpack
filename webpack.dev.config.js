// 开发环境的配置
const path = require('path');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true, // gzip压缩
        port: 9000, // 指定端口
        open: true, // 自动打开浏览器
    },
});