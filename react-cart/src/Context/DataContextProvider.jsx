import React, { Component } from "react";
import category from "./category.json";
import product from "./product.json";

export const DataContext = React.createContext();

class DataContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category,
      product,
      category_id: 1,
      cart: [],
    };
  }
  getProductById = (id) => {
    const { product } = this.state;
    const itemObj = product.find((item) => item.id === Number(id));
    return itemObj;
  };
  addToCart = (id) => {
    const { product, cart } = this.state;
    const productToAdd = product.find((item) => item.id === id);

    const payload = {
      ...productToAdd,
      qty: 1,
    };

    const searchCart = cart.findIndex((item) => item.id === id);

    if (searchCart === -1) {
      this.setState({
        cart: [...cart, payload],
      });
    } else {
      const newCart = cart.map((item, index) =>
        index === searchCart ? { ...item, qty: item.qty + 1 } : item
      );

      this.setState({
        cart: [...newCart],
      });
    }
  };
  deleteCart = (id) => {
    console.log(id);
    const { cart } = this.state;
    let updateCart = cart.filter((item) => item.id !== id);
    this.setState({
      cart: updateCart,
    });
  };
  getTotalBill = () => {
    const { cart } = this.state;
    const total = cart.reduce((a, c) => a + Number(c.qty) * Number(c.price), 0);

    return total;
  };
  render() {
    const { category, product, cart } = this.state;
    //  console.log(category)
    const { addToCart, getProductById, deleteCart, getTotalBill } = this;
    const value = {
      category,
      product,
      getProductById,
      addToCart,
      cart,
      deleteCart,
      getTotalBill,
    };
    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
