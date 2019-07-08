
import express from 'express';
import * as path from 'path';
import { Routers } from './src/routers/ssr';
import React from 'react';
import { port } from './entry/port';

const app = express();

app.set('views',path.resolve(__dirname , './build'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use('/static', express.static(path.resolve(__dirname, './build/static')));


const { renderToString } = require('react-dom/server');

app.use((req, res, next) => {

    if('/favicon.ico' == req.url){
        res.sendFile(path.resolve(__dirname, './build/favicon.ico'));
        return;
    }
    if('/manifest.json' == req.url){
        res.sendFile(path.resolve(__dirname, './build/manifest.json'));
        return;
    }
    if('/service-worker.js' == req.url){
        res.sendFile(path.resolve(__dirname, './build/service-worker.js'));
        return;
    }
    
    const context = {};
    const author = "parry";
    const keywords = "关键字 ssr react"
    const description = "服务端渲染 react ssr"
    const html = renderToString(<Routers location={req.url} context={context} />);
    res.render("index.html", {html,keywords,description,author})
})

app.listen(port, () => {
    console.log("http://localhost:%s", port)
})