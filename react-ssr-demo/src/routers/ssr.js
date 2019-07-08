import React from 'react';

import { StaticRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import Home from '../components/home';
import Foo from '../components/foo';
import About from '../components/about';


export const Switcher = () => (
    <Switch>
        <Route exact path="/" component={Home} ></Route>

        <Route exact path="/foo" component={Foo} />
        <Route exact path="/about" component={About} />

        <Route component={NotFound} />
    </Switch>
)
export class Routers extends React.Component {

    render() {
        const { location, context } = this.props;
        return (
            <Router location={location} context={context}>
                <Switcher />
            </Router>
        )
    }
}