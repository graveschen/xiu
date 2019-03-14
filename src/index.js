import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './layout/App';
import UserApp from '@/layout/UserApp';
import DetailApp from '@/layout/DetailApp';
import SearchApp from '@/layout/SearchApp';
import CartApp from '@/layout/CartApp.jsx';
import PayApp from '@/layout/PayApp.jsx';
import * as serviceWorker from './serviceWorker';
import './main.scss';
import 'antd-mobile/dist/antd-mobile.css'; 
import store from './store'

function renderFn() {
  ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/search" component = { SearchApp } />
        <Route path="/detail" component = { DetailApp } />
        <Route path="/userapp" component = { UserApp} />
        <Route path='/cartapp' component = { CartApp } /> 
        <Route path='/cart' component = { PayApp } />
        <Route path="/" component = { App } />
      </Switch>
    </Router>,
    document.getElementById('root'));
}

renderFn();

store.subscribe(renderFn);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
