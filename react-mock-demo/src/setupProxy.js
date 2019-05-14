const proxy = require('http-proxy-middleware');
const Mock = require('mockjs');

const NODE_ENV = process.env.NODE_ENV;

module.exports = function(app) {
  if(NODE_ENV != "development")return;
  app.use(proxy('/sugrec', { target	: 'https://www.baidu.com/' , changeOrigin: true}));
  app.use(proxy('/art', { target: 'http://localhost:5500' , changeOrigin: false}));

  app.get("/sugr@mock",(req, res)=>{
  	res.json(Mock.mock({
  		"user|1-10": [{
	      'name': '@cname',
	      'id|+1': 1,
	      'age|10-60': 0,    //10-60以内的随机数，0用来确定类型
	      'birthday': '@date("yyyy-MM-dd")',    //年月日
	      'city': '@city(true)'    //中国城市
	    }],

	    email: 'admin@rap2.com',
	    password: 'admin'
	}))
  })
};