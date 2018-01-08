import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Hello from './Hello.js';

function handleRender(req, res) {
    const html = ReactDOMServer.renderToString(<Hello />);

    fs.readFile('./index.html', 'utf8', function (err, data) {
        if (err) throw err;

        const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);

        res.send(document);
    });
}

const app = express();

// Serve built files with static files middleware
app.use('/build', express.static(path.join(__dirname, 'build')));

// Serve requests with our handleRender function
app.get('*', handleRender);

// Start server
app.listen(3000);

// 1. app.listen prepares the server to receive requests
// 2. the requests comes in and app.get calls the handlerender() function
// 3. handleRender() calls ReactDOMServers method renderToString( app component ) and save to html variable
// 4. fs.readFile reads the index.html file from the same directory and sends the client an updated document variable, 
//    which is really just a text string of the new DOM