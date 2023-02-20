import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import leaf from "../assets/images/png/express-leaf.png";

const Express = () => {
  return (
    <section className="page_bg py-5">
      <Container>
        <Row className="align-items-center py-lg-5 ">
          <Col md={7} className="mb-5 mb-md-0">
            <div>
              <img className="w-100" src={leaf} alt="leaf" />
            </div>
          </Col>
          <Col md={5}>
            <div data-aos="flip-right" data-aos-duration="1500">
              <div className="about_box">
                <h2 className="ff_philosopher fw_regular fs_2xl text-white">
                  <span className="clr_1">Express</span> Cannabis Delivery
                </h2>
                <p className="ff_montserrat fw_regular fs_md text-white mb-0 mt-3">
                  One of the ways that we set ourselves apart from your average
                  dispensary is through our express delivery service. We’ve all
                  been there – work has finished early and you’ve gotten home,
                  but your jar is empty and the nearest dispensary is miles
                  away. With our service, you could have a box of premium
                  pre-rolls, a bag of bodacious buds, or a package of enticing
                  edibles at your door in just three hours!
                </p>{" "}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Express;
