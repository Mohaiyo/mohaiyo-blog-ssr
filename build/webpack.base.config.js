const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin') //  vuetify-loader will automatically import all the vuetify components you use, where you use them.

const isProd = process.env.NODE_ENV === 'production'
const resolve = (file) => path.resolve(__dirname, file)

module.exports = {
  mode: isProd ? 'production' : 'development', // development 会将 process.env.NODE_ENV 的值设为 development。 启用 NamedChunksPlugin 和 NamedModulesPlugin.而production会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
  devtool: isProd
    ? false
    : '#cheap-module-source-map',
  output: { // 输出打包文件
    path: resolve('../public'),
    publicPath: '/public/',
    filename: 'js/[name].[chunkhash].js'
    // path: "/home/proj/cdn/assets/[hash]", 使用cdn
    // publicPath: "http://cdn.example.com/assets/[hash]/" 使用hash的例子
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.vue'],
    alias: {
      '@': resolve('../'),
      'assets': resolve('../assets'),
      'components': resolve('../components'),
      'examples': resolve('../pages/examples'),
      'layouts': resolve('../layouts'),
      'mixins': resolve('../mixins'),
      'pages': resolve('../pages'),
      'public': resolve('../public'),
      'router': resolve('../router'),
      'static': resolve('../static'),
      'store': resolve('../store'),
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.css$/,
        loader: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        loader: ['vue-style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            // 你也可以从一个文件读取，例如 `variables.scss`
            data: `$res: #f44;`
          }
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: isProd ? [
    // new VuetifyLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/common.[chunkhash].css',
      chunkFilename: 'css/common.[chunkhash].css'
    }),
  ] : [ new FriendlyErrorsPlugin() ]
}
