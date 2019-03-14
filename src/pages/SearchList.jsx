import React, { Component } from 'react'
import creatHistory from 'history/createBrowserHistory';
import '@/scss/SearchList.scss';
import { Link } from 'react-router-dom';
import api from '@/api/search'
class Com extends Component {
  constructor (props) {
    super (props)
    this.state = {
      list:[]
    }
  }
  BackFn () {
    creatHistory().go(-1);
  }
  componentDidMount () {
    const keyValue = this.props.match.params.id
    console.log(keyValue)
    this.setState ({
      value: keyValue
    })
    api.requestData (keyValue)
      .then(data => {
        console.log(data)
        this.setState({
          list: data
        })
      })  
  }
  toPageFn () {
    console.log(this)
    this.props.history.push('/search/')
  }

  render () {
    const all = [];
    console.log(this.state.list)
    this.state.list.map ((item, index) => {
      all.push(
        <Link to = { '/detail/' + item.id } key = { item.id } className="s-pro">
          <div className="sup">
            <img src= { item.imgUrl } alt= { item.imgUrl } />
          </div>
          <div className="scenter">
            参加满减
          </div>
          <div className="sdown">
            <p className="scolor">{ item.brandEnName }</p>
            <p className="scolor">{ item.name }</p>
            <p className="scolor">￥{ item.xiuPrice }</p>
          </div>
        </Link>
      )    
    })
    return (
      <div className = "contentSearch">
        <div className="searchNav">
          <span className="back iconfont icon-fanhui" onClick = { this.BackFn.bind(this) }></span>
          <div className="searchInput">
            <span className="iconfont icon-sousuo fangdajing"></span>
            <input 
              type="text" 
              className="txt"
              value={this.state.value}
              onClick={ this.toPageFn.bind(this)}
              />
          </div>
          <input type="submit" value="搜索" className="sub"/>
        </div>
        <ul className="choice">
          <li>推荐</li>
          <li>价格升序</li>
          <li>价格降序</li>
          <li>筛选</li>
        </ul>
        <ul className="productss">
          {/* <li>
            <div className="sup">
            <img src="" alt=""/>
            </div>
            <div className="scenter">
              参加满减
            </div>
            <div className="sdown">
              <p>品牌</p>
              <p>女士连帽大衣</p>
              <p>价格</p>
            </div>
          </li> */}
          { all }
        </ul>
      </div>
    )
  }

}

export default Com
