import React, { Component } from 'react'
import creatHistory from 'history/createBrowserHistory';
import '@/scss/Search.scss';
import { Link } from 'react-router-dom';
// import api from '@/api/search'

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      keyWord: "",
      hotlist: ['大衣','连衣裙','牛仔','西装','玩具','POLO衫','电动牙刷','洗发水','手链','项链']
    }
  }

  BackFn () {
    creatHistory().go(-1);
  }
  changFn (e) {
    console.log(e.target.value)
    this.setState({
      keyWord: e.target.value
    })
  }
  // searchFn () {
  //   // let keyValue = document.getElementsByClassName('txt')[0].value
  //   let keyValue = this.state.keyWord
  //   api.requestData (keyValue)
  //     .then(data => {
  //       console.log(data)
  //     })
  // }

  render () {
    let keyValue = this.state.keyWord
    let hotbtns = [];
    this.state.hotlist.map ((item, index) => {
      hotbtns.push(
        <Link to= {"/search/searchlist/" + item } key={index} className="li">{ item }</Link>
      )
    })
    return (
      <div className = "content">
        <div className="searchNav">
          <span className="back iconfont icon-fanhui" onClick = { this.BackFn.bind(this) }></span>
          <div className="searchInput">
            <span className="iconfont icon-sousuo fangdajing"></span>
            <input 
              type="text" 
              placeholder="请输入你要找的商品关键字" 
              className="txt"
              onChange = {this.changFn.bind(this)}
              />
          </div>
          <Link to= { "/search/searchlist/" + keyValue } className="sub">搜索</Link>
          {/* <input 
            type="submit" 
            value="搜索" 
            className="sub" 
            // onClick = { this.searchFn.bind(this) }
          /> */}
        </div>
        <div className="hot">
          <p className="iconfont icon-star star">
            <span className="jiacu">热门搜索</span>
          </p>
          <ul className="hot-advice">
            { hotbtns }
          </ul>
        </div>
        <div className="last">
          
        </div>
      </div>
    )
  }

}

export default Com


