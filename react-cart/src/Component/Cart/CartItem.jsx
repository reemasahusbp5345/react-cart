import React, { Component } from 'react';
import styled from "styled-components";
import  {DeleteOutlined}  from "@ant-design/icons";
import { DataContext } from '../../Context/DataContextProvider';

const Wrapper=styled.div`
    display:flex;
    padding:10px;
`

const MidContent=styled.div`
flex:2;
    margin-left:20px;
    text-align:left;
    p{
        color:#0091ea;
        font-weight:bold;
    }
    h2{
        color:#ef6c00;
    }
    cursor:pointer;
`
const Qty=styled.div`
    margin-left:100px;
    font-weight:bold;
`

class CartItem extends Component {

    handleDelete=(id)=>{
        const {deleteCart}=this.context;
        deleteCart(id)
        

    }
    render() {
        const {product_name,qty,price,product_url,id}=this.props
         
        return (
            <div>
                <Wrapper>
                    <div>
                        <img src={product_url} width="150px"/>
                    </div>
                    <MidContent>
                        <h2>{product_name}</h2>
                        <h4>₹ {price}</h4>
                        <p>+ Show Details</p>
                     
                   <div onClick={()=>this.handleDelete(id)}>  <DeleteOutlined /> Remove</div>
                    </MidContent>
                 <Qty>
                   <div>  Qty : {qty}</div>
                 </Qty>
                </Wrapper>
                <hr/>
            </div>
        );
    }
}
CartItem.contextType=DataContext
export default CartItem;