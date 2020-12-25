import React, { Component } from "react";
import styled from "styled-components";
import BestSeller from "../../Common/BestSeller";
import Card from "../../Common/Card";

const Container = styled.div`
  margin-top: 100px;
`;
const Banner = styled.div`
 
 img{
     width:1300px;
     height:500px;
     margin:20px;
 }
`;
const CategoryWrapper=styled.div`
 background:#ff5722;
`
 

class Home extends Component {
  render() {
    return (
      <Container>
        <Banner>
            <div>
            <img src="/banner1.png" alt="banner" />
            </div>
        </Banner>
        <CategoryWrapper>
        <Card/>
        </CategoryWrapper>
        <BestSeller/>
      </Container>
    );
  }
}

export default Home;