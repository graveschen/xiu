import React, { Component } from 'react'

class Com extends Component {

  render () {
    return (
      <div className="numberbox">
        <span className="num">数量：×{this.props.num}</span>
        <span className="update iconfont icon-ico_compile" onClick={ this.props.changenumber }></span>
    </div>
    )
  }
}
export default Com