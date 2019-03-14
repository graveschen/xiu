import React, { Component } from 'react'
import './UserStyle.scss'
import { NavLink } from 'react-router-dom'
import { Toast } from 'antd-mobile';

class Com extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      isLogin: ''
    }
  }
  componentDidMount() {
    let login = localStorage.getItem('login')
    this.setState({
      isLogin: login
    })
  }
  exit () {
    localStorage.removeItem('login')
    Toast.success('退出成功', 1)
    this.setState({
      isLogin: ''
    })
  }
  render () { 
    let isLogin = (
      <div className="isLogin">
        <span className="iconfont icon-yonghu"></span>
        <p>{this.state.isLogin}</p>
        <button onClick={ this.exit.bind(this) }>退出</button>
      </div>
    )
    let notLogin = (
      <div className="innerhead">
        <NavLink className="register" to='/userapp/register'>注册</NavLink>
        <NavLink className="login" to='/userapp/login'>登陆</NavLink>
      </div>
    )
    return (
      <div className="container">
        <div className="outerbox">
          <div className="userhead">
            <div className="headtop">
              <span className="iconfont icon-shezhi"></span>
              <p>我的</p>
              <span className="iconfont icon-youjian"></span>
            </div>
            <div className="headinfo">
              { this.state.isLogin ?  isLogin : notLogin }
            </div>
          </div>
          <div className="activity">
            <div className="alllist">
              <div className="listtop">
                <h3>全部订单</h3>
                  <NavLink to='/cartapp/alllist' className="iconfont icon-fanhui1"></NavLink>
              </div>
              <ul>
                <li>
                  <span className="iconfont icon-daifukuan"></span>
                  <p>待付款</p>
                </li>
                <li>
                  <span className="iconfont icon-tubiaolunkuo-"></span>
                  <p>待发货</p>
                </li>
                <li>
                  <span className="iconfont icon-daishouhuo"></span>
                  <p>待收货</p>
                </li>
                <li>
                  <span className="iconfont icon-weibiaoti2fuzhi06"></span>
                  <p>待评价</p>
                </li>
                <li>
                  <span className="iconfont icon-shouhou"></span>
                  <p>售后服务</p>
                </li>
              </ul>
            </div>
          <ul className="history">
            <li>
              <span>0张</span>
              <p>优惠券</p>
            </li>
            <li>
              <span>0分</span>
              <p>积分</p>
            </li>
            <li>
              <span>0元</span>
              <p>账户余额</p>
            </li>
            <li>
              <span>0元</span>
              <p>分享返现</p>
            </li>
          </ul>
          <div className="task">
            <ul>
              <li>
                <span className="iconfont icon-shouchang"></span>
                <p>收藏</p>
              </li>
              <li>
                <span className="iconfont icon-guanzhu"></span>
                <p>关注</p>
              </li>
              <li>
                <span className="iconfont icon-liulanjilu"></span>
                <p>浏览记录</p>
              </li>
              <li>
                <span className="iconfont icon-unie737"></span>
                <p>联系客服</p>
              </li>
              <li>
                <span className="iconfont icon-woyaotucao"></span>
                <p>我要吐槽</p>
              </li>
              <li>
                <span className="iconfont icon-qiandao"></span>
                <p>签到</p>
              </li>
              <li>
                <span className="iconfont icon-3changgouchima"></span>
                <p>尺码助手</p>
              </li>
              <li>
                <span className="iconfont icon-yaoyiyao"></span>
                <p>摇一摇</p>
              </li>
              <li>
                <span className="iconfont icon-saoyisao"></span>
                <p>扫一扫</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Com