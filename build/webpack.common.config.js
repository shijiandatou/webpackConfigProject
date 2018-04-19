const productionConfig = require('./webpack.prod.config');
const developmentConfig = require('./webpack.env.config');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlPlugin= require('html-webpack-plugin');

const merge = require('webpack-merge');
const path = require('path');

const generateConfig=env=>{
    const extractLess = new ExtractTextPlugin({
        filename:'css/[name]-bundle-[hash:5].css',
    });
    const cssLoaders=[           
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
            loader:'less-loader',
           
        }
    ]
    const styleLoader = env === 'production'
            ? extractLess.extract({
                fallback:'style-loader',
                use:cssLoaders
            })
            :[
                {
                    loader:'style-loader'
                }
            ].concat(cssLoaders);
    const fileLoader = env === 'development'
           ? [{
                loader:'file-loader',
                options:{
                    name:'[name].min.[ext]',
                    outputPath:'imgs',
                    limit:5000
                }
            }]
            :[{
                loader:'url-loader',
                options:{
                    name:'[name]-[hash:5].[ext]',
                    limit:1000,
                    outputPath:'imgs'
                }
            }]
    return {
        //入口文件的配置项
        entry:{
            app:'./src/app.js',
            vender:['react']
        },
        //出口文件的配置项
        output:{
            path:path.resolve(__dirname,'../dist'),
            filename:'js/[name].[chunkhash].js',
            publicPath:'/'
        },
        resolve:{
            alias:{}
        },
        module:{
            rules:[
                {   //编译es6和es7成es5的
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test:/\.less/,
                    exclude:/node_modules/,
                    use:styleLoader,
                },
                {
                    test:/\.(png|jpg|jpeg|gif)$/,
                    exclude:/node_modules/,
                    use:fileLoader,
                },
                {
                    test:/\.(eot|woff2|woff|ttf|svg)/,
                    exclude:/node_modules/,
                    use:fileLoader,
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
        plugins:[
            extractLess,
            new htmlPlugin({
                minify:{
                    collapseWhitespace:true
                },
                template:'./index.html',
            }),
        ]
    }
};


module.exports=env=>{
    let config =env ==='production'
                ? productionConfig
                : developmentConfig;
    return merge(generateConfig(env),config); 
}