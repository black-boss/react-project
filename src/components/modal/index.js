

import React from "react"

import WrappedNormalLoginForm from "../fromCom"

import { Modal} from 'antd';
const { confirm } = Modal;

function showConfirm() {
    confirm({
      title: '确定要删除这条信息吗?',
      content: '删除后将无法恢复！',
      cancelText:"取消",
      okText:"确定",
      onOk() {
        // console.log('确定');
      },
      onCancel() {
        // console.log('取消');
      },
    });
  }
export {showConfirm}  

export default class ModalCom extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        visible:""
      }
      this.state.visible = this.props.modalStatus;
    }
    componentWillReceiveProps(nextProps){
      this.state.visible = nextProps.modalStatus
    }
    handleOk = e => {
      // console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      // console.log(e);
      this.setState({
        visible: false,
      });
    };
    render(){
        return(
            <Modal
              title="修改商家信息"
              onOk={this.handleOk.bind(this)}
              onCancel={this.handleCancel.bind(this)}
              cancelText='取消'
              okText='确定'
              visible={this.state.visible}
            >
              <WrappedNormalLoginForm />
            </Modal>  
        )
    }
}