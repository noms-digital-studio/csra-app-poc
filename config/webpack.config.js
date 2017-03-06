const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
    context: paths.context,
    entry: [
        paths.appIndexJs, 
        paths.appStyle,
        paths.govukTemplate,
        paths.govukFonts,
    ],
    output: {
        path: paths.appBuild,
        filename: 'static/js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.(css|scss)$/,
                    /\.json$/,
                    /\.(jpe?g|png|gif|svg)$/i,
                ],
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['react-app'] }
                }],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer'),
                                        require('cssnano')
                                    ];
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer'),
                                        require('cssnano')
                                    ];
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                includePaths: [
                                    path.join(__dirname, "../node_modules/govuk-elements-sass/public/sass"),
                                    path.join(__dirname, "../node_modules/govuk_frontend_toolkit/stylesheets")
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: "file-loader?name=[name].[hash:8].[ext]&publicPath=public/images/&outputPath=static/images"
            }
        ],
    },
    plugins: [
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new ExtractTextPlugin('static/css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'static/js/vendor.js',
            minChunks: 2,
        }),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        new webpack.NormalModuleReplacementPlugin(
            /^\.\/routes\/Routes$/,
            './routes/RoutesAsync'
        )
    ],
    resolve: {
        modules: [
            paths.context,
            'node_modules'
        ]
    }
};
