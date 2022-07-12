const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, 'index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, './dist'),
        },
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

    module: {
        rules: [
            // CSS, PostCSS, Sass
            // {
            //     test: /\.(scss|css)$/,
            //     use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            // },

            {
                test: /\.(?:|woff)$/,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: `fonts/[name].[ext]`,
                        publicPath: "../",
                      }
                    }
                  ]
            },
            //SVG
            {
                test: /\.svg$/,
                type: 'asset/resource',
                        generator : {
                  filename : 'assets/svg/[name][ext][query]',
                }
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator : {
                    filename : 'assets/images/[name][ext][query]',
                  }
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader', 'astroturf/loader'],
            },


            {
              test: /\.css$/i,
              use: [
                "style-loader",
                {
                  loader: "css-loader",
                  options: { importLoaders: 1 },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: [
                        [
                          "postcss-custom-media",
                          {
                            // Options
                          },
                          "postcssNormalize",
                        ],
                      ],
                    },
                  },
                },
              ],
            },
        ],
    },
}