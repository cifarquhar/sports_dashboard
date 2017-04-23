config = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
    // path: "./build"
  },
  devtool: 'source-map'
}

module.exports = config