const webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');

const path = require('path');
const entry_path = path.resolve(__dirname, './express');
const output_path = path.resolve(__dirname, 'output');

const {
    ReactLoadablePlugin
} = require('react-loadable/webpack');

var nodeExternals = require('webpack-node-externals');
process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

const config = {
    plugins: [
        new ManifestPlugin(),
        new ReactLoadablePlugin({
            filename: './dist/react-loadable.json',
        }),
    ],
    watch: true,
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },
    entry: {
        entry: entry_path
    },
    output: {
        path: output_path,
        filename: '[name].js'
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            options: {
                presets: ["react-app"],
                plugins: ["react-loadable/babel", "@babel/plugin-syntax-dynamic-import", "transform-es2015-modules-commonjs"],
            }
        }, {
            test: /\.css?$/,
            use: ['isomorphic-style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }]
        }, {
            test: /\.(png|jpeg|jpg|gif|svg)?$/,
            loader: 'url-loader',
            options: {
                limit: 8000,
                outputPath: '../public/',
                publicPath: '/'
            }
        }]
    }
}

const compiler = webpack(config);

/**
 * when you are use webpack 3.x 
 * compiler.apply(new webpack.ProgressPlugin())
 */
new webpack.ProgressPlugin().apply(compiler);
compiler.run((err, stats) => {
    console.log(stats);
});