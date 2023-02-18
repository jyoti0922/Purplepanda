import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import purplecircle from "../assets/images/svg/Delivery-circle.svg";
import shade from "../assets/images/png/main-shadow.png";
import leafleft from "../assets/images/png/delivery-leaf-left.png";
import leaf from "../assets/images/png/classification-leaf.png";

const Delivery = () => {
  return (
    <section className="page_bg py-5 position-relative">
      <img
        className="position-absolute shade_set d-none d-md-block z_index_1"
        src={shade}
        alt="shade"
      />
      <img
        className="position-absolute delivery_leaf1 d-none d-md-block"
        src={leafleft}
        alt="leafleft"
      />
      <img
        className="position-absolute delivery_leaf2 d-none d-md-block"
        src={leaf}
        alt="leaf"
      />
      <Container>
        <h2 className="ff_montserrat fw_semibold fs_lg text-white text-center">
          We’re based in both the{" "}
          <span className="clr_1">Greater Toronto Area, </span> with{" "}
          <span className="d-lg-block"> our delivery service covering:</span>
        </h2>
        <p className="ff_montserrat fw_regular fs_md text-white opacity_1 text-center mt-md-3">
          If you’re in any of these cities and need a little pick me up, you
          know where to go!
        </p>
        <Row className="pt-5 pb-md-5 position-relative z_index_2">
          <Col md={6}>
            <div className="delivery_box mb-5">
              <div className="d-flex align-items-center gap-2 gap-lg-4">
                <img src={purplecircle} alt="purplecircle" />
                <p className="mb-0 ff_montserrat fw_regular fs_base text-white">
                  Mississauga
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 gap-lg-4 ">
                <img src={purplecircle} alt="purplecircle" />
                <p className="mb-0 ff_montserrat fw_regular fs_base text-white">
                  Oakville
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 gap-lg-4 ">
                <img src={purplecircle} alt="purplecircle" />
                <p className="mb-0 ff_montserrat fw_regular fs_base text-white">
                  Brampton
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 gap-lg-4 ">
                <img src={purplecircle} alt="purplecircle" />
                <p className="mb-0 ff_montserrat fw_regular fs_base text-white">
                  Etobicoke
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="delivery_box mb-md-5">
              <div className="d-flex align-items-center gap-2 gap-lg-4">
                <img src={purplecircle} alt="purplecircle" />
                <p className="mb-0 ff_montserrat fw_regular fs_base text-white">
                  Toronto
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 gap-lg-4 ">
                <img src={purplecircle} alt="purplecircle" />
                <p className="mb-0 ff_montserrat fw_regular fs_base text-white">
                  Vaughan
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 gap-lg-4 ">
                <img src={purplecircle} alt="purplecircle" />
                <p className="mb-0 ff_montserrat fw_regular fs_base text-white">
                  Markham
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 gap-lg-4 ">
                <img src={purplecircle} alt="purplecircle" />
                <p className="mb-0 ff_montserrat fw_regular fs_base text-white">
                  Richmond
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Delivery;
