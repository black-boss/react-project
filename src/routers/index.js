
//  路由配置文件
import {
    Home,
    Users,
    Setting,
    Login,
    NotFound,
} from "views"

// 基础路由
export const mainRoute = [
    {
        pathname:"/login",
        component:Login
    },
    {
        pathname:"/404",
        component:NotFound
    }
]

//页面级别路由
export const pageRoute = [
    {
        pathname:"/admin/home",
        component:Home,
        title:"首页",
        icon:"home"
    },
    {
        pathname:"/admin/setting",
        component:Setting,
        title:"班级管理",
        icon:"setting",
        children:[
            {
                title:"查看班级",
                pathname:"/admin/settings1"
            },
            {
                title:"测评管理",
                pathname:"/admin/settings2"
            }
        ]
    },
    {
        pathname:"/admin/users",
        component:Users,
        title:"用户管理",
        icon:"user",
        children:[
            {
                title:"用户列表",
                pathname:"/admin/users1"
            },
            {
                title:"用户权限",
                pathname:"/admin/users2"
            }
        ]
    }
]