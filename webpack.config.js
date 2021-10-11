const commWebpackConfig = require('./config/webpack.common')
const devWebpackConfig = require('./config/webpack.dev')
const prodWebpackConfig = require('./config/webpack.prod')
const { merge } = require("webpack-merge");
module.exports = mode => {
    if (mode === "production") {
        return merge(commWebpackConfig,prodWebpackConfig,{mode})
    }
        return merge(commWebpackConfig,devWebpackConfig,{mode}); 
}