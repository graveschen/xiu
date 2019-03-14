import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../components/home1/index.scss'
import {Carousel, WingBlank } from 'antd-mobile';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list:[],
      imgHeight: 176,
      data:[],
    }
  };
      componentDidMount () {
        setTimeout(() => {
          this.setState({
          });
        }, 100);
        axios.get('http://139.224.132.114:3000/api/product/kind?kind=洗发水')
        .then(data => {
          console.log(data)
          this.setState({
            list:data.data.data
          })
        })
        axios.get('http://139.224.132.114:3000/api/banner')
        .then(data => {
          console.log(data)
          this.setState({
           data:data.data.data
          })
        })
      };
  render () {
    let listarr = this.state.list;
    let Html = [];

    if( listarr.length === 0 ){
      Html = <li>正在加载中...</li>
    } else {
      listarr.map((item, index) => {
        Html.push(
        <li key = { item.id }>
          <Link to = {"/detail/" + item.id}><img src={ item.imgUrl } alt=""/></Link>
          <span>{ item.name }</span>
          <p>price: { item.xiuPrice }</p>
        </li>
        ) 
      })
    }
    return (
      <div className = "box">
      <header className = "myheader">
      <div className="search">
      <div className="erweima">
        <span className="iconfont icon-saoyisao1"></span>
      </div>
      <Link to="/search"><input type="text" placeholder="  搜索卖场/品牌/分类/商品" className="text"/></Link>
      <div className="xinfeng">
        <Link to={ '/user' } className="iconfont icon-youjian touser"></Link>
      </div>
      </div>
      <div className = "menu">
        <ul className = "menu1">
          <li className = "ye">首页</li>
          <Link to='/kind' className="shi">男士
            {/* <div className="wx">
          <ul className="w">
            <li>衬衫</li>
            <li>短袖</li>
            <li>牛仔裤</li>
            <li>卫衣</li>
            <li>内裤</li>
            <li>袜子</li>
            <li>休闲裤</li>
          </ul>
          </div> */}
          </Link>
          <Link to='/kind' className="shi">女士</Link>
          {/* <ul className="e">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
          <Link to='/kind' className="shi">妆品</Link>
          {/* <ul className="r">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
          <Link to='/kind' className="shi">母婴</Link>
          {/* <ul className="t">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>Link
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
          </ul>
      </div>
      </header>
      <div className="content">
      <div className = "homecontent">
      <div className="banner">
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((item,index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                className="baners"
                src={item.bannerSrc}
                alt=""
                style={{ width: '100%',height:'2.4rem', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      </div>
      <div className="hot">
            <img src = "http://8.xiustatic.com/H5/2018/03/16/d0b937b8-6761-4632-ab4b-150333a98142.png"/>
            <span className="iconfont icon-laba"></span>
            <div className="lun">
          <WingBlank>
           <Carousel className="my-carousel"
             vertical
             dots={false}
             dragging={false}
            swiping={false}
             autoplay
             infinite
            >
           <div className="v-item">唯美春季时装低至270 </div>
             <div className="v-item">女士开春上装 新款T恤</div>
             <div className="v-item">burberry热销爆款衬衫</div>
           </Carousel>
          </WingBlank>
          </div>
      </div>
          <div className = "huo">
          <img src="http://7.xiustatic.com/H5/2019/02/26/8c1ffe81-db88-4fd4-ba5a-8baa8827ccbc.jpg"/>
          <img src="http://8.xiustatic.com/H5/2018/03/16/9a9d9416-08e3-4cb8-ac90-1961abccf737.jpg"/>
          </div>
          <div className = "dong">
            <h3><span></span><i>热销</i><span></span></h3>
            <p>
              <img src="http://8.xiustatic.com/H5/2018/05/22/6f745bef-2c82-4b3b-afc0-55a32b91969c.jpg"/>
              <img src="http://7.xiustatic.com/H5/2019/01/17/e45007e0-cc61-4b8e-acf9-2de5359de271.jpg"/>
            </p>
            </div>
            <div className="yi">
            <ul>
              <Link to= {"search/searchlist/大衣"}>
                <img src="http://8.xiustatic.com/H5/2019/02/28/38104051-b500-47ae-a342-35bced88491d.jpg"/><span className='hie'>大衣</span>
              </Link>
              <li><img src="http://8.xiustatic.com/H5/2019/02/28/4236036c-dd53-466d-8b01-c883ae3a973c.jpg"/><span>裤子</span></li>
              <li><img src="http://8.xiustatic.com/H5/2019/02/28/eab4d9f8-0db9-471f-a904-e5a341bd9e09.jpg"/><span>风衣</span></li>
              <li><img src="http://6.xiustatic.com/H5/2019/02/28/c51497bb-f863-483f-814a-3a26a2493a69.jpg"/><span>包包</span></li>
              <li><img src="http://8.xiustatic.com/H5/2019/02/28/85aec1ef-e535-4660-9280-0c371770ae80.jpg"/><span>衬衫</span></li>
              <li><img src="http://8.xiustatic.com/H5/2019/02/28/bb05d281-ae7c-40d1-9ee4-1b32b50f2d7a.jpg"/><span>短袖</span></li>
              <li><img src="http://6.xiustatic.com/H5/2019/02/28/9d91acb1-5d90-4b19-897a-b85d9741f19d.jpg"/><span>短袖</span></li>
              <li><img src="http://6.xiustatic.com/H5/2019/02/28/5fe47c0c-1632-4e98-9c97-9c1bc8c90e14.jpg"/><span>牛仔裤</span></li>
              <li><img src="http://6.xiustatic.com/H5/2019/02/28/a107b152-636d-45e7-9e04-1e84cd128a23.jpg"/><span>平底鞋</span></li>
              <li><img src="http://7.xiustatic.com/H5/2019/02/28/84b86629-7b08-46af-a7c6-8b39c3b0acdf.jpg"/><span>高跟鞋</span></li>
              <li><img src="http://7.xiustatic.com/H5/2019/02/28/d874a0db-414b-4711-be53-ff532d2e83f9.jpg"/><span>板鞋</span></li>
              <li><img src="http://6.xiustatic.com/H5/2019/02/28/d0f5737d-6bbb-4108-9756-d52c23a5066e.jpg"/><span>大头鞋</span></li>
            </ul>
            </div>
            <div className = "tui">
            <h3><span></span><i>精选推荐</i><span></span></h3>
            <p>
              <img src="http://6.xiustatic.com/H5/2019/02/27/0090f05b-53f2-42c0-bd73-cff93c365deb.jpg"/>
              <img src="http://6.xiustatic.com/H5/2019/02/21/fd058ee0-6e45-400d-ba37-aacd6511457b.jpg"/>
              <img src="http://8.xiustatic.com/H5/2019/02/22/6748a5a0-f5eb-4347-ba17-4243b17f9634.jpg"/>
              <Link to= {"search/searchlist/短袖"}>
                <img src="http://7.xiustatic.com/H5/2019/02/20/a1c3bbe9-9060-4c7a-a1cb-52366e36dbcc.jpg"/>
              </Link>
            </p>
            </div>
         <ul className="list">
          { Html }
        </ul>
      </div>
     </div>
      </div>

    )
  }

}

export default Com
