import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about1 from "../assets/images/svg/about1.svg";
import about2 from "../assets/images/svg/about2.svg";
import about3 from "../assets/images/svg/about3.svg";
import about4 from "../assets/images/svg/about4.svg";
import about5 from "../assets/images/svg/about5.svg";

const About = () => {
  return (
    <section className="cannabis_bg py-5" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="mb-5 mb-md-0">
            <div data-aos="flip-left" data-aos-duration="2000">
              <div className="about_box">
                <h2 className="ff_philosopher fw_regular fs_2xl text-white">
                  About <span className="clr_1">Us</span>
                </h2>
                <p className="ff_montserrat fw_regular fs_md text-white mb-0 mt-3">
                  Purple Panda is a Canadian online cannabis dispensary with a
                  passion for good weed and even better customer service. We all
                  remember the days of waiting for scary strangers on street
                  corners, but thankfully those days are over. Now, we’re proud
                  of how we provide an easy, convenient, and user-friendly
                  experience to our clients.{" "}
                </p>{" "}
                <p className="ff_montserrat fw_regular fs_md text-white">
                  We specialize in high-quality cannabis for both recreational
                  and medical purposes, while also making sure that you’re
                  getting the best bud for your buck! Along with all the
                  different strains of cannabis that we stock, you can also get
                  your fill of edibles, vapes, CBD, extracts, and even buy magic
                  mushrooms online from our store.
                </p>
                <button className="ff_montserrat fw_bold fs_xmd text-white signin_btn mt-3 mt-xl-5">
                  READ MORE
                </button>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="d-grid gap-2 ">
              <div className="gridbox_1 gridbox1_set">
                <img
                  className="w-100 object_fit_cover"
                  src={about1}
                  alt="about1"
                />
              </div>
              <div className="gridbox_2">
                <img
                  className="w-100 object_fit_cover"
                  src={about2}
                  alt="about2"
                />
              </div>
              <div className="gridbox_3 gridbox3_set">
                <img
                  className="w-100 object_fit_cover"
                  src={about3}
                  alt="about3"
                />
              </div>
              <div className="gridbox_4">
                <img
                  className=" w-100 object_fit_cover"
                  src={about4}
                  alt="about4"
                />
              </div>
              <div className="gridbox_5 gridbox5_set">
                <img
                  className="w-100 object_fit_cover"
                  src={about5}
                  alt="about5"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
