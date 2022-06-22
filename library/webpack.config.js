const path = require("path");

/** @type{import("webpack").Configuration} */
module.exports = {
  entry: path.resolve("src", "index.js"),
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
    library: {
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: {
    react: "react",
  },
};
