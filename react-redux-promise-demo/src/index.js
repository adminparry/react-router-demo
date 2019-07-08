import React from 'react';
import ReactDOM from 'react-dom';


import Routers from './Router';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { store } from "./reducers";


const rootEl = document.getElementById('root');

ReactDOM.render(<Provider store={store}><Routers /></Provider>, rootEl);

if (module.hot) {

  module.hot.accept("./Router", () => {

    ReactDOM.render(<Provider store={store}><Routers /></Provider>, rootEl);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
