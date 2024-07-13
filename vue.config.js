const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.optimization.minimize(false);
  },
});
