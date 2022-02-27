const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");
const dep = require("app1/package.json");

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        port: 3002,
    },
    output: {
        publicPath: "http://localhost:3002/app-2/",
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
                "./AppRoutes": "./src/AppRoutes.js",
            },
            shared: {
                "react-router-dom":{singleton:true, requiredVersion: dep['react-router-dom']},
                react: {singleton: true, requiredVersion: dep.react},
                "react-dom": {singleton: true, requiredVersion: dep['react-dom']}
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};

