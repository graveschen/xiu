import React, { Component } from 'react';
// import { NavBar, Icon } from 'antd-mobile';
import '@/scss/Login.scss';
import creatHistory from 'history/createBrowserHistory';
import { InputItem, Toast, Button } from 'antd-mobile';
import { Link } from 'react-router-dom'
import api from '@/api/user'

class Com extends Component {
  constructor (props) {
    super (props);
    this.state = {
      hasError: false, 
      value: '',
      hasPasswordError: false,
      passwordvalue: ''
    }
  }
  BackFn () {
    creatHistory().go(-1);
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入正确格式的手机号码');
    }
  }
  onPasswordErrorClick () {
    if (this.state.hasPasswordError) {
      Toast.info('请输入正确格式的密码');
    }
  }
  onChange (value) {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
    // console.log(this.state.value)
  }
  onPasswordChange (passwordvalue) {
    if (passwordvalue.replace(/\s/g, '').length < 4) {
      this.setState({
        hasPasswordError: true,
      });
    } else {
      this.setState({
        hasPasswordError: false,
      });
    }
    this.setState({
      passwordvalue,
    });
    // console.log(this.state.passwordvalue)
  }

  loginFn (username, password) {
    // console.log(username, password)
    api.requestData({username, password})
      .then(data => {
        console.log(data)
        if (data === 1) {
          Toast.success('登录成功', 1);
          localStorage.setItem('login', username)
          // let storage = window.localStorage
          // storage.setItem('isLogin', 'ok')
          this.props.history.push('/user')
        } else if (data === -1) {
          Toast.info('密码错误', 1);
        } else if (data === 2) {
          Toast.fail('没有该用户', 1);
        } else {
          Toast.fail('登录失败', 1);
        }
      })
  }
  render () {
    let type = ''
    let disabled = true
    if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.value.length > 0 && this.state.passwordvalue.length > 0) {
      type = 'primary';
      disabled = false
    } 
    return (
      <div className = "content">
        <div className="nav">
          <span className="back iconfont icon-fanhui" onClick = { this.BackFn.bind(this) }></span>
          使用密码登录
        </div>
        <div className="boxs"> 
        <InputItem
            type="text"
            clear
            placeholder="手机号/邮箱/用户名"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange.bind(this)}
            value={this.state.value}
            className="inputs"
          ></InputItem>
          <InputItem
            type="password"
            clear
            placeholder="密码"
            error={this.state.hasPasswordError}
            onErrorClick={this.onPasswordErrorClick.bind(this)}
            onChange={this.onPasswordChange.bind(this)}
            value={this.state.passwordvalue}
            className="inputs"
          ></InputItem>
          <Button type={ type } disabled = { disabled } onClick = { this.loginFn.bind(this, this.state.value, this.state.passwordvalue)} className="bigbtn">登录</Button>
          <Link to='/userapp/register' className="regis">没有账号？去注册</Link>
          <p className="third">请使用第三方账号登录</p>
          <div className="zhong">
            <ul className="icon">
              <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551719094853&di=f5ff8c571a11f04ab8c98e5a27015176&imgtype=0&src=http%3A%2F%2Fmy.qqkuyou.com%2Fimg_jianbihua%2F97565344.jpeg" alt="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551719094853&di=f5ff8c571a11f04ab8c98e5a27015176&imgtype=0&src=http%3A%2F%2Fmy.qqkuyou.com%2Fimg_jianbihua%2F97565344.jpeg" className="others" /></li>
              <li><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2449015981,3217486550&fm=26&gp=0.jpg" alt="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2449015981,3217486550&fm=26&gp=0.jpg" className="others" /></li>
            </ul>
          </div>
          <div className="xieyi">登录即代表您已同意<p>《走秀网用户协议》</p></div>
        </div>
      </div>
    )
  }

}

export default Com
