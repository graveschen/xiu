import React, { Component } from 'react'
import { Checkbox, Toast } from 'antd-mobile'
// import  Paybottom from '@/components/cart/Paybottom'
// import  Deletebottom from '@/components/cart/Deletebottom'
import Numbox from '@/components/cart/Numbox'
import Numchange from '@/components/cart/Numchange'

const CheckboxItem = Checkbox.CheckboxItem

class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      money: 0,
      total: 0,
      paylist: [],
      editor: '编辑',
      selectall: false,
      changestate: false,
      isActive: -1
  }
    this.paymoney = this.paymoney.bind(this)
    this.selectall = this.selectall.bind(this)
    this.godelete = this.godelete.bind(this)
  }

  componentDidMount () {
    let cart = JSON.parse(localStorage.getItem('carts'))
    // console.log(cart)
    if (cart !== null) {
      this.setState({
        cart
      })
    }
  }
  goback () {
    this.props.setprop.history.go(-1)
  }
  editorchange () {
    let editor = ''
    if (this.state.editor === '编辑') {
      editor = '完成'
    } else {
      editor = '编辑'
    }
    this.setState({
      editor
    })
  }
  paymoney(e, info) {
    let checkaciton = e.target.checked
    let paylist = this.state.paylist
    let checkallstate = document.getElementsByClassName('checkall')[0]
    let money = 0
    let total = 0
    
    if (checkallstate.checked) {
      checkallstate.checked = false
    } else {
      if (checkaciton) {
        let payinfo = {
          id: info.id,
          num: info.num,
          price: info.price,
          img: info.img,
          brandEnName: info.brandEnName,
          name: info.name
        }
        paylist.push(payinfo)
      } else {
        for(let i=0; i<paylist.length; i++) {
          if (paylist[i].id === info.id) {
            paylist.splice(i, 1)
            break
          }
        }
      }
    }
    paylist.map((item, index) => {
      money += item.num * item.price
      total += item.num
      return ''
    })
    this.setState({
      paylist,
      money,
      total
    })

  }
  godelete () {
    let cart = this.state.cart
    let paylist = this.state.paylist
    if (this.state.selectall) {
      localStorage.removeItem('carts')
      this.setState({
        cart: [],
        money: 0,
        total: 0
      })
      this.props.payempty([])
      let option = document.querySelector('.checkall')
      let spanbox = option.children[0].children[0].children[0]
      spanbox.className = 'am-checkbox'
    } else {
      for (let i=0; i<this.state.cart.length; i++) {
        for(let j=0; j<paylist.length; j++) {
          if (this.state.cart[i].id === paylist[j].id) {
            cart.splice(i, 1)
          }
        }
      }
      this.setState({
        paylist: [],
        cart
      })
      Toast.success('删除成功', 1);
      if (this.state.cart.length === 0) {
        localStorage.removeItem('carts')
        this.props.payempty([])
      } else {
        localStorage.setItem('carts',JSON.stringify(this.state.cart))
      }
    }
  }
  selectall (e) {
    let checkboxs = document.getElementsByClassName("checkone")
    // console.log(checkboxs)
    let money = 0
    let total = 0
    // console.log(e.target.checked)
    let checkall = e.target.checked
    if (checkall) {
      e.target.checked = true
      for(let i=0; i<checkboxs.length; i++) {
        checkboxs[i].checked = true
      }
      this.state.cart.map((item, index) => {
        money += item.num * item.price
        total += item.num
        return ''
      })
      this.setState({
        money,
        total,
        selectall: true,
        paylist: this.state.cart
      })
    } else {
      // console.log(e.target.checked)
      e.target.checked = false
      for(let i=0; i<checkboxs.length; i++) {
        checkboxs[i].checked = false
      }
      this.setState({
        money,
        total,
        selectall: false,
        paylist: []
      })
    }
  }
  changenumber (index) {
    this.setState({
      isActive: index
    })
  }
  changefinish () {
    this.setState({
      isActive: -1
    })
    localStorage.setItem('carts',JSON.stringify(this.state.cart))
  }
  addaction (item) {
    let money = 0
    let total = 0
    let num = item.num + 1
    let cart = this.state.cart
    for(let i=0; i<cart.length; i++) {
      if (cart[i].id === item.id) {
        cart[i].num = num
        break
      }
    }
    let paylist = this.state.paylist
    if (paylist.length > 0) {
      for(let i=0; i<paylist.length; i++) {
        if (paylist[i].id === item.id) {
          paylist[i].num = num
          break
        }
      }
    }
    paylist.map((item, index) => {
      money += item.num * item.price
      total += item.num
      return ''
    })
    this.setState({
      cart,
      paylist,
      money,
      total
    })
  }
  deaddaction (item) {
    let money = 0
    let total = 0
    let num = item.num -1
    let cart = this.state.cart
    if (num >= 1) {
      for(let i=0; i<cart.length; i++) {
        if (cart[i].id === item.id) {
          cart[i].num = num
          break
        }
      }
    }
    let paylist = this.state.paylist
    if (paylist.length > 0) {
      for(let i=0; i<paylist.length; i++) {
        if (paylist[i].id === item.id) {
          paylist[i].num = num
          break
        }
      }
    }
    paylist.map((item, index) => {
      money += item.num * item.price
      total += item.num
      return ''
    })
    this.setState({
      cart,
      paylist,
      money,
      total
    })
  }
  orderaction () {
    let login = localStorage.getItem('login')
    if (login) {
      // console.log(this.state.paylist)
      localStorage.setItem('orderlist',JSON.stringify(this.state.paylist))
      this.setState({
        paylist: []
      })
      localStorage.setItem('carts',JSON.stringify(this.state.cart))
      this.props.setprop.history.push('/cartapp/order')
    } else {
      this.props.setprop.history.push('/userapp/login')
    }
  }
  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  }
  render () {

    let cartinfo = ("");
    // if (this.state.editor === '编辑') {
    //   cartinfo = (<Paybottom selectall={ this.selectall } money={ this.state.money } total={ this.state.total }/>)
    // } else {
    //   cartinfo = (<Deletebottom selectall={ this.selectall } money={ this.state.money } total={ this.state.total } 
    //     godelete={ this.godelete }/>)
    // }
    if (this.state.editor === '编辑') {
      cartinfo = (
        <div className="paybottom">
          {/* <CheckboxItem className="checkall" onChange={ this.selectall }>全选</CheckboxItem> */}
          <div className="checkaction">
            <label className="checkBox"><input type="checkbox"  className="checkall" onChange={ this.selectall }/></label>
            <span className="optionsall">全选</span>
          </div>
          <div className="money">应付金额： {this.state.money}</div>
          <div className="pay" onClick={ this.orderaction.bind(this) }>去结算({this.state.total})</div>
        </div>
      )
    } else {
      cartinfo = (
        <div className="deletebottom">
          {/* <CheckboxItem className="checkall" onChange={ this.selectall }>全选</CheckboxItem> */}
          <label className="checkBox"><input type="checkbox"  className="checkall" onChange={ this.selectall }/>全选</label>
          <div className="favor">移入收藏</div>
          <div className="deleteaction" onClick={ this.godelete }>删除</div>
        </div>
      )
    }
    return (
      <div className="cart">
        <header className="carthead">
          <div className="iconfont icon-fanhui back" onClick={ this.goback.bind(this) }></div>
          <div className="title">购物车</div>
          <div className="editor" onClick = { this.editorchange.bind(this) }>{ this.state.editor}</div>
        </header>
        <div className="cartcontent">
          <ul>
            {
              this.state.cart.map((item, index) => {
                return (
                <li key={item.id}>
                  {/* <CheckboxItem onChange={e => this.paymoney(e, item) } className="checkone"></CheckboxItem> */}
                  <label className="checkBox"><input type="checkbox"  onChange={e => this.paymoney(e, item) } className="checkone"/></label>
                  <img src={item.img} alt=""/>
                  <div className="infos">
                    <div className="brand">{item.brandEnName}</div>
                    <div className="name">{item.name}</div>
                    <div className="price">购买价：￥{item.price}</div> 
                    {this.state.isActive === index ? 
                      <Numchange num={item.num} changefinish={this.changefinish.bind(this)} addaction={this.addaction.bind(this, item)}
                      deaddaction={this.deaddaction.bind(this, item)} />
                      : <Numbox num={item.num} changenumber={this.changenumber.bind(this, index)} />}
                  </div>
                </li>
                )
              })
            }
          </ul>
        </div>
        {cartinfo}
      </div>)
  }
}

export default Com