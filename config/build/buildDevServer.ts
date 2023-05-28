import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOption } from './types/config';

const buildDevServer = (options:BuildOption):DevServerConfiguration => ({
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
});

export default buildDevServer;
