const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    entry: ['./src/index.jsx', './src/scss/style.scss'],
    output: {
        filename: 'app.js',
        path: __dirname + '/public'
    },
    plugins: [
      HTMLWebpackPluginConfig,
      new webpack.optimize.AggressiveMergingPlugin()
    ],
    devtool: 'source-map',
    resolve:{
      extensions: ['.js', '.jsx'],
      alias: {
        modules: __dirname + '/node_modules'
      }
    },

    module: {
      rules: [
            {
                test: /\.(png|svg|jpg|gif|mp4|ico)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                  }
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                  }
                }
            },
            {
              test: /\.js[x]$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  query:{
                    presets: ['es2015', 'react', 'stage-3'],
                    plugins:['transform-object-rest-spread']
                  }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
      ],
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000
    },

};