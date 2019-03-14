import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './ListDetailStyle.scss'

class Com extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      listdetail: [],
      defaultaddress: [],
      telphone: '',
      listnumber: 0,
      paytime: '',
      method: '',
      totalnum: 0,
      totalmoney: 0
    }
  }
  componentDidMount () {
    let listdetail = JSON.parse(localStorage.getItem('listdetail'))
    let defaultaddress = JSON.parse(localStorage.getItem('defaultaddress'))
    let telfir = defaultaddress.tel.slice(0, 3)
    let tellas = defaultaddress.tel.slice(-3)
    let {listnumber, paytime, method} = listdetail[0]
    let totalmoney = 0
    let totalnum = 0
    listdetail.map((item, index) => {
      totalmoney += item.num * item.price
      totalnum += item.num
      return ''
    })
    // console.log(listdetail)
    this.setState({
      listdetail,
      defaultaddress,
      telphone: `${telfir}*****${tellas}`,
      listnumber,
      paytime,
      method,
      totalmoney,
      totalnum
    })
  }
  render () {
    return (
      <div className = "detailbox">
        <div className="detailhead">
          <NavLink className="iconfont icon-fanhui" to='/cartapp/alllist'></NavLink>
          <p>订单详情</p>
        </div>
        <div className="detailcontent">
          <div className="receiveinfo">
            <h3>收货信息</h3>
            <div className="receiver">
              <p>收货人： <span>{this.state.defaultaddress.receiver}</span></p>
              <p>手机号码： <span>{this.state.telphone}</span></p>
              <p>收货地址： <span>{`${this.state.defaultaddress.location},${this.state.defaultaddress.detail}`}</span></p>
            </div>
          </div>

          <div className="goodsinfo">
            <h3>商品信息</h3>
            <ul>
              {
                this.state.listdetail.map((item, index) => {
                  return (
                    <li className="goodsbox" key={index}>
                      <img src={item.img} alt=""/>
                      <div className="goods">
                        <p>{item.brandEnName}</p>
                        <p>{item.name}</p>
                        <p><span>交易价：</span>￥ {item.price}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="listinfo">
            <h3>订单信息</h3>
            <div className="listbox">
              <div className="liststate">
                <p>订单状态： <span>已支付</span></p>
                <p>订单编号： <span>{this.state.listnumber}</span></p>
                <p>下单时间： <span>{this.state.paytime}</span></p>
              </div>
              <div className="goodsstate">
                <p>商品总数量： <span>{this.state.totalnum}</span></p>
                <p>商品总金额： <span>￥ {this.state.totalmoney}</span></p>
                <p>运费： <span>￥ 0</span></p>
                <p>优惠总金额： <span>￥ 0</span></p>
                <p>虚拟账户支付： <span>￥ 0</span></p>
              </div>
              <div className="total">
                <p>支付金额： <span>￥ {this.state.totalmoney}</span></p>
              </div>
            </div>
          </div>
          <div className="paystate">
            <p>支付方式： <span>{this.state.method}</span></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Com