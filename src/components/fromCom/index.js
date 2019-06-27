
import React from "react"
import { Form, Icon, Input,} from 'antd';

import {connect} from "react-redux"

class FormCom extends React.Component{
    render (){
        let {data} = this.props;
        const { getFieldDecorator } = this.props.form;
        return(
            <Form
              labelCol={{span:6}}
              wrapperCol={{span:15}}
              onSubmit={this.handleSubmit} className="login-form">
              <Form.Item label="店铺名称">
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '店铺名称不能为空！' }],
                  initiaValue: data.name
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="新的店铺名称"
                  />
                )}
              </Form.Item>
              <Form.Item label="商家地址">
              {getFieldDecorator('address', {
                rules: [{ required: true, message: '商家地址不能为空！' }],
                initiaValue: data.address
              })(
                  <Input
                    prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="新的商家地址"
                  />
              )}
              </Form.Item>
              <Form.Item label="商家电话">
              {getFieldDecorator('tel', {
                rules: [{ required: true, message: '商家电话不能为空！' }],
                initiaValue: data.tel
              })(
                  <Input
                    prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="新的商家电话"
                  />
              )}
              </Form.Item>
            </Form>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FormCom);

const mapStateToProps = (state)=>({
    data:state.tab.data
})

export default connect(mapStateToProps)(WrappedNormalLoginForm)