import React, { Component } from 'react';
import { DataContext } from '../../Context/DataContextProvider';
import styled from "styled-components";
import { Redirect } from 'react-router-dom';

const Container=styled.div`
    display:flex;
    flex-direction:row;
    margin-top:100px;
    color:#e65100;
    margin-left:50px;
    .productDetails{
        margin-left:50px;
        text-align:left;
    }
    p{
        color:grey;
    }
    button{
        border:0px;
        color:white;
        background:orange;
        border-radius:3px;
        padding:10px;
        width:200px;
        margin-top:50px;
    }
`

class ViewProduct extends Component {
    constructor(props){
        super(props)
        this.state={
            product:""
        }
    }
    componentDidMount(){
       const {product_id}=this.props.match.params 
       const {getProductById}=this.context;
       this.setState({
           product:getProductById(product_id)
       })
    }
    render() {
        const {product} = this.state;
         const {addToCart}=this.context;
        //  console.log(this.props)
        return (
            <Container>
                <div>
               <img src={product.product_url} alt={product.product_name}/> 
                </div>
               <div className="productDetails">
                   <h1>{product.product_name}</h1>
                   <h2>₹ {product.price}</h2>
                   <p>inclusive of all taxes</p>
                   <div>
                       <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
                   </div>
               </div>
            </Container>
        );
    }
}
ViewProduct.contextType=DataContext
export default ViewProduct;