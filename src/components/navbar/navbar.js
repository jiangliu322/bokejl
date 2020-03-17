import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile';
export default class navbar extends Component {
  state = {
    docked: {'width': 0, 'display': 'none'},
    linumber: [1,2,3,4,5,6,7,8,9,0]
  }
  leftbtn = () => {
    if(this.state.docked.width === '60%'){
      this.setState({
        docked: {'width': 0, 'display': 'none'},
      });
    }else{
      this.setState({
        docked: {'width': '60%', 'display': 'block'},
      });
    }
    
    console.log(this.state.docked)
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
        >导航栏</NavBar>
        <ul 
        className={this.state.docked}
        style={{
          'listStyle': 'none',
          'margin': 0, 
          'padding': 0,
          'backgroundColor': 'skyblue',
          'position': 'fixed',
          'top': 0,
          'left': 0,
          'height': '100%',
          'paddingTop': '50px',
          'zIndex': 1
        }}>
          {
            this.state.linumber.map(item => {
            return <li style={{'lineHeight': '40px','textAlign': 'left'}} key={item}>{item}</li>
            })
          }
        </ul>
      </div>
      
    )
  }
}
