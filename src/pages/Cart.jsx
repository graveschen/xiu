import React, { Component } from 'react'
import './CartStyle.scss'
import Cartnull from '@/components/cart/Cartnull'
import Cartfull from '@/components/cart/Cartfull'

class Com extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }
  componentDidMount () {
    let cart = JSON.parse(localStorage.getItem('carts'))
    if (cart !== null) {
      this.setState({
        cart
      })
    }
  }
  emptycart (cart) {
    // console.log(cart)
    this.setState({
      cart
    })
    // console.log(this.state.cart)
  }
  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  }
  render () {
    return (
      <div className="cartbox">
        {this.state.cart.length === 0 ? <Cartnull /> : <Cartfull payempty={this.emptycart.bind(this)} setprop={this.props}/>}
      </div>
    )
  }
}

export default Com