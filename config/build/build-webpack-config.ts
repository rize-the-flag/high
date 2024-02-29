import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import {buildPlugins} from "./build-plugins";
import {buildLoaders} from "./build-loaders";
import {buildResolvers} from "./build-resolvers";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const {paths: {build, entry, html}, mode} = options;
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
  }
}
