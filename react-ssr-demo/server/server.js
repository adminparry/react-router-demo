
import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import buildPath from '../build/asset-manifest.json';
// import { Switcher } from '../src/routers'
import Switcher from './testComponent';

import express from 'express';
import * as path from 'path';

const app = express();
app.use(express.static(path.resolve('build')))

// 映射到build后的路径
//设置build以后的文件路径 项目上线用
app.use((req, res, next) => {
    if (req.url.indexOf('favicon.ico') > -1) return;
    const context = {};

    const frontComponents = renderToString(
        (
            <StaticRouter
                location={req.url}
                context={context}>
                <Switcher />
            </StaticRouter>
        )
    )

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="theme-color" content="#000001">
            <link rel="stylesheet" type="text/css" href="${buildPath.files['main.css']}">
            <meta name="keywords" content="seo、seo、seo、seo，搜到我吧!">
            <meta name="author" content="你的大名">
        </head>
        <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
            ${frontComponents}
        </div>
            </body>
    </html>
    `)
    // return res.sendFile(path.resolve('build/index.html'))
})


app.listen("9000", function () {
    console.log("open Browser http://localhost:9000");
});