module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  env: {
    dev: {
      presets: ["@vue/app"]
    },
    test: {
      presets: ["@babel/preset-env"]
    }
  }
};
