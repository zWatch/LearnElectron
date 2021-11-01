module.exports = [
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      // options: {
      //   presets: ["@babel/react"],
      //   plugins: [
      //     ["import",
      //       { libraryName: "antd", libraryDirectory: "es", style: "true" }
      //     ]
      //   ]
      // }
  }
  },
  {
    test: /\.m?js/,
    resolve: {
        fullySpecified: false
    }
  },
  {
    test:/\.css$/,
    use:[
      'style-loader',
      'css-loader',
      // 'less-loader'
    ]
  }
]