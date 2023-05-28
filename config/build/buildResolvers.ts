import webpack from 'webpack';
import { BuildOption } from './types/config';

const buildResolvers = (options:BuildOption):webpack.ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index'],
});

export default buildResolvers;
