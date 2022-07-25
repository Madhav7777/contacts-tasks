import {BUY_MOBILE} from '../actions/actiontypes';
 
const initialState = {
    noofmobiles :1000
}

const mobilereducer=(state=initialState,action)=>{
        switch(action.type){
            case BUY_MOBILE:
                return{noofmobiles:state.noofmobiles-1}
            default: 
                return state
        }
}

export default mobilereducer