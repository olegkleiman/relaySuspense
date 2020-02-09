var path = require('path');

module.exports = {
    entry: {
        bundle: ['@babel/polyfill', path.resolve(__dirname, './src/index.jsx')],
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: [/node_modules/],
            use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        chunkFilename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true
    },    
    devtool: 'eval-source-map',

}