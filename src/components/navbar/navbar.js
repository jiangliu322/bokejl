import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile';
import classNames from 'classnames/bind';
import { FormOutlined } from '@ant-design/icons';
import './navbastyler.css'
import headimg from '../../assets/img/微信图片_20200320100359.jpg'
export default class navbar extends Component {
  state = {
    docked: false,
    linumber: [1,2,3,4,5,6,7,8,9,0],
    isshowdiv: false,
    navList: [
      {url: '', title: '1', imgPath: ''},
      {url: '', title: '2', imgPath: ''},
      {url: '', title: '3', imgPath: ''}
    ],
    qianming: '业精于勤荒于嬉,行成于思毁于随！',
    showqianming: true

  }
  leftbtn = () => {
    this.setState({
      docked: !this.state.docked,
      isshowdiv: true
    });
  }
  changeqianming = () => {
    this.setState({
      showqianming: !this.state.showqianming
    })
  }
  render() {
    return (
      <div>
        <NavBar
          style={{
            'height': '50px',
            'zIndex': 9999,
            'width': '100%',
            'position': 'fixed',
            'top': 0,
            'left': 0,
          }}
          mode="dark"
          icon={<Icon type="ellipsis" />}
          onLeftClick={() => this.leftbtn()}
        >首页</NavBar>
        <div className={classNames('porvpage', {'showporvpage': this.state.docked == true}, {'notshowporvpage': this.state.docked == false && this.state.isshowdiv})}>
          <div className="header">
            <img src={headimg} alt="头像"/>
            <span className='nameSpan'>江流</span>
            <p className={classNames({'showqianming' : !this.state.showqianming})}>{this.state.qianming} <FormOutlined onClick={() => this.changeqianming()} /></p>
            <input className={classNames({'showqianming' : this.state.showqianming})} type="text"/>
          </div>
          <span className='daohang'>导航</span>
          <ul className='daohangliebiao'>
            {this.state.navList.map(item => {
              return <li key={item.title}>{item.title}</li>
            })}
          </ul>
        </div>
      </div>
      
    )
  }
}
