import React, { Component } from 'react';
import { DataContext } from '../../Context/DataContextProvider';
import styled from "styled-components";
import {Link} from "react-router-dom"

const Container=styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr ;
margin:10px;
padding:10px;
cursor:pointer;
img{
    width:200px;
    align-item:center;
}
.card{
    padding:10px;
    margin:10px;
}
.card:hover{
    color:orange;
    border:2px solid orange;
    box-shadow: 10px 10px #fce4ec;
}
`

class Products extends Component {
    handleProduct=(id)=>{
       const {history}=this.props;
       history.push(`products/${id}`)
    }
    render() {
        const {product} =this.context;
        console.log(product)
        return (
            <div style={{marginTop:"140px"}}>
               <Container>
                   {product.map(item=><div className="card" key={item.id}>
                       
                       <img src={item.product_url} alt={item.product_name} onClick={()=>this.handleProduct(item.id)}/>
                       <p >{item.product_name}</p>
                       
                   </div>)}
               </Container>
            </div>
        );
    }
}
Products.contextType=DataContext
export default Products;