const path = require("path");
 
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  transpileDependencies: ['uview-ui'],
  configureWebpack: {
    resolve: {
      alias: {
		"@": resolve("/"),
        "@api": resolve("/js/api"),
      },
    },
  },
};