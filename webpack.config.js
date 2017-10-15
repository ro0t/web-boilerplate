const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const settings = {
    title: 'Adams Webpack Boilerplate!',
    filename: 'index.html',
    template: 'src/index.hbs',
    showErrors: true
};

module.exports = {
    entry: ['./src/bootstrap.js','./styles/app.scss'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(settings), new CopyWebpackPlugin([{ from: 'assets/', to: 'assets' }])]
};
