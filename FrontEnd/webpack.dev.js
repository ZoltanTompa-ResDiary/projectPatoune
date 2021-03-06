const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: '[name].[contentHash].js',
        path: path.resolve(__dirname, "build-test"),
        publicPath: ''
    },
    devServer: {
        contentBase: './build-test/',
        historyApiFallback: true
    },
    module: {
        rules: [
            //this is overwritten now by common, to alway generate file

            //this way css is injected in as JS, not a separate file
            /*
            {
                test: /\.scss$/,
                use: [  //the order is IMPORTANT here
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            }
            */
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/htmlTemplate.html',
            chunks: ['mainz']
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/htmlTemplate.html',
            chunks: ['login']
        })
    ]
});