const Webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlInlineChunkPlugin = require('html-webpack-inline-chunk-plugin');
const htmlPlugin= require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const PurifyCSSPlugin  = require('purifycss-webpack');
const glob = require('glob-all');
module.exports={
    //入口文件的配置项
    entry:{
        app:'./src/app.js',
      //  vender:['react','react-dom']
    },
    //出口文件的配置项
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/[name].[hash:5].js',
        publicPath:'/'
    },
    //进行调试的
  // devtool:'source-map',
    //模块：例如解读css 图片如何转化，压缩
    module:{
        rules:[
            {   //编译es6和es7成es5的
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // options: {
                //     presets: ['babel-preset-env'],
                //     plugins: ['transform-runtime']
                // }
              
            },
            {
                test:/\.less/,
                exclude:/node_modules/,
                use:ExtractTextPlugin.extract({
                    fallback: {
                        loader:'style-loader',       
                    },
                    use:[
                   
                    {
                        loader:'css-loader',
                        options:{
                            minimize:true,
                            //css文件能import引入
                            module:true,
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            ident:'postcss',
                            plugins:[
                                require('autoprefixer')()
                            ]
                        }
                    },
                    {
                        loader:'less-loader'
                    }
                ]
                })
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            name:'[name].min.[ext]',
                            outputPath:'imgs',
                            limit:5000
                        }
                    }
                ]
            },
            {
                test:/\.(eot|woff2|woff|ttf|svg)/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            name:'[name].min.[ext]',
                            outputPath:'font',
                            limit:5000
                        }
                    }
                ]
            },
            {
                //html中的img
                test:/\.html$/,
                use:[{
                    loader:'html-loader',
                    options:{
                        attrs:['img:src']
                    }
                }]
            }
            
        ]
    },
    //插件 用于生产模块和各项功能
    plugins:[
        new Webpack.DllReferencePlugin({
            manifest:require('./src/dll/react-manifest.json')
        }),
        new htmlPlugin({
            // minify:{
            //     collapseWhitespace:true
            // },
            template:'./index.html',
        }),
        //webpack生成的代码 通过内联的方式插入到html中
        new HtmlInlineChunkPlugin({
            inlineChunks:['manifet']
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname,'src/dll/react.dll.js'),
            hash: true
        }),
        //进行第三方的长缓存
        // new Webpack.NamedChunksPlugin(),
        // new Webpack.NamedModulesPlugin(),
        //打包公共代码的
        // new Webpack.optimize.CommonsChunkPlugin({
        //     name:'vender',
        //     minChunks:2,
        // }),
        //打包公共代码的
        new Webpack.optimize.CommonsChunkPlugin({
            name:'manifet',
            minChunks:Infinity,
        }),
        
        
        // 清除dist文件
       new CleanWebpackPlugin('./dist'),
        //提取css
        new ExtractTextPlugin({
            filename:'css/[name].min.css',
            allChunks:false
        }),
        //对css进行tree shaking
        new PurifyCSSPlugin({
            paths:glob.sync([
                path.join(__dirname,'./*.html'),
                path.join(__dirname,'./src/*.js')
            ])
            // path:(),
            // path:glob.sync()
        }),
        //对js 进行 tree shaping  对js进行压缩
        //new Webpack.optimize.UglifyJsPlugin(),
        //html生成模板
       
       
    ],
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务器压缩是否开启
        compress:true,
        //配置服务端口
        port:8080
    }
}
