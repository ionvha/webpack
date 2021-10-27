const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin.js");
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {

    mode: "production", // 模式，生产或者开发模式
    entry: "./src/main.js", // 打包的入口
    output: {  // 打包出口的创建的目录和文件
        filename: "bundie.js",
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|jpeg)$/, // 匹配以png，jpg，gif结尾的文件
                use: [{
                    loader: 'url-loader',// 
                    options: {
                        limit: 1024 * 40,
                        name: '[name]_[hash:5].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.css/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    } 
                }, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                }, 'css-loader', 'less-loader']
            },
            {
                test: /\.scss/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                }, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/, use: 'vue-loader'
            },
        ]
    },
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'dist'),
    //     },
    //     compress: true,
    //     port: 9000,
    //     open: true,
    //     hot: true,
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        // 清除dist目录
        // new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({
            // 每次打包重命名资源，可以防止客户端缓存
            filename: "[name]-[hash:8].css",
        }),
        new VueLoaderPlugin(),
    ],
    resolve:{
        alias:{
            // 修正vue导的入路径，导入完整的Vue框架
            'vue$':"vue/dist/vue.js",
            '@': path.join(__dirname,'src'),
            '@api':path.join(__dirname,'src/api'),
            '@util':path.join(__dirname,'src/util')
        },
        extensions:['.js','.json','.vue'],
    }
}