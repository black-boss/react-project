
const defaultState = {
    status:"",
    token:""||window.sessionStorage.getItem("token")
}

export default (state=defaultState,action) =>{
    switch(action.type){
        case "LOGIN_ACTION":
            let loginState = JSON.parse(JSON.stringify(state));
            loginState.status = action.value.data.status;
            loginState.token = action.value.data.token;
            return loginState;
    }
    return state;
}