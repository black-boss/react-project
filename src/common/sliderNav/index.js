
import React from "react"
import {withRouter} from "react-router-dom"

import {pageRoute} from "routers"

import {Menu,Icon} from "antd"
const {SubMenu} = Menu;

class SliderNav extends React.Component{
    render(){
        return(
            <Menu
            mode="inline"
            defaultSelectedKeys={['/admin/home']}
            onClick={this.handleTo.bind(this)}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
                pageRoute.map((item)=>(
                    item.children?<SubMenu
                      key={item.pathname}
                      title={
                        <span>
                          <Icon type={item.icon} />
                          {item.title}
                        </span>
                      }
                    >
                    {
                      item.children.map((children)=>(
                        <Menu.Item key={children.pathname}>{children.title}</Menu.Item>
                      ))
                    }
                  </SubMenu>:<Menu.Item key={item.pathname}><Icon type={item.icon} />{item.title}</Menu.Item>
                ))
            } 
          </Menu>
        )
    }
    handleTo({key}){
      // console.log(key)
      // console.log(this)
      this.props.history.push(key)
    }
}

export default withRouter(SliderNav)