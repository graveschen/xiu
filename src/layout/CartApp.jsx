import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Order from '@/pages/Order'
import Address from '@/pages/Address'
import AddAddress from '@/pages/AddAddress'
import AllList from '@/pages/AllList'
import ListDetail from '@/pages/ListDetail'
import FastOrder from '@/pages/FastOrder'

class CartApp extends Component  {

  render () {
    return (
      <div className="box">
        <div className="container">
          <Switch>
            <Route path='/cartapp/order' component={ Order } />
            <Route path='/cartapp/address' component={ Address } />
            <Route path='/cartapp/addaddress' component={ AddAddress } />
            <Route path='/cartapp/alllist' component={ AllList } />
            <Route path='/cartapp/listdetail' component={ ListDetail } />
            <Route path='/cartapp/fastorder' component={ FastOrder } />
          </Switch>
        </div>
      </div>
    )
  }
}

export default CartApp