var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    devtool: 'eval-source-map',
  
    entry:  __dirname + "/app/main.js",
    output: {
      path: __dirname + "/public",
      filename: "bundle.js"
    },
  
    devServer: {
      contentBase: "./public",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true//实时刷新
    } ,
    plugins:[
      new HtmlWebpackPlugin({
        title:'rd平台',
        template: __dirname +'/public/index.html', // 源模板文件
        filename: __dirname +'/public/index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
        showErrors: true,
        inject: 'body',
        chunks: ["common",'index']
    })
    ],
    module: {
            rules: [{
               test: /\.css$/,
                use: [
                "style-loader",
                "css-loader"
              ]
             },
             {
                test:/\.(woff|woff2)$/,
                 use: [
                 "url?prefix=font/&limit=5000"
               ]
              },
              {
                test:/\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                 use: [
                 "url?limit=10000&mimetype=application/octet-stream"
               ]
              },
              {
                test:/\.svg(\?v=\d+\.\d+\.\d+)?$/,
                 use: [
                 "url?limit=10000&mimetype=image/svg+xml"
               ]
              }
            
            ] 
      }
  }
  