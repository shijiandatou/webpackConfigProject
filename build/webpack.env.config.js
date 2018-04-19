const webpack = require('webpack');

module.exports = {
     //进行调试的
     devtool:'source-map',
     plugins:[
        //模块热更新
         new webpack.HashedModuleIdsPlugin(),
         new webpack.HotModuleReplacementPlugin(),
        
     ]
}