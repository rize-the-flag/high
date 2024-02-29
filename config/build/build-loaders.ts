import webpack from "webpack";


export const buildLoaders = (): webpack.RuleSetRule[] => {

  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoaders:webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader",
    ]
  }

  return [
    tsLoader,
    cssLoaders
  ]
}
