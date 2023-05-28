import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOption } from './types/config';
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

const buildPlugins = ({ paths, isDev }:BuildOption):webpack.WebpackPluginInstance[] => {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin(
            {
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            },
        ),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.ProgressPlugin(),
    ]
    if(isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }
    return  plugins
};

export default buildPlugins;
