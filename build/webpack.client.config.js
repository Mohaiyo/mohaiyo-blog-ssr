const webpack = require('webpack')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const base = require('./webpack.base.config')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const isProd = process.env.NODE_ENV === 'production'
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin') //  vuetify-loader will automatically import all the vuetify components you use, where you use them.
const config = merge(base, {
  target: 'web', // <=== 默认是 'web'，可省略
  entry: {
    app: './assets/entry-client.js'
  },
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': '"client"'
    }),
    new VueSSRClientPlugin()
  ],
  optimization: isProd ? {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        },
        vuetify: {
          name: 'chunk-vuetify', // 单独将 vuetify 拆包
          priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
          test: /[\\/]node_modules[\\/]vuetify[\\/]/
        }
      }
    },
    runtimeChunk: 'single',
    minimizer: [
      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSAssetsPlugin()
    ]
  } : {}
})

module.exports = config
