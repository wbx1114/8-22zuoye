const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:'development',
    entry: "./src/main.js", // 入口
    output: { 
        path: path.join(__dirname, "dist"), // 出口路径
        filename: "bundle.js" // 出口文件名
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'index.html'
        })
      ],
      devServer: {
        port: 3000, // 端口号
        open: true
      },
      module: { 
        rules: [
        
          {
            test: /\.less$/,
            use: [ "style-loader", "css-loader", 'less-loader']
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ]
    }



}