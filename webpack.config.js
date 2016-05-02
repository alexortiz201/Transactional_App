var webpack = require('webpack');

var config = {
    entry: [
      'webpack/hot/only-dev-server',
      './project/app.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ],

        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    // https://github.com/babel/babel-loader#options
                    cacheDirectory: true,
                    presets: ['es2015', 'babel-preset-stage-0', 'react']
                }
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devServer: {
        port: 9000,
        // https://github.com/rackt/react-router/issues/676
        // this fixes routing in newer versions
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
