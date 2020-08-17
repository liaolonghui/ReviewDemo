# webpack
在webpack4开始它将webpack与webpack-cli分开处理，需要安装webpack以及webpack-cli。   


style-loader   css-loader   postcss-loader(autoprefixer)   less-loader(less)   
file-loader   url-loader   babel-loader(@babel/core @babel/preset-env @babel/plugin-transform-runtime以及@babel/runtime)   


## 代码质量检查 ESLint
cnpm i eslint eslint-loader -D    

别忘了配置文件.eslintrc

## 单元测试 jest
cnpm i jest jest-webpack -D

## HtmlWebpackPlugin
1.为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题   
2.可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
