var path = require('path');
var webpack = require('webpack');


module.exports = {
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, "src"),
          ],
          loader: "babel-loader",
          query: {
            presets: ["es2015", "react"]
          }
        }
      ]
    }
};
