import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './Loading';

const NoFound = Loadable({
  loader: () => import(/* webpackChunkName:"NotFound" */'./NotFound'),
  loading: Loading
})
const Home = Loadable({
  loader: () => import(/* webpackChunkName:"Home" */'../components/home'),
  loading: Loading
})
const Foo = Loadable({
  loader: () => import(/* webpackChunkName:"Foo" */'../components/foo'),
  loading: Loading
})
const About = Loadable({
  loader: () => import(/* webpackChunkName:"About" */'../components/about'),
  loading: Loading
})

const Routers = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={ Home } ></Route>

          <Route exact path="/foo" component={ Foo } />
          <Route exact path="/about" component={ About } />
          
          <Route component={NoFound} />
        </Switch>
    </Router>
  );
}

export default Routers;