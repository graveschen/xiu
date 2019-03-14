import React, { Component } from 'react'
import './CartnullStyle.scss'
import { Carousel } from 'antd-mobile'
import axios from 'axios'

class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176
    }
  }
  componentDidMount () {
    axios.get('http://139.224.132.114:3000/api/banner').then(data => {
      // console.log(data.data.data)
      this.setState({
        data: data.data.data
      })
    }).catch(err => console.log(err))
  }
  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  }
  render () {
    return (
      <div className="cart">
        <header className="carthead">
          <div className="title">购物车</div>
        </header>
        <div className="contentnull">
          <span className="iconfont icon-gouwuchekong"></span>
          <p>您的购物袋是空的</p>
        </div>
        <div className="banner">
          <h3>———— 精选推荐 ————</h3>
          <Carousel
            autoplay={true}
            infinite
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="/home"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val.bannerSrc}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </div>
      </div>
    )
  }
}

export default Com