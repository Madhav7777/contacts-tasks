import { BUY_LAPTOP,BUY_MOBILE,FETCH_USER_REQUEST,FETCH_SUCCESS_REQUEST,FETCH_ERROR_REQUEST } from "./actiontypes";
const axios = require('axios')

export const buylaptop=()=>{
    return{
       type:BUY_LAPTOP
    }
   }
   
export const buymobile=()=>{
    return{
        type:BUY_MOBILE
    }
}

export const fetchUsersRequest=()=>{
    return {
        type:FETCH_USER_REQUEST,
    }
}

export const fetchSuccessRequest=(users)=>{
    return {
        type:FETCH_SUCCESS_REQUEST,
        data:users
    }
}

export const fetchErrorRequest=(error)=>{
    return {
        type:FETCH_ERROR_REQUEST,
        data:error
    }
}

export const fetchuser=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response =>{
                let user=response.data.map(user => user.id);
                dispatch(fetchSuccessRequest(user));
            })
            .catch(error =>{
                dispatch(fetchErrorRequest(error))
            })
    }
}