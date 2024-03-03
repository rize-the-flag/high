import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";


export const buildLoaders = (option: BuildOptions): webpack.RuleSetRule[] => {

  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoaders: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: option.isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        },
      },
      "sass-loader",
    ]
  }

  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [{loader: 'file-loader'}],
  }

  return [
    fileLoader,
    svgLoader,
    tsLoader,
    cssLoaders
  ]
}
