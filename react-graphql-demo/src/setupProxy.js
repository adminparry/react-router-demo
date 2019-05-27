const proxy = require('http-proxy-middleware');
console.log("regist:proxy")


module.exports = function(app) {
  app.use(proxy('/baidu', { target	: 'https://www.baidu.com/' , changeOrigin: true}));
  app.use(proxy('/graphql', { target: 'http://localhost:3000' , changeOrigin: false}));
  app.use(proxy('/sugrec', { target: 'http://localhost:3000' , changeOrigin: false}));
  app.use(proxy('/user', { target: 'http://localhost:3000' , changeOrigin: false}));

};