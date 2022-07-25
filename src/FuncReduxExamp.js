import React  from 'react'
import './style.css'
import {buylaptop,buymobile,fetchuser} from './Redux/actions'
import {connect,useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
 
export function FuncReduxExamp(props) {
  let state = useSelector(state=>state.users.users)
  let nooflaptops= useSelector(state=>state.laptop.nooflaptops)
  let noofmobiles= useSelector(state=>state.mobiles.noofmobiles)
    return (
          <div>
        <h1 className="title">Welcome V Shop</h1>
        <div className="head">
        <div className="item">
        <p >Total Laptops are{nooflaptops}</p>
        <button onClick={props.buylaptop} >Buy</button>
        </div>
        <div className="item">
        <p >Total mobiles are{noofmobiles}</p>
        <button onClick={props.buymobile} >Buy</button>
        </div>
        <div className="item">
        <p >Total users are{state.length}</p>
        <button onClick={props.fetchuser} >Buy</button>
        </div>
      </div>
      </div>
    )
  }


const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators(
    {
        buylaptop,
        buymobile,
        fetchuser

    },dispatch
  )
}

export default connect(null,mapDispatchToProps)(FuncReduxExamp)
