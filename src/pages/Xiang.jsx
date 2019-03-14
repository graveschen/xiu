import React, { Component } from 'react';
import api from '@/api/detail';
import { Link } from 'react-router-dom';
import "../components/detail/index.scss"
class Com extends Component {
  constructor (props) {
    super(props)   
    this.state = {
      name: '',
      list: []
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id
    console.log(id)
    api.requestData(id).then(data => {
      console.log(data)
        this.setState({
          list: data.data
        })
        console.log(this.state.list)
    })
  }
  render () {
    let listarr = this.state.list;
    let Html = [];

    if( listarr.length === 0 ){
      Html = <li>正在加载中...</li>
    } else {
    listarr.slice(0,1).map((item, index) => {
      console.log(item)
      Html.push(
        <li key = { index }>
      <i className="tu"><img src={ item.imgUrl } alt=""/></i>
        <span className="brank"> { item.brandEnName }</span>
        <span className="name">{ item.name }</span>
        <h4>[一口价]</h4>
        <p className="te">限时特卖:￥ { item.xiuPrice }</p>
        <p className="fen">分期：￥116.91起</p>
        <b>发货地：国内 起送时间：预计3-7个工作日送达</b>
        </li>
        )
      })
    }

    return (
      <div className = "box">
        <div className = "content">
         <ul className = "a">
           <li className="left"><Link to="/home"><img src = "http://localhost:3000/images/fan.png"/></Link></li>
           <li className="center"><span>商品</span><Link to="">请求</Link></li>
           <li className="right"> <Link to="/cart"><img src = "http://localhost:3000/images/gou.png"/></Link></li>
           { Html }
           </ul>
           <div className="color">颜色：<b>白色</b></div>
           <div className="chi">
            <h4>尺码:</h4>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
             </div>
        </div>
        <footer className = "footer">
          <ul className="style">
          <li className = "fu">
            <span><img src="http://localhost:3000/images/ke.png"/></span>
            <p>客服</p>
            </li>
            <li className = "cang">
            <span><img src="http://localhost:3000/images/shou.png"/></span>
            <p>收藏</p>
            </li>
            <li className="ru">
              <button>加入购物袋</button>
              </li>
              <li className="ji">
              <button>立即购买</button>
              </li>
            </ul>
        </footer>
      </div>
    )
}
}
export default Com
