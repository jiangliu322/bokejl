import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import classNames from 'classnames/bind';
import { FormOutlined } from '@ant-design/icons';
import './navbastyler.css'
import headimg from '../../assets/img/微信图片_20200320100359.jpg'
import loginMsg from '../../requests/index'
export default class navbar extends Component {
  state = {
    docked: false,
    linumber: [1,2,3,4,5,6,7,8,9,0],
    isshowdiv: false,
    navList: [
      {url: '',id: '1', title: '测试1', imgPath: ''},
      {url: '',id: '2', title: '测试2', imgPath: ''},
      {url: '',id: '3', title: '测试3', imgPath: ''}
    ],
    qianming: '业精于勤荒于嬉,行成于思毁于随！',
    name: '',
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
  saveValueMsg = () => {
    if(this.refs.changeqianming.value !== ''){
      this.setState({
        qianming: this.refs.changeqianming.value
      })
    }
    this.changeqianming()
  }
  componentDidMount(){
    let param = {
      "data": {
        "id":"0001",
        "transtype":"loginMsg"
      }
    }
    loginMsg(param).then(res => {
      console.log(res)
      if(res.data.code === 200){
        this.setState({
          qianming: res.data.data.qianming,
          name: res.data.data.name
        })
      }
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
        <div className={classNames('porvpage', {'showporvpage': this.state.docked === true}, {'notshowporvpage': this.state.docked === false && this.state.isshowdiv})}>
          <div className="header">
            <img src={headimg} alt="头像"/>
        <span className='nameSpan'>{this.state.name}</span>
            <p className={classNames({'showqianming' : !this.state.showqianming})}>{this.state.qianming} <FormOutlined className='bianjiicon' onClick={() => this.changeqianming()} /></p>
            <input ref= 'changeqianming' className={classNames({'showqianming' : this.state.showqianming})} type="text"/>
            <div className={classNames( 'inputOver', {'showqianming' : this.state.showqianming})} onClick={() => this.saveValueMsg(this)}>保存</div>
          </div>
          <span className='daohang'>导航</span>
          <ul className='daohangliebiao'>
            {this.state.navList.map(item => {
              return <li key={item.id}>{item.title}</li>
            })}          </ul>
        </div>
      </div>
      
    )
  }
}
