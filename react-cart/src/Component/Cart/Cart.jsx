import React, { Component } from "react";
import styled from "styled-components";
import { DataContext } from "../../Context/DataContextProvider";
import CartItem from "./CartItem";
import {Link} from "react-router-dom"

const Container = styled.div`
  padding: 25px;
  margin: 20px;
  display: flex;
`;

const Left = styled.div`
  flex: 0.7;
  border: 1px solid grey;
  margin: 10px;
`;
const Right = styled.div`
  flex: 0.3;
  border: 1px solid grey;
  height:300px;
  padding:30px;

  .checkout{
      border:0px;
      color:white;
      background:#00c853;
      padding:10px;
      border-radius:5px;
      width:300px;
  }
  .shopping{
      border:0px;
      color:white;
      background:grey;
      padding:10px;
      border-radius:5px;
      width:200px;
  }
`;

class Cart extends Component {
  render() {
    const { cart,getTotalBill } = this.context;
    console.log(this.props);
    return (
      <div style={{ marginTop: 100 }}>
        <h1 style={{ textAlign: "left", marginLeft: 70 }}>
          MY CART ({cart.length})
        </h1>
        <Container>
          {cart.length == 0 ? (
            <h1>Your Cart Is Empty</h1>
          ) : (
            <Left>
              {cart.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Left>
          )}
          {cart.length == 0 ? <div></div> :
           <Right>
               <h2>₹ {getTotalBill()}</h2>
               <p>including all taxes</p>
               <Link to="/order-placed" className="checkout">CONTINUE TO CHECKOUT</Link>

               <p>Explore more gift option</p>
                <Link to="/products"  className="shopping"> CONTINUE SHOPPING</Link> 
         </Right>}
        </Container>
      </div>
    );
  }
}

Cart.contextType = DataContext;

export default Cart;
