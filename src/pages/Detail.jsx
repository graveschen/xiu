import React, { Component } from 'react';
import api from '@/api/detail';
import './DetailStyle.scss'
import { Toast } from 'antd-mobile';
import { NavLink } from 'react-router-dom'

class Com extends Component {
  constructor (props) {
    super(props)   
    this.state = {
      name: '',
      list: [],
      id: '',
      cart: [],
      info: {}
    }
  }
  componentDidMount () {
    const id = this.props.match.params.id
    // console.log(id)
    api.requestData(id).then(data => {
      console.log(data.data)
      let info = {
        id: data.data[0].id,
        brandEnName:  data.data[0].brandEnName,
        num: 1,
        name: data.data[0].name,
        price: data.data[0].xiuPrice,
        img:  data.data[0].imgUrl
      }
      this.setState({
        list: data.data,
        id,
        info
      })
      // console.log(this.state.list[0])
    })
  }
  storeItem () {
    api.requestDetailData(this.state.id).then(data => {
      // console.log(data.data[0])
      let cart = JSON.parse(localStorage.getItem('carts'))
      // console.log(typeof cart)
      let info = {
        id: data.data[0].id,
        brandEnName:  data.data[0].brandEnName,
        num: 1,
        name: data.data[0].name,
        price: data.data[0].xiuPrice,
        img:  data.data[0].imgUrl
      }
      // console.log(cart)
      if (!cart || cart.length === 0) {
        cart = []
        cart.push(info)
      } else {
        for(let i=0; i<cart.length; i++) {
          // console.log(cart[i])
          if (cart[i].id === this.state.id) {
            // console.log(cart[i].num)
            cart[i].num++
            break
          } else {
            if (i === cart.length-1) {
              cart.push(info)
              break  // 一定要break跳出循环，否则cart加长，继续遍历，会导致第一次增加产品，num直接为2
            }
          }
        }
      }
      this.setState({
        cart,
        info
      })
      localStorage.setItem('carts',JSON.stringify(this.state.cart))
      Toast.success('加入购物袋成功', 1);
    })
  }
  goback () {
    this.props.history.go(-1)
  }
  fastpay () {
    let login = localStorage.getItem('login')
    if (login) {
      localStorage.setItem('fastlist', JSON.stringify(this.state.info))
      this.props.history.push('/cartapp/fastorder')
    } else {
      this.props.history.push('/userapp/login')
    }
  }
  render () {
    let list = this.state.list[0] ? this.state.list[0] : ''
    return (
    <div className="detailbox">
      <div className="headdetial">
        <ul className="leftbox">
          <li onClick={ this.goback.bind(this) }>
            <span className="iconfont icon-fanhui"></span>
          </li>
        </ul>
        <ul className="rightbox">
          <NavLink to='/home'>
            <span className="iconfont icon-shouye"></span>
          </NavLink>
          <NavLink to='/cart'>
            <span className="iconfont icon-gouwudai"></span>
          </NavLink>
        </ul>
      </div>
      <div className="detail">
        <img src={list.imgUrl} alt="" />
        <div className="info">
          <h4 className="brand">{list.brandEnName}</h4>
          <p className="title">{list.name}</p>
          <p className="sale">[ {list.namePre} ]</p>
          <p className="price">￥ {list.xiuPrice}</p>
          <ul className="tips">
            <li>
              <span className="iconfont icon-duihao1"></span>
              <p>14天退换</p>
            </li>
            <li>
              <span className="iconfont icon-duihao1"></span>
              <p>走秀自营</p>
            </li>
            <li>
              <span className="iconfont icon-duihao1"></span>
              <p>不可用红包</p>
            </li>
          </ul>
        </div>
      </div>
      <footer className="detailfoot">
        <ul>
          <li>
            <span className="iconfont icon-kefu"></span>
            <p>客服</p>
          </li>
          <li>
            <span className="iconfont icon-shoucang"></span>
            <p>收藏</p>
          </li>
        </ul>
        <div className="cart" onClick={this.storeItem.bind(this)}>
          <span className="iconfont icon-gouwuche" ></span>
          <p>加入购物袋</p>
        </div>
        <div className="fastcart" onClick={this.fastpay.bind(this)}>
          <span className="iconfont icon-gouwuche"></span>
          <p>立即购买</p>
        </div>
      </footer>
    </div>
    )
}
}
export default Com
