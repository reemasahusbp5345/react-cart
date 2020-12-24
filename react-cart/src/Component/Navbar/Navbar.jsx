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
    overflow:hidden;
    position: fixed;
    background-color: #ffe0b2;
    width:100%;
    padding:20px;
    top:0;
    height: 80px;
    display:flex;
    line-height: normal;
    &.wrapper > *{
        flex:1;
    }
`

const NavbarLeft = styled.div`
    padding-left: 20px;
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