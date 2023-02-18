import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import givepanda from "../assets/images/png/givepanda-img.png";
import shade from "../assets/images/png/givepanda-shade.png";

const Givepanda = () => {
  return (
    <section className="page_bg py-5 position-relative">
      <img
        className="position-absolute givepanda_shade_set"
        src={shade}
        alt="shade"
      />
      <Container>
        <Row className="givepanda_row_bg position_lg_relative py-5 z_index_2">
          <Col md={7} className="mb-5 mb-md-0">
            <div className="ps-md-5">
              <h2 className="ff_philosopher fw_regular fs_2xl text-white pt-md-3">
                High <span className="clr_1"> Thoughts,</span> Low{" "}
                <span className="clr_1"> Prices </span>
              </h2>
              <p className="ff_montserrat fw_regular fs_md text-white mb-0 mt-3">
                We pride ourselves on supplying premium, top-shelf weed without
                the top-shelf markups. Some dispensaries will charge an arm and
                a leg for the newest “flavors”, but we believe in fair,
                affordable prices for good products at every level of quality
                and breed.
              </p>
              <button className="ff_montserrat fw_bold fs_xmd text-white signin_btn mt-3 mt-xl-5 mb-md-3">
                GIVE PURPLE PANDA A GO
              </button>
            </div>
          </Col>
          <Col md={5}>
            <div className="position_lg_absolute givepanda_overflow">
              <img className="w-100" src={givepanda} alt="givepanda" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Givepanda;
