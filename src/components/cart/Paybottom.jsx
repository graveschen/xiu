import React, { Component } from 'react'
import { Checkbox } from 'antd-mobile'

const CheckboxItem = Checkbox.CheckboxItem

class Com extends Component {
  render () {
    return (
      <div className="paybottom">
        <CheckboxItem className="checkall" onChange={ this.props.selectall }>全选</CheckboxItem>
        <div className="money">应付金额： {this.props.money}</div>
        <div className="pay">去结算({this.props.total})</div>
      </div>
    )
  }
}

export default Com