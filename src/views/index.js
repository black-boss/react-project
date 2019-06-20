
// import Home from "./home";
// import Login from "./login";
// import NotFound from "./NotFound";
// import Users from "./users";
// import Setting from "./setting";

import Loadable from "react-loadable";
import Loading from "common/loading"

//  路由懒加载
const Home = Loadable({
    loader: () => import('./home'),
    loading: Loading,
});

const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading,
});

const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading,
});

const Users = Loadable({
    loader: () => import('./users'),
    loading: Loading,
});

const Setting = Loadable({
    loader: () => import('./setting'),
    loading: Loading,
});

export {
    Home,
    Login,
    NotFound,
    Users,
    Setting,
}