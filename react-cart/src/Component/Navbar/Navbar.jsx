import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import styled from 'styled-components'
import  {ShoppingCartOutlined}  from '@ant-design/icons';

const Navbarcenter = styled.div`
    
    a {
        text-decoration: none;
        color: grey;
    }
`

const NavbarWrapper = styled.div`
    background-color: #ffe0b2;
    width:100%;
    padding-top:20px;
    top:0;
    height: 70px;
    display:flex;
    line-height: normal;
    
    &.wrapper > *{
        flex:1;
        display:block;
    }
`

const NavbarLeft = styled.div`
    padding-left: 20px;
    display:block;
    a {
        text-decoration: none;
        color: #e65100;
    }
`

const NavbarRight = styled.div`
    text-align: right;
    padding-right:20px; 
`

const links=[
    
     
    {
        to:"/products",
        title:"Products"
    },
    {
        to:"/about-us",
        title:"About"
    },
    {
        to:"/faq",
        title:"FAQ"
    },
    {
        to:"/contact-us",
        title:"Contact"
    },
    {
        to:"/login",
        title:"Login"
    }
]

const Navbar = () => {
    return (
        <NavbarWrapper className="wrapper">
        <NavbarLeft>
            <Link to="/">
                <h1>Gifts Gallore</h1>
            </Link>
        </NavbarLeft>
        <Navbarcenter>
        {
            links.map((link)=>
            (
                <NavLink 
                key={link.to} 
                to={link.to}
                style={{padding: 20}} >
                    {link.title}
                </NavLink>
            ))
        }
        </Navbarcenter>
        <NavbarRight>
            <Link to="/cart" >
            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#ff6d00' }}/> 
            </Link>
        </NavbarRight>
        </NavbarWrapper>
    );
}

export {Navbar}