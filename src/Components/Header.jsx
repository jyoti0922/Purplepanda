import React, { useState } from "react";
import logo from "../assets/images/png/logo.png";
import search from "../assets/images/png/search-icon.png";
import icon from "../assets/images/png/nav-icon.png";
import { Col, Container, Row } from "react-bootstrap";
import heroimage from "../assets/images/png/hero-image.png";
import shopping from "../assets/images/svg/shopping-img.svg";
import overlay from "../assets/images/png/header-overlay.png";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <section className="header_bg mh_50 mh_xl_100 position-relative d-flex flex-column">
      <img
        className="position-absolute overlay_set d-none d-lg-block"
        src={overlay}
        alt="overlay"
      />
      <article className="bg_top py-2">
        <Container>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <img className="" src={shopping} alt="shopping" />
            <p className="ff_montserrat fw_extralarge fs_md text-white mb-0">
              Black Friday
              <span className="ff_montserrat fw_small fs_md ms-1">
                savings are here ,save up to 10% off on coupon code
              </span>
            </p>
            <a href="#" className="ff_montserrat fw_extralarge fs_md clr_2">
              Shop Now
            </a>
          </div>
        </Container>
      </article>
      {/* NAVBAR */}
      <nav>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between bb_light py-5">
            <a href="#" className="ff_ubuntu fs_xxxlg text-white">
              <img src={logo} alt="logo" />
            </a>
            <div
              onClick={() => setNavShow(!navShow)}
              className=" btnss text-danger px-2 py-1 d-lg-none rounded-3"
            >
              <div className="line_black"></div>
              <div className="line_black"></div>
              <div className="line_black"></div>
            </div>
            <ul className="d-flex align-items-center mb-0 d-none d-lg-flex  ps-0 mb-0 gap_20 gap_lg_30 gap_xl_37">
              <li>
                <a
                  href="#home"
                  className="ff_montserrat fw_regular fs_md text-white nav_hover"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  className="ff_montserrat fw_regular fs_md text-white nav_hover"
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  href="#choose"
                  className="ff_montserrat fw_regular fs_md text-white nav_hover"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="ff_montserrat fw_regular fs_md text-white nav_hover"
                >
                  CONTACT
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="ff_montserrat fw_regular fs_md text-white nav_hover"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a href="#testimonial" className=" search_btn">
                  <input
                    type="text"
                    placeholder="Search here.."
                    className="search_input ff_montserrat fw_regular fs_sm text-white"
                  />
                  <img src={search} alt="search" />
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="ff_montserrat fw_regular fs_md text-white"
                >
                  <img src={icon} alt="icon" />
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="ff_montserrat fw_bold fs_xmd text-white signin_btn"
                >
                  SIGN IN
                </a>
              </li>
            </ul>
          </div>
          <article className="w-100 d-flex justify-content-between ">
            {" "}
            <span> </span>
          </article>{" "}
          <div className="d-lg-none d-flex ">
            <div className={` ${navShow ? "nav-fix nav_bg" : "fix-navbar"}`}>
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-4">
                <button
                  onClick={() => setNavShow(false)}
                  className=" btn btn-close  d-lg-none position-absolute top_20"
                ></button>
                <li>
                  <a
                    href="#home"
                    className="ff_montserrat fw_regular fs_md text-white nav_hover"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#featured"
                    className="ff_montserrat fw_regular fs_md text-white nav_hover"
                  >
                    SHOP
                  </a>
                </li>
                <li>
                  <a
                    href="#choose"
                    className="ff_montserrat fw_regular fs_md text-white nav_hover"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonial"
                    className="ff_montserrat fw_regular fs_md text-white nav_hover"
                  >
                    CONTACT
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonial"
                    className="ff_montserrat fw_regular fs_md text-white nav_hover"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#testimonial" className=" search_btn">
                    <input
                      type="text"
                      placeholder="Search here.."
                      className="search_input ff_montserrat fw_regular fs_sm text-white"
                    />
                    <img src={search} alt="search" />
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonial"
                    className="ff_montserrat fw_regular fs_md text-white"
                  >
                    <img src={icon} alt="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonial"
                    className="ff_montserrat fw_bold fs_xmd text-white signin_btn"
                  >
                    SIGN IN
                  </a>
                </li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </nav>
      {/* HERO-START */}
      <article className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="text-center text-md-start">
                <h1 className="ff_philosopher fw_bold fs_4xl text-white">
                  Setting a<span className="clr_1"> ‘High’ </span>Standard
                </h1>
                <p className="ff_montserrat fw_regular fs_md text-white">
                  We at Purple Panda are passionate about becoming the best
                  <span className="d-lg-block">
                    online weed dispensary Canada has ever seen. We believe in
                  </span>
                  good products, fair pricing, and top-notch customer service
                </p>
                <button className="ff_montserrat fw_bold fs_xmd text-white signin_btn mt-3 mt-xl-5">
                  SIGN IN
                </button>
              </div>
            </Col>
            <Col md={6}>
              <img className="w-100" src={heroimage} alt="heroimage" />
            </Col>
          </Row>
        </Container>
      </article>
    </section>
  );
};

export default Header;
