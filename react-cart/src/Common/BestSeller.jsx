import React, { Component } from 'react';
import styled from "styled-components"
import { DataContext } from '../Context/DataContextProvider';

const Bestseller=styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
    margin:10px;
    padding:10px;
    cursor:pointer;
    background:#8bc34a;
    img {
       width:200px;
    }
     p{
        position:absolute;
        margin-left:8px;
        background:green;
        border-radius:8px;
        color:white;
        width:80px;
    }
     
`
const Newarrival=styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
margin:10px;
padding:10px;
cursor:pointer;
background:#fff176;
img {
   width:200px;
}
 p{
    position:absolute;
    margin-left:8px;
    background:#ffc107;
    border-radius:8px;
    color:white;
    width:100px;
}

`;

const Premium=styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
margin:10px;
padding:10px;
cursor:pointer;
background:#f44336;
img {
   width:200px;
}
 p{
    position:absolute;
    margin-left:8px;
    background:#b71c1c;
    border-radius:8px;
    color:white;
    width:100px;
}`

class BestSeller extends Component {
    handleProduct=()=>{
        const {history}=this.props;
        console.log(history)
    }
    render() {
        const {product}=this.context;
       
        return (
            <div>
            <div>
                 <h1 style={{textAlign:"left",marginLeft:20,color:"green"}}>Best Seller </h1>
                 <Bestseller>
                {product.filter(item=>item.bestSeller).map(item=>
                    <div key={item.id}>
                        <p>Best Seller</p>
                        <img src={item.product_url} alt={item.product_name} width="200px" onClick={()=>this.handleProduct(item.id)}/>
                        <h6>{item.product_name}</h6>
                    </div>)}
            </Bestseller>
            </div>
            <div>
                 <h1 style={{textAlign:"left",marginLeft:20,color:"#ffc107"}}>New Arrival </h1>
                 <Newarrival>
                {product.filter(item=>item.newarrival).map(item=>
                    <div key={item.id}>
                        <p>New Arrival</p>
                        <img src={item.product_url} alt={item.product_name} width="200px"/>
                        <h6>{item.product_name}</h6>
                    </div>)}
            </Newarrival>
            </div>
            <div>
                 <h1 style={{textAlign:"left",marginLeft:20,color:"#b71c1c"}}>Premium </h1>
                 <Premium>
                {product.filter(item=>item.premium).map(item=>
                    <div key={item.id}>
                        <p>Premium</p>
                        <img src={item.product_url} alt={item.product_name} width="200px"/>
                        <h6>{item.product_name}</h6>
                    </div>)}
            </Premium>
            </div>
            </div>
        );
    }
}
BestSeller.contextType=DataContext;
export default BestSeller;