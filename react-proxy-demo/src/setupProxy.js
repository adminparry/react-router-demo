const proxy = require('http-proxy-middleware');
console.log("regist:proxy")


module.exports = function(app) {
  app.use(proxy('/sugrec', { target	: 'https://www.baidu.com/' , changeOrigin: true}));
  app.use(proxy('/art', { target: 'http://localhost:5500' , changeOrigin: false}));

};