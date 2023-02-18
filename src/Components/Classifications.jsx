import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import star from "../assets/images/svg/star-img.svg";
import overlay from "../assets/images/png/header-overlay.png";
import leaf from "../assets/images/png/classification-leaf.png";

const Classifications = () => {
  return (
    <section className="classification_bg py-5 position-relative">
      <img
        className="position-absolute overlay_set1 w-100"
        src={overlay}
        alt="overlay"
      />
      <img
        className="position-absolute leaf_set d-none d-md-block"
        src={leaf}
        alt="leaf"
      />
      <Container>
        <Row className="my-md-3">
          <Col lg={6}>
            <div className="ourrange_bg py-3 pe-3 py-md-5 pe-md-5 padding_left">
              <h2 className="ff_philosopher fw_bold fs_2xl text-white text_stroke">
                Our <span className="clr_1">Classifications</span>
              </h2>
              <p className="ff_montserrat fw_regular fs_md text-white">
                We’re proud of all our weed, but we still classify it based on
                quality and price, with our levels classed at:
              </p>
              <div className="d-flex gap-2">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <p className="ff_montserrat fw_semibold fs_lg text-white mb-0">
                2- Star
              </p>
              <p className="ff_montserrat fw_regular fs_md text-white">
                Very affordable , entry level quality
              </p>
              <div className="d-flex gap-2 mt-2 mt-md-4">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <p className="ff_montserrat fw_semibold fs_lg text-white mb-0">
                3- Star
              </p>
              <p className="ff_montserrat fw_regular fs_md text-white">
                Tried, tested, and affordable.
              </p>
              <div className="d-flex gap-2 mt-2 mt-md-4">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <p className="ff_montserrat fw_semibold fs_lg text-white mb-0">
                4- Star
              </p>
              <p className="ff_montserrat fw_regular fs_md text-white">
                A step up in terms of taste, high, and quality.
              </p>
              <div className="d-flex gap-2 mt-2 mt-md-4">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <p className="ff_montserrat fw_semibold fs_lg text-white mb-0">
                5- Star
              </p>
              <p className="ff_montserrat fw_regular fs_md text-white">
                Top-shelf buds for those special occasions.
              </p>
              <button className="ff_montserrat fw_bold fs_xmd text-white signin_btn mt-2 mt-lg-5">
                TRY PURPLE PANDA TODAY
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Classifications;
