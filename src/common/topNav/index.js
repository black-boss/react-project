
import React from "react"
import logo from "static/images/logo.png"

import { Layout, Menu, Icon} from 'antd';
const { Header } = Layout;
const { SubMenu }  = Menu;

export default class TopNav extends React.Component{
    render(){
        return(
            <Header className="header">
            <div className="logo" >
              <img src={logo} alt="logo"/>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">招生系统</Menu.Item>
              <Menu.Item key="2">教学系统</Menu.Item>
              <Menu.Item key="3">工单系统</Menu.Item>
            </Menu>
            
            <Menu mode="inline" className="userInfo">
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    <Icon type="setting" />
                    设置
                  </span>
                }
              >
                <Menu.Item className="tuichu" key="setting:1">退出登陆</Menu.Item> 
              </SubMenu>
            </Menu>
          </Header>
        )
    }
}