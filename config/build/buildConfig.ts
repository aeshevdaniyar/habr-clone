import webpack from 'webpack';
import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import buildPlugins from './buildPlugins';
import { BuildOption } from './types/config';
import buildDevServer from './buildDevServer';

const buildConfig = (options: BuildOption): webpack.Configuration => {
    const { paths, mode, isDev } = options;
    return {
        mode: 'development',
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};

export default buildConfig;