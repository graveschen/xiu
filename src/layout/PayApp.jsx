import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import Cart from '@/pages/Cart'
import User from '@/pages/User'

class App extends Component  {
  constructor (props) {
    super(props)
    this.state = {
      cart: []
    }
  }
  componentDidMount () {
    this.setState({
      cart:  JSON.parse(localStorage.getItem('carts'))
    })
  }
  render () {
    return (
      <div className = "box">
        <div className="container">
          <Switch>
            <Route path='/cart' component={ Cart } />
            <Route path='/user' component={ User } />
          </Switch>
        </div>
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