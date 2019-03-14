import React, { Component } from 'react'
import { InputItem, Button, Toast } from 'antd-mobile'
import { Accordion, List } from 'antd-mobile'
import { NavLink } from 'react-router-dom'
import './OrderStyle.scss'
import './FastOrderStyle.scss'
import Numbox from '@/components/cart/Numbox'
import Numchange from '@/components/cart/Numchange'

class Com extends Component  {
  constructor (props) {
    super(props)
    this.state = {
      fastlist: {},
      payname: '支付宝支付',
      totalmoney: 0,
      num: 0,
      alllist: [],
      condition: 1
    }
    // console.log(this.state.fastlist.img)
  }
  componentDidMount () {
    let fastlist =JSON.parse(localStorage.getItem('fastlist'))
    let alllist = JSON.parse(localStorage.getItem('alllist'))
    if (alllist !== null) {
      this.setState({
        alllist
      })
    }
    let totalmoney = fastlist.num * fastlist.price
    let num = fastlist.num
    // console.log(fastlist)
    // console.log(totalmoney, num)
    this.setState({
      totalmoney,
      num,
      fastlist
    })
  }
  select (e) {
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
  addaction (item) {
    let fastlist = this.state.fastlist
    let num = fastlist.num + 1
    let totalmoney = fastlist.price * num
    fastlist.num = num
    // console.log(fastlist)
    this.setState({
      fastlist,
      totalmoney,
      num
    })
    //点击完成的时候，再存入本地
  }
  deaddaction (item) {
    if (this.state.num > 1) {
      let fastlist = this.state.fastlist
      let num = fastlist.num - 1
      let totalmoney = fastlist.price * num
      fastlist.num = num
      this.setState({
        fastlist,
        totalmoney,
        num
      })
    }
  }
  changenumber (index) {
    this.setState({
      condition: -1
    })
  }
  changefinish () {
    this.setState({
      condition: 1
    })
    localStorage.setItem('fastlist',JSON.stringify(this.state.fastlist))
  }
  paymoney () {
    // console.log(this.state.orderlist)
    let defaultaddress = JSON.parse(localStorage.getItem('defaultaddress'))
    if (defaultaddress === null) {
      Toast.fail('请填写收货地址', 1);
    } else {
      let myDate = new Date();
      let fastlist = this.state.fastlist
      fastlist.listnumber = myDate.getTime()
      fastlist.method = this.state.payname
      fastlist.paytime = myDate.toLocaleString()
      console.log(myDate.toLocaleString())
      let alllist = this.state.alllist
      alllist.push([fastlist])
      console.log(alllist)
      this.setState({
        alllist
      })
      Toast.success('支付成功', 1);
      localStorage.setItem('alllist',JSON.stringify(alllist))
      this.props.history.push('/cart')
    }
  }
  goaddress () {
    localStorage.setItem('listpath', this.props.match.path)
    this.props.history.push('/cartapp/address')
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
            <div className="details">
              <img src={this.state.fastlist.img} alt=""/>
              <div className="infos">
                <div className="brand">{this.state.fastlist.brandEnName}</div>
                <div className="name">{this.state.fastlist.name}</div>
                <div className="price">购买价：￥{this.state.fastlist.price}</div>
                {this.state.condition === -1? 
                <Numchange num={this.state.fastlist.num}  addaction={this.addaction.bind(this, this.state.fastlist)}
                deaddaction={this.deaddaction.bind(this, this.state.fastlist)} changefinish={this.changefinish.bind(this)}/> :
                <Numbox num={this.state.fastlist.num} changenumber={this.changenumber.bind(this)} />}
              </div>
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
    // console.log(this.state.fastlist.img)
    // return (<div></div>)
  }
}

export default Com