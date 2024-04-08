import webpack, { type Configuration } from 'webpack'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: Configuration }) => {
  config.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'))
  config.resolve?.extensions?.push('.ts', '.tsx')
  config.module?.rules?.push(buildCssLoaders(true))
  config?.module?.rules?.forEach(rule => {
    if (!rule || typeof rule !== 'object') return

    if (rule.test instanceof RegExp && rule.test.test('.svg')) {
      rule.exclude = /\.svg$/
    }
  })

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })

  config.plugins?.push(new webpack.DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify('')
  }))

  return config
}
