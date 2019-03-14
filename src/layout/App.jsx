import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/pages/Home';
import Kind from '@/pages/Kind';
import Cart from '@/pages/Cart';
import User from '@/pages/User';
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/kind',
    component: Kind
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  }
]
class App extends Component {

  render () {
    return (
      <div className = "box">
        {/* <header className = "header">头部</header> */}
        <Switch>
          {/* <Route path="/home" component = { Home } />
          <Route path="/kind" component = { Kind } />
          <Route path="/cart" component = { Cart } />
          <Route path="/user" component = { User } /> */}
          {
            routes.map((item, index) => {
              return (
                <Route key={ index } path={ item.path } component = { item.component }  />
              )
            })
          }
          <Redirect path="/" to="/home" />
        </Switch>
        <footer className = "footer">
          <ul>
            <NavLink to='/home'>
              <span className="iconfont icon-shouye"></span>
              <p>首页</p>
            </NavLink>
            <NavLink to="/kind">
              <span className="iconfont icon-fenlei"></span>
              <p>分类</p>
            </NavLink>
            <NavLink to="/cart">
              <span className="iconfont icon-gouwudai"></span>
              <p>购物袋</p>
            </NavLink>
            <NavLink to="/user">
              <span className="iconfont icon-wode"></span>
              <p>我的</p>
            </NavLink>
          </ul>
        </footer>
      </div>
    )
  }

}

export default App
