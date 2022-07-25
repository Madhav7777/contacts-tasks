import { FETCH_USER_REQUEST,FETCH_SUCCESS_REQUEST,FETCH_ERROR_REQUEST } from "../actions/actiontypes";

const initialState = {
    users:[],
    error:"",
    isLoading:false
}


const usersReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST :
            return {...state,isLoading:true}
        case FETCH_SUCCESS_REQUEST :
            return{isLoading:false,users:action.data,error:""}
        case FETCH_ERROR_REQUEST :
            return{isLoading:false,users:[],error:action.data}
        default:
            return state;
    }
}

export default usersReducer