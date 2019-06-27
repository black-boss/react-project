

import React from "react"

import { Modal } from 'antd';
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
    render(){
        return(
            <div>
               
            </div>
        )
    }
}