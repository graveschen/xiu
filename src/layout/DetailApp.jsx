import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Detail from '@/pages/Detail';
class Com extends Component {

  render () {
    return (
      <Route path="/detail/:id" component = { Detail } />
    )
  }

}

export default Com
