import React, { Component } from 'react'
import './style.css'
import {buylaptop,buymobile,fetchuser} from './Redux/actions'
import {connect} from 'react-redux'

export class ReduxExamp extends Component {
  
  render() {
    return (
          <div>
        <h1 className="title">Welcome V Shop</h1>
        <div className="head">
        <div className="item">
        <p >Total Laptops are{this.props.nooflaptops}</p>
        <button onClick={this.props.buylaptop} >Buy</button>
        </div>
        <div className="item">
        <p >Total mobiles are{this.props.noofmobiles}</p>
        <button onClick={this.props.buymobile} >Buy</button>
        </div>
        <div className="item">
        <p >Total users are{this.props.usersdata.length}</p>
        <button onClick={this.props.fetchusers} >Buy</button>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  
  return {
    nooflaptops : state.laptop.nooflaptops,
    noofmobiles : state.mobiles.noofmobiles,
    usersdata : state.users.users
  }
}

const mapDispatchToProps = (dispatch)=>{
  return { 
    buylaptop:()=>{ dispatch(buylaptop())},
    buymobile:()=>{ dispatch(buymobile())},
    fetchusers:()=>{ dispatch(fetchuser()) },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxExamp)
