import React, { Component } from "react";
import styled from "styled-components";
import BestSeller from "../../Common/BestSeller";
import Card from "../../Common/Card";
import BootstrapCarousel from "../BootstrapCarousel/BootstrapCarousel";
const Container = styled.div`
  margin-top: 20px;
`;

const CategoryWrapper = styled.div`
  background: #ff5722;
`;

class Home extends Component {
  render() {
    
    return (
      <Container>
        <BootstrapCarousel></BootstrapCarousel>

        <CategoryWrapper>
          <Card />
        </CategoryWrapper>
        <BestSeller {...this.props}/>
      </Container>
    );
  }
}

export default Home;
