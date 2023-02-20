import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mailorder1 from "../assets/images/svg/mailorder-img1.svg";
import mailorder2 from "../assets/images/svg/mailorder-img2.svg";
import mailorder3 from "../assets/images/svg/mailorder-img3.svg";
import overlay from "../assets/images/png/mail-order-overlay.png";
import shade from "../assets/images/png/ourrange-shadow.png";
import Carousel from "react-bootstrap/Carousel";

const Mailorder = () => {
  return (
    <section className="mail_bg py-5 position-relative">
      <img
        className="position-relative overlay_mailorder w-100"
        src={overlay}
        alt="overlay"
      />
      <img
        className="position-absolute ourrange_overflow z_index_1"
        src={shade}
        alt="shade"
      />
      <Container>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <h2 className="ff_philosopher fw_bold fs_2xl text-white text-center">
            Canada Wide<span className="clr_1"> Mail Orders</span>
          </h2>
          <p className="ff_montserrat fw_regular fs_md text-white opacity_2 text-center mt-3 mb-4 mb-sm-0">
            Purple Panda offers discreet mail orders to all provinces in Canada,
            we have new list of products everyday to serve your{" "}
            <span className="d-lg-block">
              {" "}
              needs whether its recreational or medinical use. We ship the next
              business day from Monday-Thursdays, EMT payment is
            </span>{" "}
            required for all mail orders
          </p>
        </div>
        <Carousel className="d-sm-none">
          <Carousel.Item>
            <div className="mailorder_box pb-5 px-4 h-100 mt_70">
              <div className="d-flex flex-column justify-content-center align-items-center circle_overflow">
                <div className="circle_dark">
                  <div className="text-center circle_white">
                    <p className="mb-0 ff_montserrat fw_semibold fs_base clr_1">
                      01
                    </p>
                  </div>
                </div>
              </div>
              <img className="mt-4" src={mailorder1} alt="mailorder1" />
              <p className="ff_montserrat fw_regular fs_md text-white opacity_1  mt-3">
                Register for an account first, then head on other to our shop
                selection
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="mailorder_box pb-5 px-4 h-100 mt_70">
              <div className="d-flex flex-column justify-content-center align-items-center circle_overflow">
                <div className="circle_dark">
                  <div className="text-center circle_white">
                    <p className="mb-0 ff_montserrat fw_semibold fs_base clr_1">
                      02
                    </p>
                  </div>
                </div>
              </div>
              <img className="mt-4" src={mailorder2} alt="mailorder2" />
              <p className="ff_montserrat fw_regular fs_md text-white opacity_1 mt-3">
                Register for an account first, then head on other to our shop
                selection
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="mailorder_box pb-5 px-4 h-100 mt_70">
              <div className="d-flex flex-column justify-content-center align-items-center circle_overflow">
                <div className="circle_dark">
                  <div className="text-center circle_white">
                    <p className="mb-0 ff_montserrat fw_semibold fs_base clr_1">
                      03
                    </p>
                  </div>
                </div>
              </div>
              <img className="mt-4" src={mailorder3} alt="mailorder3" />
              <p className="ff_montserrat fw_regular fs_md text-white opacity_1 mt-3">
                Register for an account first, then head on other to our shop
                selection
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="py-5 mt-5 d-none d-sm-flex">
            <Col md={4} className="mb-5 mt-5">
              <div className="mailorder_box pb-5 px-4 h-100">
                <div className="d-flex flex-column justify-content-center align-items-center circle_overflow">
                  <div className="circle_dark">
                    <div className="text-center circle_white">
                      <p className="mb-0 ff_montserrat fw_semibold fs_base clr_1">
                        01
                      </p>
                    </div>
                  </div>
                </div>
                <img className="mt-4" src={mailorder1} alt="mailorder1" />
                <p className="ff_montserrat fw_regular fs_md text-white opacity_1  mt-3">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-5 mt-5">
              <div className="mailorder_box pb-5 px-4 h-100">
                <div className="d-flex flex-column justify-content-center align-items-center circle_overflow">
                  <div className="circle_dark">
                    <div className="text-center circle_white">
                      <p className="mb-0 ff_montserrat fw_semibold fs_base clr_1">
                        02
                      </p>
                    </div>
                  </div>
                </div>
                <img className="mt-4" src={mailorder2} alt="mailorder2" />
                <p className="ff_montserrat fw_regular fs_md text-white opacity_1 mt-3">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-5 mt-5">
              <div className="mailorder_box pb-5 px-4 h-100">
                <div className="d-flex flex-column justify-content-center align-items-center circle_overflow">
                  <div className="circle_dark">
                    <div className="text-center circle_white">
                      <p className="mb-0 ff_montserrat fw_semibold fs_base clr_1">
                        03
                      </p>
                    </div>
                  </div>
                </div>
                <img className="mt-4" src={mailorder3} alt="mailorder3" />
                <p className="ff_montserrat fw_regular fs_md text-white opacity_1 mt-3 position-relative z_index_2">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Mailorder;
