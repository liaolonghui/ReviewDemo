const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {  //可以多入口
    index: './src/js/1.js',
    admin: './src/js/2.js'
  },
  output: {
    path: path.resolve(__dirname,'build'),  //使用webpack-dev-server时不用加
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {test: /\.css$/i, use: ['style-loader','css-loader','postcss-loader']},
      {test: /\.less$/i, use: ['style-loader','css-loader','less-loader']},
      {test: /\.(png|gif|jpg)$/i, use: {
        loader: 'url-loader',  //如果使用url-loader时设置了limit则会依赖于file-loader
        options: {
          outputPath: 'image/',
          limit: 20*1024
        }
      }},
      {test: /\.jsx?/i, use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      }}
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'index.html'
  //   })
  // ],
  resolve: {
    alias: {   // 别名，可用于解决vue引入的一个小问题
      'vue': 'vue/dist/vue.esm'
    }
  },
  devtool: 'source-map'
}
