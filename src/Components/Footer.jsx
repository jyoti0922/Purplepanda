import React from "react";
import { Container } from "react-bootstrap";
import teddy from "../assets/images/png/footer-teddy.png";

const Footer = () => {
  return (
    <section className="footer_bg position-relative pt-5">
      <Container>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <img src={teddy} alt="teddy" />
            <p className="ff_montserrat fw_regular fs_md text-white mb-0 text-center mt-4">
              Tempor cras et scelerisque bibendum. Sapien proin pharetra iaculis
              cras massa{" "}
              <span className="d-xl-block">
                auctor turpis. Eget massa imperdiet sit massa. Hac sit nec.
              </span>
            </p>
            <ul className="mb-0 ps-0 d-flex align-items-center justify-content-center gap-5 mt-4">
              <li>
                <a
                  href="#"
                  className="ff_montserrat fw_semibold fs_md text-white"
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ff_montserrat fw_semibold fs_md text-white"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ff_montserrat fw_semibold fs_md text-white"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="line_purple position-absolute line_set"></div>
          <div className="d-flex align-items-center justify-content-center pt-3 pb-4">
            <p className="mb-0 ff_montserrat fw_regular fs_sm text-white textc_border mt-0">
              c
            </p>
            <p className="mb-0 ff_montserrat fw_regular fs_sm text-white">
              copyright2022purplepanda
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
