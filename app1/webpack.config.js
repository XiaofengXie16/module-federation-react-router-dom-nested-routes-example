const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("./ExternalTemplateRemotesPlugin");
const path = require("path");
const dep = require('./package.json')

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3001,
    },
    output: {
        publicPath: "auto",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app1",
            remotes: {
                app2: "app2@[app2Url]/remoteEntry.js",
            },
            shared: {
                react: {singleton: true, requiredVersion: dep.react},
                "react-dom": {singleton: true, requiredVersion: dep['react-dom']},
                "@datadog/browser-rum": {singleton: true,requiredVersion: dep["@datadog/browser-rum"]},
            },
        }),
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};

