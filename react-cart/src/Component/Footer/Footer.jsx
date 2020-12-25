import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  TwitterOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const FooterWrapper = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }
  h4 {
    padding-left: 15px;
    color: #e65100;
    display: flex;
  }
`;

const MainFooter = styled.div`
  display: flex;
  padding: 20px;
  background-color: #ffe0b2;
`;

const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/products",
    title: "Products",
  },
  {
    to: "/about-us",
    title: "About",
  },
  {
    to: "/faq",
    title: "FAQ",
  },
  {
    to: "/contact-us",
    title: "Contact",
  },
  {
    to: "/job-opportunities",
    title: "Job Opportunities",
  },
];

const social = [
  {
    to: "/twitter",
    title: "Twitter",
    icon: <TwitterOutlined style={{ fontSize: "30px", color: "#ff6d00" }} />,
  },
  {
    to: "/linkedin",
    title: "linkedin",
    icon: <LinkedinOutlined style={{ fontSize: "30px", color: "#ff6d00" }} />,
  },
  {
    to: "/facebook",
    title: "Facebook",
    icon: <FacebookOutlined style={{ fontSize: "30px", color: "#ff6d00" }} />,
  },
  {
    to: "/instagram",
    title: "Instagram",
    icon: <InstagramOutlined style={{ fontSize: "30px", color: "#ff6d00" }} />,
  },
];

const Footer = () => {
  return (
    <MainFooter>
      <FooterWrapper>
        <h4>Gifts Gallore</h4>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            style={{ padding: 10, color: "#ff6d00" }}
          >
            {link.title}
          </NavLink>
        ))}
      </FooterWrapper>
      <FooterWrapper style={{ position: "absolute", right: 40 }}>
        <h4>Connect With Us</h4>
        <div className="MediaIcon">
          {social.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={{ padding: 20, color: "#ff6d00", height: 30 }}
            >
              {item.icon}
            </NavLink>
          ))}
        </div>
        <div style={{position:"absolute",top:150,right:40,fontWeight:"bolder",color:"#ff6d00"}}>&#169; Gifts Gallore</div>
      </FooterWrapper>
    </MainFooter>
  );
};

export { Footer };