import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as trace_events from "trace_events";


export const buildPlugins = ({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev)
  })
]
