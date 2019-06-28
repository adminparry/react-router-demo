import React from 'react';
import { StaticRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable';
import NotFound from './NotFound';


const Loading = () => (<div>loading</div>);

const NoFound = Loadable({
    loader: () => import(NotFound) ,
    loading: Loading
})
export default class extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" >
                    <div>home</div>
                </Route>

                <Route exact path="/foo">
                    <div>foo</div>
                </Route>
                <Route exact path="/about">about</Route>

                <Route component={ NotFound } />
            </Switch>
        )
    }
}
