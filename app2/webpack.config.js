const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");
const dep = require("app1/package.json");

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3002,
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
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app2",
            library: {type: "var", name: "app2"},
            filename: "remoteEntry.js",
            exposes: {
                "./Button": "./src/Button",
            },
            shared: {
                "@datadog/browser-rum": {singleton: true,requiredVersion: dep["@datadog/browser-rum"]},
                react: {singleton: true, requiredVersion: dep.react},
                "react-dom": {singleton: true, requiredVersion: dep['react-dom']}
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};

