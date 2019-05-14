const http = require("http");
const url = require("url");


const app = http.createServer((req, res)=>{
	const { pathname } = url.parse(req.url);

	if(pathname == "/art"){
		res.end(JSON.stringify({status:999, detail:"test proxy result"}))
	}else{
		res.end(JSON.stringify({status:666}))
	}
})

app.listen(5500,() => {
	console.log("this server running at %s", 5500)
});

