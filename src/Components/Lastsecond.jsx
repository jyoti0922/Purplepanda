import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import teddybear1 from "../assets/images/png/teddybear1.png";
import teddybear2 from "../assets/images/png/teddybear2.png";
import teddybear3 from "../assets/images/png/teddybear3.png";
import Carousel from "react-bootstrap/Carousel";

const Lastsecond = () => {
  return (
    <section className="lastsecond_bg py-5">
      <Container>
        <Carousel className="d-sm-none">
          <Carousel.Item>
            <div>
              <img className="w-100" src={teddybear1} alt="teddybear1" />
              <p className="ff_philosopher fw_bold fs_base text-white mt-4 text-center">
                <span className="clr_1">20% Off</span> For First Time Customers
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img className="w-100" src={teddybear2} alt="teddybear2" />
              <p className="ff_philosopher fw_bold fs_base text-white mt-4 text-center">
                Purple Panda’s <span className="clr_1"> Picks Of The week</span>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img className="w-100" src={teddybear3} alt="teddybear3" />
              <p className="ff_philosopher fw_bold fs_base text-white mt-4 text-center">
                <span className="clr_1"> Collect rewards </span> points{" "}
                <span className="d-lg-block"> every time you </span> purchase
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="justify-content-center pt-md-5 mb-md-5 d-none d-sm-flex">
            <Col sm={6} md={4} className="mb-5 mb-md-0">
              <div>
                <img className="w-100" src={teddybear1} alt="teddybear1" />
                <p className="ff_philosopher fw_bold fs_base text-white mt-4 text-center">
                  <span className="clr_1">20% Off</span> For First Time
                  Customers
                </p>
              </div>
            </Col>
            <Col sm={6} md={4} className="mb-5 mb-md-0">
              <div>
                <img className="w-100" src={teddybear2} alt="teddybear2" />
                <p className="ff_philosopher fw_bold fs_base text-white mt-4 text-center">
                  Purple Panda’s{" "}
                  <span className="clr_1"> Picks Of The week</span>
                </p>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div>
                <img className="w-100" src={teddybear3} alt="teddybear3" />
                <p className="ff_philosopher fw_bold fs_base text-white mt-4 text-center">
                  <span className="clr_1"> Collect rewards </span> points{" "}
                  <span className="d-lg-block"> every time you </span> purchase
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Lastsecond;
