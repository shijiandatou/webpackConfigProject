const webpack = require('webpack');
const path = require('path');

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
     //进行调试的
     devtool:'source-map',
     plugins:[
        //模块热更新
         new webpack.HashedModuleIdsPlugin(),
         new webpack.HotModuleReplacementPlugin(),
         new AddAssetHtmlPlugin({
            filepath: path.join(__dirname,'../src/dll/react.dll.js'),
            hash: true,
        }),  
     ]
}