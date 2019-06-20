import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import {mainRoute} from "routers"

ReactDOM.render(
    <Router>
        <Switch>
           <Route path="/admin" render={()=>{
               return <App/>
           }}></Route>
           {
               mainRoute.map((item,index)=>(
                   <Route key={index} path={item.pathname} component={item.component}/>
               ))
           }
           <Redirect from='/' to="/admin" exact />
           <Redirect from="**" to={mainRoute[1].pathname}/>
        </Switch> 
    </Router>
    , 
    document.getElementById('root')
);

