
import React from "react"
import "./index.css"
import logo from "static/images/logo.png"

import { Form, Icon, Input, Button } from 'antd';

import {connect} from "react-redux"
import {loginActionAsync} from "action/user"


class Login extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={"main"}>
                <img src={logo} alt="logo" />
                <Form onSubmit={this.props.handleSubmit.bind(this)} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {    
                        rules: [{ required: true, message: '请输入您的用户名！' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        className={"input"}
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入您的密码！' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        className={"input"}
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    <Button
                     htmlType="submit"
                     type="primary"
                     className="login-form-button">
                        登录
                    </Button>
                    <Button htmlType="submit" className="login-form-button">
                        注册
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    } 
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
 
const mapDispatchToPorps = (dispatch)=>({
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((values)=>{
            dispatch(loginActionAsync(values))
        })
        this.props.history.push("./admin")
    }
})

export default connect(null,mapDispatchToPorps)(WrappedNormalLoginForm)