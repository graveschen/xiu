import React, { Component } from 'react';
// import { NavBar, Icon } from 'antd-mobile';
import '@/scss/Register.scss';
import creatHistory from 'history/createBrowserHistory';
import { InputItem, Toast, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
// import baseUrl from '@/api';
import api from '@/api/user'

class Com extends Component {
  constructor (props) {
    super (props);
    this.state = {
      hasError: false, 
      value: '',
      hasPasswordError: false,
      passwordvalue: '',
      hasCodeError: false,
      codeValue: '',
      admin: '12345',
      msg: '发送验证码'
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
  onCodeClick () {
    if (this.state.hasCodeError) {
      Toast.info('请输入正确的验证码');
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
    console.log(this.state.value)
  }
  onPasswordChange (passwordvalue) {
    if (passwordvalue.replace(/\s/g, '').length < 6) {
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
    console.log(this.state.passwordvalue)
  }
  onCodeChange (codeValue) {
    if (codeValue === this.state.admin) {
      this.setState({
        hasCodeError: false,
      });
    } else {
      this.setState({
        hasCodeError: true,
      });
    }
    this.setState({
      codeValue,
    });
    console.log(this.state.codeValue)
  }

  registFn (username, password) {
    console.log(username, password)
    api.requestUser({username, password})
      .then(data => {
        console.log(data)
        if (data === 2) {
          Toast.info('该用户已注册')
        } else if (data.data === 0) {
          Toast.fail('注册失败')
        }  else {
          Toast.success('注册成功')
          // 成功后跳转
        }
      })
  }
  sendCode (phoneNumber) {
    api.requestCode(phoneNumber)
      .then(data => {
        console.log(data)
        if (data === 1) {
          Toast.fail('该用户已注册')
        } else if (data === 0) {
          Toast.info('获取验证码失败')
        } else {
          this.state.admin = data.code
          // this.state.admin = 12345
        }
      })
    let timer = null
    let time = 10
    timer = setInterval(() => {
      //用 setState改变属性
      // this.state.msg = time + '后重新发送'
      this.setState({
        msg: time + 's后重新发送'
      })
      time--
      if (time === 0) {
        this.setState({
          msg: '发送验证码'
        })
        clearInterval(timer)
      }
    }, 1000)
  }
  render () {
    let type = ''
    let disabled = true
    let codeType = ''
    let codeDisabled = true
    if (this.state.hasError === false && this.state.value.length > 0) {
      codeType = 'primary';
      codeDisabled = false
    }
    if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.hasCodeError === false && this.state.value.length > 0 && this.state.passwordvalue.length > 0 && this.state.codeValue === this.state.admin) {
      type = 'primary';
      disabled = false
    }
    return (
      <div className = "content">
        <div className="nav">
          <span className="back iconfont icon-fanhui" onClick = { this.BackFn.bind(this) }></span>
          注册账号
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
          <div className="double">
            <InputItem
              type="number"
              clear
              placeholder="请输入验证码"
              error={this.state.hasCodeError}
              onErrorClick={this.onCodeErrorClick}
              onChange={this.onCodeChange.bind(this)}
              value={this.state.codeValue}
              className="test"
            ></InputItem>
            <Button type={ codeType } disabled = { codeDisabled } onClick = { this.sendCode.bind(this, this.state.value) } className="testcode">{ this.state.msg }</Button>
          </div>
          <Button type={ type } disabled = { disabled } onClick = { this.registFn.bind(this, this.state.value, this.state.passwordvalue)} className="bigbtns">注 册</Button>
          <Link to='/userapp/login' className="tologin">已有账号？去登录</Link>
          <p className="third">请使用第三方账号登录</p>
          <div className="zhong">
            <ul className="icon">
              <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551719094853&di=f5ff8c571a11f04ab8c98e5a27015176&imgtype=0&src=http%3A%2F%2Fmy.qqkuyou.com%2Fimg_jianbihua%2F97565344.jpeg" alt="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551719094853&di=f5ff8c571a11f04ab8c98e5a27015176&imgtype=0&src=http%3A%2F%2Fmy.qqkuyou.com%2Fimg_jianbihua%2F97565344.jpeg" className="others" /></li>
              <li><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2449015981,3217486550&fm=26&gp=0.jpg" alt="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2449015981,3217486550&fm=26&gp=0.jpg" className="others" /></li>
            </ul>
          </div>
          <div className="xieyi">注册即代表您已同意<p>《走秀网用户协议》</p></div>
        </div>
      </div>
    )
  }

}

export default Com
