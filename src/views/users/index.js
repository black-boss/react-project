

import React from "react"

import "./index.css"

import wangEditor from "wangeditor"

import { Button } from "antd"

export default class Users extends React.Component{
    render(){
        return(
            <>
                <div ref="content_editor"></div>
                <Button type="primary">提交</Button>
            </>
        )
    }
    componentDidMount(){
        this.editor2 = new wangEditor(this.refs.content_editor)
        this.editor2.create()
    }
}