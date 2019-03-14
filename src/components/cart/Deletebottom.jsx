import React, { Component } from 'react'
import { Checkbox } from 'antd-mobile'

const CheckboxItem = Checkbox.CheckboxItem

class Com extends Component {
  render () {
    return (
      <div className="deletebottom">
        <CheckboxItem className="checkall" onChange={ this.props.selectall }>全选</CheckboxItem>
        <div className="favor">移入收藏</div>
        <div className="deleteaction" onClick={this.props.godelete}>删除</div>
      </div>
    )
  }
}

export default Com