import React, { Component } from 'react'
import creatHistory from 'history/createBrowserHistory';
import { Tabs, WhiteSpace } from 'antd-mobile';
import '@/scss/Kind.scss';
import { Link } from 'react-router-dom';
class Com extends Component {
  BackFn () {
    creatHistory().go(-1);
  }
  
  render () {
    const tabs = [
      { title: '男装' },
      { title: '女装' },
      { title: '化妆品' },
      { title: '手表' },
      { title: '百货' },
      { title: '首饰' },
      { title: '儿童玩具' }
    ];
    const TabExample = () => (
      <div style={{ height: 400 }}>
        <WhiteSpace />
        <Tabs tabs={tabs}
          initalPage={'t2'}
          tabBarPosition="left"
          tabDirection="vertical"
          className= "cbs"
        >
          <div className="tags">
            <Link to= {"search/searchlist/" + "男士皮衣"}>皮衣</Link>
            <Link to= {"search/searchlist/" + "男士T恤"}>T恤</Link>
            <Link to= {"search/searchlist/" + "男士皮裤"}>皮裤</Link>
            <Link to= {"search/searchlist/" + "男士马甲"}>马甲</Link>
            <Link to= {"search/searchlist/" + "男士夹克"}>夹克</Link>
            <Link to= {"search/searchlist/" + "男士内裤"}>内裤</Link>
            <Link to= {"search/searchlist/" + "男士袜子"}>袜子</Link>
            <Link to= {"search/searchlist/" + "男士牛仔裤"}>牛仔裤</Link>
            <Link to= {"search/searchlist/" + "男士针织衫羊毛衫"}>针织衫</Link>
            <Link to= {"search/searchlist/" + "男士休闲"}>休闲</Link>
            <Link to= {"search/searchlist/" + "男士休闲鞋"}>休闲鞋</Link>
            <Link to= {"search/searchlist/" + "男士大衣"}>大衣</Link>
            <Link to= {"search/searchlist/" + "男士西裤"}>西裤</Link>
            <Link to= {"search/searchlist/" + "男士连帽衫"}>连帽衫</Link>
            <Link to= {"search/searchlist/" + "男士羽绒服"}>羽绒服</Link>
          </div>
          <div className="tags">
            <Link to= {"search/searchlist/" + "女士大衣"}>大衣</Link>
            <Link to= {"search/searchlist/" + "雪纺衫"}>雪纺衫</Link>
            <Link to= {"search/searchlist/" + "连衣裙"}>连衣裙</Link>
            <Link to= {"search/searchlist/" + "女士牛仔裤"}>牛仔裤</Link>
            <Link to= {"search/searchlist/" + "女士风衣"}>风衣</Link>
            <Link to= {"search/searchlist/" + "女士POLO衫"}>POLO衫</Link>
            <Link to= {"search/searchlist/" + "连衣裙"}>连衣裙</Link>
            <Link to= {"search/searchlist/" + "女士牛仔裤"}>牛仔裤</Link>
            <Link to= {"search/searchlist/" + "女士衬衫"}>衬衫</Link>
            <Link to= {"search/searchlist/" + "女士长裤"}>长裤</Link>
            <Link to= {"search/searchlist/" + "女士棉服"}>棉服</Link>
            <Link to= {"search/searchlist/" + "打底裤"}>打底裤</Link>
            <Link to= {"search/searchlist/" + "女士紧身裤"}>紧身裤</Link>
            <Link to= {"search/searchlist/" + "女士外套"}>外套</Link>
            <Link to= {"search/searchlist/" + "女士马甲"}>马甲</Link>
            <Link to= {"search/searchlist/" + "连裤袜"}>连裤袜</Link>
            <Link to= {"search/searchlist/" + "女士羊毛衫"}>羊毛衫</Link>
            <Link to= {"search/searchlist/" + "女士泳衣"}>泳衣</Link>
            <Link to= {"search/searchlist/" + "女士皮衣"}>皮衣</Link>
            <Link to= {"search/searchlist/" + "女士腰带"}>腰带</Link>
          </div>
          <div className="tags">
            <Link to= {"search/searchlist/" + "护发素"}>护发素</Link>
            <Link to= {"search/searchlist/" + "香薰"}>香薰</Link>
            <Link to= {"search/searchlist/" + "染发膏"}>染发膏</Link>
            <Link to= {"search/searchlist/" + "洁面仪"}>洁面仪</Link>
            <Link to= {"search/searchlist/" + "面部精华"}>面部精华</Link>
          </div>
          <div className="tags">
            <Link to= {"search/searchlist/" + "手表"}>男士手表</Link>
          </div>
          <div className="tags">
            <Link to= {"search/searchlist/" + "奶嘴"}>奶嘴</Link>
            <Link to= {"search/searchlist/" + "浴巾"}>浴巾</Link>
            <Link to= {"search/searchlist/" + "漱口水"}>漱口水</Link>
            <Link to= {"search/searchlist/" + "圆珠笔"}>圆珠笔</Link>
            <Link to= {"search/searchlist/" + "榨汁机"}>榨汁机</Link>
            <Link to= {"search/searchlist/" + "脱毛器"}>脱毛器</Link>
            <Link to= {"search/searchlist/" + "地垫"}>地垫</Link>
            <Link to= {"search/searchlist/" + "魔法梳"}>魔法梳</Link>
            <Link to= {"search/searchlist/" + "太阳镜"}>太阳镜</Link>
            <Link to= {"search/searchlist/" + "牙膏"}>牙膏</Link>
            <Link to= {"search/searchlist/" + "电饭煲"}>电饭煲</Link>
            <Link to= {"search/searchlist/" + "居家香氛"}>居家香氛</Link>
          </div>
          <div className="tags">
            <Link to= {"search/searchlist/" + "戒指"}>戒指</Link>
            <Link to= {"search/searchlist/" + "女士项圈"}>项圈</Link>
            <Link to= {"search/searchlist/" + "手链"}>手链</Link>
            <Link to= {"search/searchlist/" + "吊坠"}>吊坠</Link>
          </div>
          <div className="tags">
            <Link to= {"search/searchlist/" + "儿童玩具"}>儿童玩具</Link>
          </div>
        </Tabs>
        <WhiteSpace />
      </div>
    );
    return (
      <div className = "content">
        <div className="nav">
          <span className="back iconfont icon-fanhui" onClick = { this.BackFn.bind(this) }></span>
          分类
        </div>
        <div className="want">
          <TabExample />
        </div>
      </div>
    )
  }

}

export default Com
