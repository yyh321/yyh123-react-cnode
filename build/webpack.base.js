const path = require('path')

module.exports = {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/' // public后面一定记住加/,否则会影响热更新
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, '../node_modules'),
        loader: 'babel-loader'
      }
    ]
  }
}
