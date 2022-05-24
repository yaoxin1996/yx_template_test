const path = require('path')
module.exports =  {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    // 静态文件根目录
    contentBase: path.join(__dirname, 'www'),
    // 不压缩
    compress: false,
    port: 8000,
    // 虚拟打包路径，bundle.js并没有真正生成
    publicPath: '/xuni/'
  }
}