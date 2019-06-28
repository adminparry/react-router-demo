require('babel-polyfill');

// 处理css
const hook = require('css-modules-require-hook');
 
hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});
// 处理图片
require('asset-require-hook')({
    extensions: []
})
require("babel-register");
require('./server.js');