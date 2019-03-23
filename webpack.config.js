const path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'main.js'
  },
  watch: true,
  resolve: {
    extensions: [' ','.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        //use: {
          //loader: 'babel-loader',
        //},
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react", {
            'plugins': ['@babel/plugin-proposal-class-properties']
          }]
        }
      },
    ]
  }
}
