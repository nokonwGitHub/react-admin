const {whenProd} = require("@craco/craco");
const path = require("path");


whenProd(() => {
    process.env.GENERATE_SOURCEMAP = "false";
});

module.exports = {
    plugins: [
        {
            plugin: require('craco-less'),
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {'@primary-color': '#1DA57A'},
                        javascriptEnabled: true,
                    },
                },
            },
        }
    ],
    babel: {
        plugins: [...whenProd(() => ["transform-remove-console"], [])]
    },
    webpack: {
        alias: {
            "@": path.join(__dirname, "../src"),
            "views": path.join(__dirname, "../src/views")
        },
        configure: (webpackConfig) => {
            whenProd(function () {
                webpackConfig.devtool = "none";
                const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");
                webpackConfig.plugins.push(new BundleAnalyzerPlugin());
                webpackConfig.optimization.splitChunks = {
                    cacheGroups: {
                        commons: {
                            chunks: 'initial',
                            minChunks: 2, maxInitialRequests: 5,
                            minSize: 0
                        },
                        vendor: {
                            test: /node_modules/,
                            chunks: 'initial',
                            name: 'vendor',
                            priority: 10,
                            enforce: true
                        }
                    }
                }
            });
            return webpackConfig;
        }
    },
};
