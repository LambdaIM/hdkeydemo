const TerserPlugin = require('terser-webpack-plugin');


const config = {
  devtool: "cheap-source-map",
  target: 'web',
  entry: ['./index.js'],
  output: {
    path: __dirname + '/',
    filename: './browser.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: "lambdaHdkey", // string,
  },
  optimization: {
    minimize: false,
    minimizer: [
        new TerserPlugin({
            // 将多线程关闭
            parallel: false
        })
      ],
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}
module.exports = [config];