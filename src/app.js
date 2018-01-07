import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { BrowserRouter, Route, Link, Switch } from 'react-browser-router'
import routes from './routes.js';
import Pages from './pages';

const App = ({
    test
}) => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Link to="/">Home</Link>
                    {' '}
                    <Link to="/about">About</Link>
                    {' '}
                    <Link to="/contact">Contact</Link>

                    <Switch>
                        <Route exact path="/" component={ Pages.HomePage } /> 
                        <Route path="/about" component={ Pages.AboutPage } />
                        <Route path="/contact" component={ Pages.ContactPage } />
                    </Switch>

                </div>
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)