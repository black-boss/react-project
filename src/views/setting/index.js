

import React from "react"
import { Card, Button, Table, } from 'antd';
import "./index.css"

import { blist } from "api/blist"

import XLSX from "xlsx"

// const dataSource = [
//     {
//       key: '1',
//       name: '胡彦斌',
//       age: 32,
//       address: '西湖区湖底公园1号',
//     },
//     {
//       key: '2',  
//       name: '胡彦祖',
//       age: 42,
//       address: '西湖区湖底公园1号',
//     },
//   ];
  
//   const columns = [
//     {
//       title: '姓名',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//         title: '操作',
//         key:'operation',
//         render:()=><Button>删除</Button>
//     }
//   ];

export default class Setting extends React.Component{
    constructor(){
        super()
        this.state = {
            dataSource:[],
            columns:[],
            flag:true,
        }
    }
    render(){
        let {dataSource,columns,flag} = this.state
        return(
        <div style={{ background: '#ECECEC'}}>
            <Card
             title="商家列表" 
             bordered={false} 
             extra={<Button onClick={this.exportFile.bind(this)}>导出列表</Button>}>
            <Table  
                dataSource={dataSource} 
                columns={columns}
                loading={flag}
                rowKey={(record)=>record.id} 
                pagination={{
                    pageSize: 5,
                    total: 50,
                    hideOnSinglePage: true,
                    onChange: this.handleChange.bind(this),
                }}/>
            </Card>
        </div>
        )
    };
    handleChange(page, pageSize) {
        console.log(page, pageSize) //发送Ajax
    };
    async componentDidMount() {
        let data = await blist();
        console.log(data);
        if(data){
            this.setBlist(data)
        }
        }

    setBlist(data){
        let keys = Object.keys(data.data.list[0]);
        let mapKeys = {
            id:"id",
            name:"店铺名称",
            address:"商家地址",
            tel:"商家电话",
            logo:"logo"
        }
        console.log(keys)
        
        let columns = keys.map((item)=>{
            if(item === "logo"){
                return {
                    title: mapKeys[item],
                    dataIndex: item,
                    key: item,
                    render:(text)=><img alt="img" src={text} />
                }
            }else{
                return {
                    title: mapKeys[item],
                    dataIndex: item,
                    key: item,
                }
            } 
        })

        columns.push({
            title: "操作",
            key: "operation",
            render:(record)=>
            <div>
                <Button
                 type="primary"
                 onClick = {this.handleModify.bind(this,record)}
                 >编辑</Button>
                <Button
                 type="danger"
                 style={{margin:"0 5px"}}
                 onClick = {this.handleDel.bind(this,record)}
                >删除</Button>
            </div>
        })
        console.log(columns)

        this.setState({
            dataSource: data.data.list,
            columns,
            flag:false,
        })
    };

    handleModify(record){
        console.log(record)
    }
    handleDel(record){
        console.log(record)
    }

    // 导出列表文件
    exportFile(){

        let data = [Object.keys(this.state.dataSource[0])]
        for (var i= 0; i<this.state.dataSource.length; i++){
            data.push(Object.values(this.state.dataSource[i]))
        }

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(wb,ws,"SheetJs");
        XLSX.writeFile(wb,"商家列表.xlsx")
    }
}