const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolvePath = relativePath => path.resolve(__dirname, relativePath)
const babelConfig = {
  cacheDirectory: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'not ie 11'],
        },
      },
    ],
    '@babel/preset-typescript',
  ]
};
module.exports = {
  entry: resolvePath('src/index.tsx'),
  output: {
    path:resolvePath('build'),
    clean:true
  },
  module: {
   rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          },
        ],
       type: 'javascript/auto'
      },
      {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: babelConfig,
            },
            {
              loader: 'ts-loader',
            },
          ],
      },
      {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer'],
                },
                sourceMap: true,
              },
            },
          ],
      },
      {
          test: /\.less$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer'],
                },
                sourceMap: true,
              },
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  sourceMap: true,
                  javascriptEnabled: true,
                },
              },
            },
          ],
      }
   ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      Object.assign({}, {
        inject: true,
        template: resolvePath('public/index.html')
      })
    )
  ]
}