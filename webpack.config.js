
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    mode: isProduction ? "production" : "development",
    entry: "./client/src/index.js",
    output: {
        path: path.resolve(__dirname, "static"),
        filename: "main.js",
    },
    plugins: [
        new MiniCssExtractPlugin(), // Add MiniCssExtractPlugin for extracting CSS
    ],
    optimization: {
        minimize: isProduction, // Enable minimize only in production
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
        ],
    },
};

module.exports = config;
