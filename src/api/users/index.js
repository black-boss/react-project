

import http from "utils/request";

export const login =(userInfo)=>http.post('/app/mock/222514/users/login',userInfo)