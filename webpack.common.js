//basic vars
const path = require('path');
const webpack = require('webpack');

//additional plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');


//module settings
module.exports = {

    //entry js
    entry: {
        //main file of app
        app: './src/js/app.js'
    },

    //path for files
    output: {
        filename: 'scripts/[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            //php
            {
                test: /\.php$/,
                loaders: [
                    'html-minify',
                    'php-loader'
                ]
            },
            //styles
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true}
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {sourceMap: true}
                        }
                    ],
                    fallback: 'style-loader',
                }),
            },
            //image
            {
                test: /\.(jpe?g|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        fallback: 'file-loader',
                        name: '[name].[ext]',
                        publicPath: '../img/',
                        outputPath: './img/'
                    }
                }
            },
            //fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '../fonts/',
                            outputPath: './fonts/'
                        }
                    },
                ]
            },
            //svg converter
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
            },
            //lints
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    // eslint options (if necessary)
                }
            },
            // {
            //     test: /(htm|html|xhtml|hbs|handlebars|php|ejs)$/,
            //     loader: 'htmllint-loader',
            //     exclude: /(node_modules)/,
            // },
        ],
    },
    plugins: [
        new ExtractTextPlugin(
            './css/[name].css'
        ),
        new webpack.ProvidePlugin({
            moment: "moment",
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new StyleLintPlugin({
            context: "src",
            configFile: '.stylelintrc',
            files: '**/*.scss',
            syntax: 'scss',
            fix: true
        }),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: 'app/services.html',
            filename: 'services.html',
        }),
        new HtmlWebpackPlugin({
            template: 'app/portfolio.html',
            filename: 'portfolio.html',
        }),
        new HtmlWebpackPlugin({
            template: 'app/aboutus.html',
            filename: 'aboutus.html',
        }),
        new HtmlWebpackPlugin({
            template: 'app/contact.html',
            filename: 'contact.html',
        }),
        // new StyleLintPlugin({ configFile: '.stylelintrc', syntax: 'scss', }),
    ],
};
