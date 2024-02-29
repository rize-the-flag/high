import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import {buildPlugins} from "./build-plugins";
import {buildLoaders} from "./build-loaders";
import {buildResolvers} from "./build-resolvers";
import {buildDevServer} from "./buld-dev-server";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const {paths: {build, entry, html}, mode, isDev} = options;
  return  {
    mode,
    entry,
    output: {
      filename: "[contenthash].[name].js",
      path: build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
