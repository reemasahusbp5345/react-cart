import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import About from '../Component/About/About';
import Cart from '../Component/Cart/Cart';
import Contact from '../Component/Contact/Contact';
import Dashboard from '../Component/Home/Home';
import Faq from '../Component/Faq/Faq';
import {Footer} from '../Component/Footer/Footer';
import Login from '../Component/Login/Login';
import { Navbar } from '../Component/Navbar/Navbar';
import Products from '../Component/Products/Products';

class Routing extends Component {
    render() {
        return (
            <div>
                <Navbar/> 
                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/products" exact component={Products}/>
                    <Route path="/about-us" component={About}/>
                    <Route path="/faq" component={Faq}/>
                    <Route path="/contact-us" component={Contact}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/cart" component={Cart}/>
                </Switch>
                <hr/>
                <Route path="/" component={Footer}/>
            </div>
        );
    }
}

export default Routing;