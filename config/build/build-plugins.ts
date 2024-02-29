import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";
import {BuildOptions} from "./types/config";


export const buildPlugins = ({paths}: BuildOptions): webpack.WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new webpack.ProgressPlugin(),
]
