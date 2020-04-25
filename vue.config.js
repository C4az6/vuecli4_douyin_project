module.exports = {
  outputDir: 'dist',   //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
      open: true, //是否自动弹出浏览器页面
      host: "0.0.0.0", 
      port: '8081', 
      https: false,   //是否使用https协议
      hotOnly: true, //是否开启热更新
      proxy: {
        '/api': {
          target: 'http://linyi.natapp1.cc/',
          ws: true,
          changeOrigin: true,
          pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
            '^/api': ''
          }
        }
      }
  }
}
