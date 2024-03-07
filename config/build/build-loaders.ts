import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoaders: webpack.RuleSetRule = buildCssLoaders(options.isDev)

  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [{ loader: 'file-loader' }]
  }

  return [
    fileLoader,
    svgLoader,
    tsLoader,
    cssLoaders
  ]
}
