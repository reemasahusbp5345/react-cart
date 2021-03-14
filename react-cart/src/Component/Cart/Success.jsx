import React, { Component } from 'react'

export default class Success extends Component {
 

    render() {
        console.log(this.props)
        return (
            <div style={{height:"180px"}}>
               <h1 style={{marginTop:"20px"}}>Yay ! Your Order is placed Successfully</h1> 
            </div>
        )
    }
}
