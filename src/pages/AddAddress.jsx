import React, { Component } from 'react'
import './AddAddressStyle.scss'
import { List, TextareaItem, Picker, Toast } from 'antd-mobile';
import { NavLink } from 'react-router-dom'
import { district } from 'antd-mobile-demo-data'
import { createForm } from 'rc-form';

class Com extends Component  {
  constructor (props) {
    super(props)
    this.state = {
      addresses: [],
      location: []
    }
  }
  componentDidMount () {
    let addresses = JSON.parse(localStorage.getItem('addresses'))
    if (addresses !== null) {
      this.setState({
        addresses
      })
    }
  }

  save () {
    let info = []
    let addresses = this.state.addresses
    let arrays = document.getElementsByTagName('textarea');
    let locationDom = document.getElementsByClassName('am-list-extra')
    // console.log(locationDom[0].innerHTML)
    console.log(arrays[0].value)
    for(let i=0; i<arrays.length; i++) {
      if (arrays[i].value === '') {
        Toast.fail('信息输入不完整', 1);
        return
      } else {
        info.push(arrays[i].value)
        // console.log(1111)
      }
    }
    let addressinfo = {
      id: addresses.length? addresses.length : 0,
      receiver: info[0],
      tel: info[1],
      location: locationDom[0].innerHTML,
      detail: info[2]
    }
    addresses.push(addressinfo)
    this.setState({
      addresses
    })
    localStorage.setItem('addresses', JSON.stringify(addresses))
    this.props.history.push('/cartapp/address')
  }
  render () {
    const { getFieldProps } = this.props.form;
    return (
      <div className = "addbox">
        <div className="addhead">
          <NavLink className="iconfont icon-fanhui" to='/cartapp/address'></NavLink>
          <p>新增收货地址</p>
          <span className="save" onClick={this.save.bind(this)} to='/cartapp/address'>保存</span>
        </div>
        <div className="addcontent">
        <List>
          <TextareaItem clear title="收货人：" className="receiver"/>
          <TextareaItem clear title="手机号码：" className="tel"/>
          <Picker extra="请选择(可选)"
            data={district}
            title="Areas"
            {...getFieldProps('district', {
              initialValue: ['340000', '341500', '341502'],
            })}
            onOk={e => console.log('ok', e)}
            onDismiss={e => console.log('dismiss', e)}
          >
            <List.Item arrow="horizontal">所在地区：</List.Item>
          </Picker>
          <TextareaItem clear rows="2" title="详细地址："className="detail"/>
        </List>
        </div>
      </div>
    )
  }
}

const ComWrapper = createForm()(Com);

export default ComWrapper