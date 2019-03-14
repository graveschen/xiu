import React, { Component } from 'react';
import api from '@/api/detail';
import { Link } from 'react-router-dom';
// import "../components/detail/index.scss"
import { Toast } from 'antd-mobile';

class Com extends Component {
  constructor (props) {
    super(props)   
    this.state = {
      name: '',
      list: [],
      id: '',
      cart: []
    }
  }
  componentDidMount () {
    const id = this.props.match.params.id
    // console.log(id)
    api.requestData(id).then(data => {
      console.log(data)
        this.setState({
          list: data.data,
          id
        })
        // console.log(this.state.list)
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
        cart
      })
      localStorage.setItem('carts',JSON.stringify(this.state.cart))
      Toast.success('加入购物车成功', 1);
    })
  }
  render () {
    let listarr = this.state.list;
    let Html = [];

    if( listarr.length === 0 ){
      Html = <li>正在加载中...</li>
    } else {
    listarr.slice(0,1).map((item, index) => {
      console.log(item)
      Html.push(
        <li key = { index }>
          <img src={ item.imgUrl } alt=""/>
          <span className="brank">品牌： { item.brandEnName }</span>
          <span className="name">{ item.name }</span>
          <h4>[一口价]</h4>
          <p className="te">限时特卖:￥<span> { item.xiuPrice } </span></p>
          <b>发货地：国内 起送时间：预计3-7个工作日送达</b>
        </li>
        )
      })
    }

    return (
      <div className = "box">
        <div className = "content">
         <ul className = "a">
           <li className="left"><Link to="/home">
            <span className="iconfont icon-fanhui2"></span>
           </Link></li>
           <li className="center"><span>商品</span><Link to="/xiang">详情</Link></li>
           <li className="right"> <Link to="/cart">
            <span className="iconfont icon-gouwuchekong"></span>
           </Link></li>
           { Html }
           </ul>
        </div>
        <footer className = "footer">
          <ul className="style">
          <li className = "fu">
            <span className="iconfont icon-kefu"></span>
            <p>客服</p>
            </li>
            <li className = "cang">
            <span className="iconfont icon-shoucang"></span>
            <p>收藏</p>
            </li>
            <li className="ru">
              <button onClick={this.storeItem.bind(this)}>加入购物袋</button>
              </li>
              <li className="ji">
              <button>立即购买</button>
              </li>
            </ul>
        </footer>
      </div>
    )
}
}
export default Com
