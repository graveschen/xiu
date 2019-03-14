import React, { Component } from 'react'

class Com extends Component {

  handleChange (e) {
    this.setState({value: e.target.value});
  }
  render () {
    return (
      <div className="numberchange">
        <span className="num">
          <span>数量：</span>
          <div className="deadd" onClick={this.props.deaddaction}>-</div>
          <input type="text" value={this.props.num} onChange={this.handleChange.bind(this)}/>
          <div className="add" onClick={this.props.addaction}>+</div>
        </span>
        <button onClick={ this.props.changefinish }>完成</button>
    </div>
    )
  }
}
export default Com