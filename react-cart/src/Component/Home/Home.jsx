import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
`;
const Banner = styled.div`
 
 img{
     width:1300px;
     height:500px;
 }
`;

 

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Banner>
            <div>
            <img src="/banner1.png" alt="banner" />
            </div>
        </Banner>
      </Container>
    );
  }
}

export default Dashboard;
