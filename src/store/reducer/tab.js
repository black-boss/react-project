

const defaultState = {
    data:{}
}

export default (state=defaultState,action)=>{
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "TAB_SAVE":
            let tabState = JSON.parse(JSON.stringify(state));
            tabState.data = action.value;
            // console.log(tabState.data)
            return tabState;
    }
    return state;
}