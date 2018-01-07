import React from 'react';
import { IndexRoute, browerHistory } from 'react-router';
import {BrowserRouter, Route, Link } from 'react-browser-router';
import Layout from './layout.react.js';
import Pages from './pages/index.js';

const routes = (
    <BrowserRouter path="/" component={ Layout } >
        <div>
            <IndexRoute component={ Pages.HomePage } />
            <Route path="/about" component={ Pages.AboutPage } />
            <Route path="/contact" component={ Pages.ContactPage } />
        </div>
    </BrowserRouter>
)

export default routes; 