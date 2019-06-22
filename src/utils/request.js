
import {fetch as fetchPro} from "whatwg-fetch"
import qs from "qs"

const get = (url)=>{
    return fetchPro(url,{
        credentials:"include",
        headers:{
            "Accept": "application/json, text/plain, */*",
        },
    }).then((res)=>res.json())
}

const post = (url,data={})=>{
    return fetchPro(url,{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },

        body: qs.stringify(data),

    }).then((res)=>res.json())
}

export default {
    get,
    post
}
