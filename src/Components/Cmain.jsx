import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import leaf from "../assets/images/png/express-leaf.png";
import { MAILICON, PHONEICON } from "./Icons";

const Cmain = () => {
  return (
    <section className="page_bg py-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="mb-5">
              <img className="w-100" src={leaf} alt="leaf" />
            </div>
          </Col>
          <Col md={6}>
            <div data-aos="flip-right" data-aos-duration="1500">
              <div className="ourrange_bg p-3 p-lg-4">
                <h2 className="ff_philosopher fw_bold  fs_base text-white">
                  Feel free to <span className="clr_1">contact us </span>{" "}
                  anytime you need our help.
                </h2>
                <p className="ff_montserrat fw_regular fs_md text-white">
                  We usually reply in 24 hours, if there is an urgent need to
                  reach us. please give us a call at the number below
                </p>
                <div className="d-lg-flex align-items-center justify-content-between mt-4">
                  <div className="d-flex align-items-center gap-2">
                    <PHONEICON />
                    <p className="mb-0 ff_montserrat fw_semibold fs_md text-white">
                      1-888-726-3219
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
                    <MAILICON />
                    <p className="mb-0 ff_montserrat fw_semibold fs_md text-white">
                      purplepandagta.info@proton.me
                    </p>
                  </div>
                </div>
                <Form className="mt-3 mt-lg-4 mt-xl-5 d-flex justify-content-between">
                  <input
                    type="text"
                    placeholder="First name"
                    className="cmain_input ff_montserrat fw_regular fs_md  input_color py-2"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="cmain_input ff_montserrat fw_regular fs_md  input_color py-2"
                  />
                </Form>
                <Form className="mt-2 mt-lg-3 d-flex justify-content-between">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="cmain_input ff_montserrat fw_regular fs_md  input_color py-2"
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="cmain_input ff_montserrat fw_regular fs_md  input_color py-2"
                  />
                </Form>
                <Form className="mt-2 mt-lg-3">
                  <input
                    type="text"
                    placeholder="Message..."
                    className="input_msg ff_montserrat fw_regular fs_md  input_color py-2"
                  />
                </Form>
                <button className="ff_montserrat fw_bold fs_xmd text-white signin_btn mt-3 mt-lg-5">
                  SUBMIT
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cmain;
