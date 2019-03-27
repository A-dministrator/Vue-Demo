const vuxLoader = require('vux-loader')

module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: config => {
    vuxLoader.merge(config, {
      plugins: ['vux-ui', 'duplicate-style']
    })
  },
  devServer: {
    port: 8080, // 端口号
    host: '195.168.0.48',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/sell': {
        target: 'http://127.0.0.1/sell',   // 需要请求的地址
        changeOrigin: true,  // 是否跨域
        pathRewrite: {
          '^/sell': '/'  // 替换target中的请求地址，也就是说，在请求的时候，url用'/proxy'代替'http://ip.taobao.com'
        }
      }
    },  // 配置多个代理
  }
}