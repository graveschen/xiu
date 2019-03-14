import React, { Component } from 'react'
import './AddressStyle.scss'
import { NavLink } from 'react-router-dom'

class Com extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      addresses: [],
      defaultaddress: {}
    }
    this.getinfo = this.getinfo.bind(this)
  }
  componentDidMount () {
    let addresses = JSON.parse(localStorage.getItem('addresses'))
    let defaultaddress = JSON.parse(localStorage.getItem('defaultaddress'))
    if (addresses !== null) {
      this.setState({
        addresses
      })
    }
    if (defaultaddress !== null) {
      this.setState({
        defaultaddress
      })
    }
    
  }
  getinfo (item, e) {
    let arrays = document.getElementsByTagName('input')
    for (let i=0; i<arrays.length; i++) {
      arrays[i].checked = false
    }
    e.target.checked = true
    // console.log(e.target)
    let defaultaddress = {
      id: item.id,
      receiver: item.receiver,
      tel: item.tel,
      location: item.location,
      detail: item.detail
    }
    localStorage.setItem('defaultaddress', JSON.stringify(defaultaddress))
    let listpath = localStorage.getItem('listpath')
    this.props.history.push(listpath)
  }
  goback () {
    let listpath = localStorage.getItem('listpath')
    this.props.history.push(listpath)
  }
  render () {
    return (
      <div className = "addressbox">
        <div className="addresshead">
          <span className="iconfont icon-fanhui" onClick={this.goback.bind(this)}></span>
          <p>收货地址管理</p>
          <NavLink className="save" to='/cartapp/addaddress'>新增</NavLink>
        </div>
        <div className="addresscontent">
          <ul>
            {
              this.state.addresses.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="infobox">
                      <div className="nameinfo">
                        <p className="name">{item.receiver}</p>
                        <p className="phone">{item.tel}</p>
                      </div>
                      <div className="location">{item.location}</div>
                      <div className="detail">{item.detail}</div>
                    </div>
                    <label className="checkBox"><input type="checkbox"  defaultChecked={item.id === this.state.defaultaddress.id ? true : false} onClick={e => this.getinfo(item, e)}/></label>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}


export default Com