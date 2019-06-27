
import React,{Fragment} from 'react';

import {Switch,Route,Redirect} from "react-router-dom"
import {pageRoute} from "routers"
import LayoutCom from "layout"
import {connect} from "react-redux"

// class App extends React.Component{
//   render(){
//     return(
//       <Switch>
//         <Redirect from="/admin" to="/admin/home" exact />
//         <LayoutCom>
//           {
//             pageRoute.map((item,index)=>(
//               <Route key={index} path={item.pathname} render={()=>{
//                 return <item.component/>
//               }}/>
//             ))
//           }
//         </LayoutCom>
//         <Redirect from="**" to="/404"/>
//       </Switch>
//     )
//   }
// }

// export default App;


class App extends React.Component{
  render(){
    return(
      <Fragment>
        {
          this.props.token?
            <Switch>
              <Redirect from="/admin" to="/admin/home" exact />
              <LayoutCom>
                {
                  pageRoute.map((item,index)=>(
                    <Route key={index} path={item.pathname} render={()=>{
                      return <item.component/>
                    }}/>
                  ))
                }
              </LayoutCom>
              <Redirect from="**" to="/404"/>
            </Switch>:<Redirect to="/login"/>
        }
      </Fragment>
    )
  }
}

const mapStateToprops = (state)=>({
  token:state.user.token
})

export default connect(mapStateToprops)(App);