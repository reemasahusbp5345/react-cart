import React, { Component } from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import About from '../Component/About/About';
import Cart from '../Component/Cart/Cart';
import Contact from '../Component/Contact/Contact';
import Dashboard from '../Component/Home/Home';
import Faq from '../Component/Faq/Faq';
import {Footer} from '../Component/Footer/Footer';
import Login from '../Component/Login/Login';
import { Navbar } from '../Component/Navbar/Navbar';
import Products from '../Component/Products/Products';
import Card from '../Common/Card';
import ViewProduct from '../Component/ViewProduct/ViewProduct'
import Home from '../Component/Home/Home';
import BestSeller from '../Common/BestSeller';
import Success from '../Component/Cart/Success';

class Routing extends Component {
    render() {
        return (
            <div>
                <Navbar/> 
                <Link to="/bestseller"></Link>
                <Switch>
                    <Route path="/" exact render={(props)=><Home {...props}/>}/>
                    <Route path="/products" exact render={(props)=><Products {...props}/>}/>
                    <Route path="/bestseller" exact render={(props)=><BestSeller {...props}/>}/>
                    <Route path="/products/:product_id" exact render={(props)=><ViewProduct {...props}/>}/>
                    <Route path="/about-us" component={About}/>
                    <Route path="/faq" component={Faq}/>
                    <Route path="/contact-us" component={Contact}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/order-placed" {...this.props} component={Success} />
                </Switch>
                <hr/>
                <Route path="/" component={Footer}/>
            </div>
        );
    }
}

export default Routing;