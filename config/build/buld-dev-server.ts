import { type BuildOptions } from './types/config'
import { type Configuration } from 'webpack-dev-server'

export const buildDevServer = (options: BuildOptions): Configuration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
