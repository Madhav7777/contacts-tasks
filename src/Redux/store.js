import  {legacy_createStore as createStore,combineReducers,applyMiddleware,compose} from 'redux'
import laptopReducer from './reducers/laptopreducer'
import mobilereducer from './reducers/mobilereducer'
import usersReducer from './reducers/usersReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// import createStore from 'redux'
const rootreducer = combineReducers(
    {
        laptop:laptopReducer,
        mobiles:mobilereducer,
        users:usersReducer
    }
)

const store = createStore(rootreducer,compose(applyMiddleware(thunk,logger),ReactReduxDevTools))
export default store;