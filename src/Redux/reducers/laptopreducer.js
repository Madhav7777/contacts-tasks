import {BUY_LAPTOP} from '../actions/actiontypes';
 
const initialState = {
    nooflaptops :999
}

const laptopReducer=(state=initialState,action)=>{
        switch(action.type){
            case BUY_LAPTOP:
                return{nooflaptops:state.nooflaptops-1}
            default: 
                return state
        }
}

export default laptopReducer