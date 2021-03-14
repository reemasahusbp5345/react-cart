import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
export class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "500px",width:"1500px" }}>
              <img
                style={{ height: "480px",width:"1400px"  }}
                className="d-block w-100"
                src={"banner1.png"}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px",width:"1500px"  }}>
              <img
                style={{ height: "480px",width:"1300px"  }}
                className="d-block w-100"
                src={"banner2.png"}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;
