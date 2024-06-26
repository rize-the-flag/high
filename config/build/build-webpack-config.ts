import { type BuildOptions } from './types/config'
import { type Configuration } from 'webpack'
import { buildPlugins } from './build-plugins'
import { buildLoaders } from './build-loaders'
import { buildResolvers } from './build-resolvers'
import { buildDevServer } from './buld-dev-server'

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths: { build, entry }, mode, isDev } = options
  return {
    mode,
    entry,
    output: {
      filename: '[contenthash:8].[name].js',
      path: build,
      clean: true,
      publicPath: '/'
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
