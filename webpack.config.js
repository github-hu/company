var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin=require('extract-text-webpack-plugin')

module.exports = {
   
    //入口文件
    entry:'./src/app.js',
    //出口
    output:{
        path:__dirname + '/build',
        //必须携程绝对路径
//         filename:'app'+Date.now()+'.js'
        filename:'app_[hash].js'
    },
    devServer:{
        contentBase:'./build',
        port:9000,
        host:'localhost',
        historyApiFallback:false
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new ExtractTextPlugin({
            filename:'app.css',
            allChunks:true
        })
    ],
    externals: {
    'jquery': 'jQuery',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'antd': 'antd'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test:/\.scss$/,
                loader:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader!sass-loader'
                })
            },
            {
                //编译js
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }
        ]
    }
}