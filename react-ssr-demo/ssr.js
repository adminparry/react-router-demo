const express = require('express');
const path = require('path');

import React from 'react';
import ReactDOM from 'react-dom';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
// const Routers = require('./src/routers');

const app = express();

app.use((req, res, next) => {
    const context = {}
    // const reactComponent = null;
    const reactComponent = renderToString(
        <StaticRouter
            location={req.url}
            context={context}>
            <Routers />
        </StaticRouter>
    );
    // 新建骨架
    const _frontHtml = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="theme-color" content="#000000">
            <title>人才市场</title>
        </head>
        <body>
            <noscript>
            You need to enable JavaScript to run this app.
            </noscript>
            <div id="root">${reactComponent}</div>
        </body>
    </html>`
    res.send(_frontHtml)
})
app.use('/', express.static(path.resolve('build')));

app.listen(9090, () => {
    console.log("http://127.0.0.1:9090")
})