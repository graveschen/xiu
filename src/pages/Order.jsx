import React, { Component } from 'react'
import { InputItem, Button, Toast } from 'antd-mobile'
import { Accordion, List } from 'antd-mobile'
import { NavLink } from 'react-router-dom'
import './OrderStyle.scss'

class Com extends Component  {
  constructor (props) {
    super(props)
    this.state = {
      orderlist: [],
      payname: '支付宝支付',
      totalmoney: 0,
      num: 0,
      cart: [],
      alllist: []
    }
  }
  componentDidMount () {
    let orderlist =JSON.parse(localStorage.getItem('orderlist'))
    let cart = JSON.parse(localStorage.getItem('carts'))
    let alllist = JSON.parse(localStorage.getItem('alllist'))
    if (alllist !== null) {
      this.setState({
        alllist
      })
    }
    let totalmoney = 0
    let num = 0
    orderlist.map((item, index) => {
      totalmoney += item.num * item.price
      num += item.num
      return ''
    })
    this.setState({
      orderlist,
      totalmoney,
      num,
      cart
    })
  }
  goaddress () {
    localStorage.setItem('listpath', this.props.match.path)
    this.props.history.push('/cartapp/address')
  }
  select (e) {
    //错误示范，ui库有问题
    // let arrays = document.getElementsByClassName('am-checkbox')
    // for (let i=0; i<arrays.length; i++) {
    //   arrays[i].className = 'am-checkbox'
    // }
    // let payname = e.target.parentNode.parentNode.parentNode.parentNode.previousElementSibling.innerText
    // this.setState({
    //   payname
    // })
    // console.log(e.target.checked)
    let arrays = document.getElementsByTagName('input')
    for (let i=0; i<arrays.length; i++) {
      arrays[i].checked = false
    }
    e.target.checked = true
    let payname = e.target.parentNode.previousElementSibling.innerText
    this.setState({
      payname
    })

  }
  paymoney () {
    // console.log(this.state.orderlist)
    let defaultaddress = JSON.parse(localStorage.getItem('defaultaddress'))
    if (defaultaddress === null) {
      Toast.fail('请填写收货地址', 1);
    } else {
      let myDate = new Date();
      let orderlist = this.state.orderlist
      let cart = this.state.cart
      for (let i=0; i<this.state.cart.length; i++) {
        for(let j=0; j<orderlist.length; j++) {
          if (this.state.cart[i].id === orderlist[j].id) {
            cart.splice(i, 1)
          }
          orderlist[j].listnumber = myDate.getTime()
          orderlist[j].method = this.state.payname
          orderlist[j].paytime = myDate.toLocaleString()
        }
      }
      let alllist = this.state.alllist
      alllist.push(orderlist)
      console.log(orderlist)
      this.setState({
        cart,
        alllist
      })
      localStorage.setItem('carts',JSON.stringify(this.state.cart))
      Toast.success('支付成功', 1);
      localStorage.setItem('alllist',JSON.stringify(alllist))
      this.props.history.push('/cart')
    }
  }
  render () {
    let defaultaddress = JSON.parse(localStorage.getItem('defaultaddress'))
    if (defaultaddress === null) {
      defaultaddress = []
    }
    let addressinfo = (
      <ul className="addressinfo">
        <li>
          <div className="nameinfo">
            <p className="name">{defaultaddress.receiver}</p>
            <p className="phone">{defaultaddress.tel}</p>
          </div>
          <div className="location">{defaultaddress.location}</div>
          <div className="detail">{defaultaddress.detail}</div>
        </li>
      </ul>
    )
    return (
      <div className = "orderbox">
        <div className="orderhead">
          <NavLink className="iconfont icon-fanhui" to='/cart'></NavLink>
          <p>确认订单</p>
        </div>
        <div className="ordercontent">
          <div className="orderimg">
            <ul>
              {
                this.state.orderlist.map((item, index) => {
                return (
                  <li key={item.id}>
                    <img src={item.img} alt=""/>
                  </li>
                  )
                })
              }
            </ul>
            <div className="ordernum">
              <p>共{this.state.num}件商品</p>
              <span className="iconfont icon-fanhui1"></span>
            </div>
          </div>
          <div className="address">
              {
               defaultaddress.length === 0 ? <p className="write">请填写收货地址</p>: addressinfo
              }
              <span className="iconfont icon-fanhui1" onClick={this.goaddress.bind(this)}></span>
          </div>
          <div className="note">
            <InputItem placeholder="买家留言，可不填" clear></InputItem>
          </div>
          <div className="discount common">
              <p>使用优惠</p>
              <span className="iconfont icon-fanhui1"></span>
          </div>
          <div className="infolist">
              <p>商品总金额： ￥{this.state.totalmoney}</p>
              <p>运费： 免运费</p>
              <p>优惠金额： ￥0</p>
              <p>虚拟账户支付： ￥0</p>
              <p>还需支付： 
                <span>￥{this.state.totalmoney}</span>
              </p>
          </div>
          <Accordion>
            <Accordion.Panel header= {`支付方式 (${this.state.payname} )`}>
              <List className="paylist">
                <List.Item>
                  <span className="iconfont icon-apple-pay" style={{color: '#464646'}}></span>
                  <p>Apple pay</p>
                  <label className="checkBox"><input type="checkbox"  onClick={this.select.bind(this)}/></label>
                </List.Item>
                <List.Item>
                  <span className="iconfont icon-zhifubao" style={{color: '#4fafd8'}}></span>
                  <p>支付宝支付</p>
                  <label className="checkBox"><input type="checkbox"  defaultChecked onClick={this.select.bind(this)}/></label>
                  {/* <CheckboxItem defaultChecked onClick={this.select.bind(this)}></CheckboxItem> */}
                </List.Item>
                <List.Item>
                  <span className="iconfont icon-weixin-copy" style={{color: '#91be4f'}}></span>
                  <p>微信支付</p>
                  <label className="checkBox"><input type="checkbox"  onClick={this.select.bind(this)}/></label>
                </List.Item>
                <List.Item>
                  <span className="iconfont icon-yinhang-yinlian-" style={{color: '#f66'}}></span>
                  <p>银联支付</p>
                  <label className="checkBox"><input type="checkbox"  onClick={this.select.bind(this)}/></label>
                </List.Item>
                <List.Item>
                  <span className="iconfont icon-mayihuabei" style={{color: '#4fafd8'}}></span>
                  <p>蚂蚁花呗</p>
                  <label className="checkBox"><input type="checkbox"  onClick={this.select.bind(this)}/></label>
                </List.Item>
                <List.Item>
                  <span className="iconfont icon-zhinengdaifu" style={{color: '#7e94ba'}}></span>
                  <p>找朋友代付</p>
                  <label className="checkBox"><input type="checkbox"  onClick={this.select.bind(this)}/></label>
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion>
        </div>
        <Button type="warning" onClick={this.paymoney.bind(this)}>立即支付</Button>
      </div>
    )
  }
}

export default Com