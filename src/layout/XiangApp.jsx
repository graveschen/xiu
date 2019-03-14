import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Xiang from '@/pages/Xiang';
class Com extends Component {

  render () {
    return (
      <Route path="/xiang:id" component = { Xiang } />
    )
  }

}

export default Com
