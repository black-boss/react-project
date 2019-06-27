
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
        title:"商家管理",
        icon:"setting",
        children:[
            {
                title:"商家列表",
                pathname:"/admin/setting"
            },
            {
                title:"商家店铺",
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
                title:"提交建议",
                pathname:"/admin/users"
            }
        ]
    }
]