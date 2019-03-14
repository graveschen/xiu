import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
class Com extends Component {

  render () {
    return (
      <div className = "box">
        <Switch>
          <Route path='/userapp/register' component = { Register }/>
          <Route path='/userapp/login' component = { Login }/>
        </Switch>
      </div>
    )
  }

}

export default Com
