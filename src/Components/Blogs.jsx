import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../assets/images/png/blogs1-img.png";
import image2 from "../assets/images/png/blogs2-img.png";
import image3 from "../assets/images/png/blogs3-img.png";

const Blogs = () => {
  return (
    <section className="blogs_bg py-5">
      <Container>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <h2 className="ff_philosopher fw_bold fs_2xl text-white text-center">
            Latest <span className="clr_1">Blogs</span> And{" "}
            <span className="clr_1"> News</span>
          </h2>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="pt-5 justify-content-center pb-md-5">
            <Col sm={6} md={4} className="mb-5 mb-md-0">
              <div className="givepanda_row_bg px-3 pt-3 pb-4 h-100">
                <img className="w-100" src={image1} alt="image1" />
                <p className="ff_montserrat fw_regular fs_xsm text-white mt-3">
                  12 Dec 2022
                </p>
                <p className="ff_montserrat fw_semibold fs_lg text-white mb-0">
                  Integer vulputate
                </p>
                <p className="ff_montserrat fw_regular fs_md text-white">
                  Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                  pharetra odio sed senectus sed morbi suspendisse convallis.{" "}
                </p>
                <p className="ff_montserrat fw_regular fs_xsm clr_1 mt-2">
                  READ MORE....
                </p>
              </div>
            </Col>
            <Col sm={6} md={4} className="mb-5 mb-md-0">
              <div className="givepanda_row_bg px-3 pt-3 pb-4 h-100">
                <img className="w-100" src={image2} alt="image2" />
                <p className="ff_montserrat fw_regular fs_xsm text-white mt-3">
                  12 Dec 2022
                </p>
                <p className="ff_montserrat fw_semibold fs_lg text-white mb-0">
                  Integer vulputate
                </p>
                <p className="ff_montserrat fw_regular fs_md text-white">
                  Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                  pharetra odio sed senectus sed morbi suspendisse convallis.{" "}
                </p>
                <p className="ff_montserrat fw_regular fs_xsm clr_1 mt-2">
                  READ MORE....
                </p>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="givepanda_row_bg px-3 pt-3 pb-4 h-100">
                <img className="w-100" src={image3} alt="image3" />
                <p className="ff_montserrat fw_regular fs_xsm text-white mt-3">
                  12 Dec 2022
                </p>
                <p className="ff_montserrat fw_semibold fs_lg text-white mb-0">
                  Integer vulputate
                </p>
                <p className="ff_montserrat fw_regular fs_md text-white">
                  Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                  pharetra odio sed senectus sed morbi suspendisse convallis.{" "}
                </p>
                <p className="ff_montserrat fw_regular fs_xsm clr_1 mt-2">
                  READ MORE....
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
