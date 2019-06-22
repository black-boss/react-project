
import React from "react"

import SliderNav from "common/sliderNav"
import TopNav from "common/topNav"

import "./index.css"

import { Layout } from 'antd';
const { Content, Sider} = Layout;


export default class LayoutCom extends React.Component{
    render(){
        return(
      <Layout>
          {/* 头部导航 */}
          <TopNav></TopNav> 

          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>

             {/* 侧边导航 */}
             <SliderNav></SliderNav>

            </Sider>
            <Layout style={{ padding: '24px 24px 24px' }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
        )
    }
}