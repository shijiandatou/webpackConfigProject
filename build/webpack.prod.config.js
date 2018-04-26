const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlInlineChunkPlugin = require('html-webpack-inline-chunk-plugin');

const path=require('path');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
module.exports={
    plugins:[
        // 清除dist文件
       new CleanWebpackPlugin(['dist'],{
           root:path.resolve(__dirname,'../')
       }),

    //    //打包公共代码的
    //    new webpack.optimize.CommonsChunkPlugin({
    //         name:'vender',
    //         minChunks:2,
    //     }),
        //打包公共代码的
        new webpack.optimize.CommonsChunkPlugin({
            name:'manifet',
            minChunks:Infinity,
        }),
        //将动态链接库 插入到html
        new AddAssetHtmlPlugin({
            filepath: path.join(__dirname,'../src/dll/react.dll.js'),
            hash: true,
            // outputPath:path.join(__dirname,'../dist/js'),
            // includeSourcemap:true,
            // publicPath:path.join(__dirname,'../dist/js')
        }),
         //webpack生成的代码 通过内联的方式插入到html中
        //  new HtmlInlineChunkPlugin({
        //     inlineChunks:['manifet']
        // }),
        //进行第三方的长缓存
        new webpack.NamedChunksPlugin(),
        new webpack.NamedModulesPlugin(),
        
    ]
}