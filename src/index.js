import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import {mainRoute} from "routers"
import {Provider} from "react-redux"
import store from "store"

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
            <Route path="/admin" render={()=>{
                return <App />
                // return window.sessionStorage.getItem("token")?<App/>:<Redirect to="/login"/>
            }}></Route>
            {
                mainRoute.map((item,index)=>(
                    <Route key={index} path={item.pathname} component={item.component}/>
                ))
            }
            <Redirect from='/' to="/login" exact />
            <Redirect from="**" to={mainRoute[1].pathname}/>
            </Switch>
        </Provider>
    </Router>,
    document.getElementById('root')
);

