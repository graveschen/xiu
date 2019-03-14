import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './AllListStyle.scss'

class Com extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      alllist: [],
      totalmoney: []
    }
  }
  componentDidMount () {
    let alllist = JSON.parse(localStorage.getItem('alllist'))
    if (alllist !== null) {
      let totalmoney = []
      alllist.map((item) => {
        // console.log(item)
        let money = 0
        item.map((itm) => {
          money += itm.price * itm.num
          return ''
        })
        totalmoney.push(money)
        return ''
      })
      
      this.setState({
        alllist,
        totalmoney
      })
    }
  }
  listdetail (item) {
    localStorage.setItem('listdetail',JSON.stringify(item))
    this.props.history.push('/cartapp/listdetail')
  }
  render () {
    return (
      <div className = "alllist">
        <div className="allhead">
          <NavLink className="iconfont icon-fanhui" to='/user'></NavLink>
          <p>全部订单</p>
        </div>
        <ul>
          {
            this.state.alllist.map((item, index) => {
              return (
              <li key={index} onClick={this.listdetail.bind(this, item)}>
                <h3>订单号：{item[0].listnumber}</h3>
                <div className="infobox">
                  <img src={item[0].img} alt=""/>
                  <div className="detailinfo">
                    <p>订单状态：<span>已支付</span></p>
                    <p>订单金额：
                      <span>￥ {this.state.totalmoney[index]}</span></p>
                    <p>下单时间：<span>{item[0].paytime}</span></p>
                  </div>
                </div>
              </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Com