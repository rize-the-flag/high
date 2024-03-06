import webpack from "webpack";
import path from "path";
import {buildCssLoaders} from "../build/loaders/buildCssLoaders";

export default ({config}: { config: webpack.Configuration }) => {
  config?.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'))
  config?.resolve?.extensions?.push('.ts', '.tsx')
  config?.module?.rules?.push(buildCssLoaders(true))
  return config;
}
