const express = require('express');
const path = require('path');
const app = express();


app.set('views', __dirname + '/build');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use('/static', express.static(path.resolve(__dirname, './build/static')));

app.use((req, res, next) => {
    console.log(req.url)
    res.render("test.html", {html: "<span>loading</span>"})
})
app.listen(9999, () => {
    console.log("http://localhost:9999")
})