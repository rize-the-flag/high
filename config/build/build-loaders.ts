import webpack from "webpack";


export const buildLoaders = (): webpack.RuleSetRule[] => {

  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    tsLoader,
  ]
}
