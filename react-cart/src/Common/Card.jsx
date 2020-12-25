import React, { Component } from 'react';
import { DataContext } from '../Context/DataContextProvider';
import styled from "styled-components"
import { Link, Redirect } from 'react-router-dom';

const CardWrapper=styled.div`
    display:flex;
    flex-direction:row;
    margin:10px;
    padding:10px;
    cursor:pointer;
    .card{
        padding:10px;
        margin:10px;
    }
     
     
`
 

class Card extends Component {
    selectCategory=(id)=>{
        console.log(id)
        const {history}=this.props;
        console.log(this.props)
    }
    render() {
        const {category  }=this.context;
        //  console.log(product)
        return (
            <div>
                <h1 style={{textAlign:"left",marginLeft:20,color:"whitesmoke"}}>Top Picks For You</h1>
            <CardWrapper  >
               {category.map(item=>
                <div key={item.id} className="card" onClick={()=>this.selectCategory(item.id)}>
                    
                    <img src={item.category_img}/>
                    <p className="name">{item.category_name}</p>
                    
                </div>)} 
            </CardWrapper>
            
            </div>
        );
    }
}
Card.contextType=DataContext
export default Card;