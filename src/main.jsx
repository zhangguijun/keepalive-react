import React from "react";

import ReactDOM from "react-dom";

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

// import { KeepAliveProvider, withKeepAlive } from 'keepalive-react-component'
import { KeepAliveProvider, withKeepAlive } from './keepalive-react/index'

import Home from './components/Home';
import List from './components/List';
import Add from './components/Add';
let KeepAliveHome = withKeepAlive(Home, {
  cacheId: 'home'
});
let KeepAliveList = withKeepAlive(List, {
  cacheId: 'list',
  scroll: true
});
let KeepAliveAdd = withKeepAlive(Add, {
  cacheId: 'add'
});

const App = () => {
  return (
    <BrowserRouter>
      <KeepAliveProvider>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">用户列表</Link></li>
          <li><Link to="/add">添加用户</Link></li>
        </ul>
        <Switch>
          <Route path="/" component={KeepAliveHome} exact></Route>
          <Route path="/list" component={KeepAliveList}></Route>
          <Route path="/add" component={KeepAliveAdd}></Route>
        </Switch>
      </KeepAliveProvider>
    </BrowserRouter>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))