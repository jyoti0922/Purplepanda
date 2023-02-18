import React from "react";
import { Container } from "react-bootstrap";
import leaf from "../assets/images/png/ourrange-leaf-right.png";
import leafleft from "../assets/images/png/ourrange-leaf.png";
import shade from "../assets/images/png/ourrange-shadow.png";

const Ourrange = () => {
  return (
    <section className="page_bg py-5 position-relative">
      <img
        className="position-absolute ourrange_leaf_set d-none d-md-block"
        src={leaf}
        alt="leaf"
      />
      <img
        className="leafset_left position-absolute d-none d-md-block"
        src={leafleft}
        alt="leafleft"
      />
      <img
        className="position-absolute ourrange_overflow"
        src={shade}
        alt="shade"
      />
      <Container className="position-relative">
        <div className="ourrange_bg d-flex flex-column align-items-center justify-content-center py-5 pb-5 px-3">
          <h2 className="ff_philosopher fw_bold fs_2xl text-white pt-xl-3">
            Our <span className="clr_1">Range</span>
          </h2>
          <p className="ff_monserrat fw_regular fs_md text-white text_width text-center mt-2 mt-md-5">
            We have a variety of different recreational and medicinal items in
            our range, including cannabis, vapes, edibles, magic mushrooms,
            extracts, and CBD products, to help you unwind, have fun, and even
            do some valuable soul searching.{" "}
          </p>{" "}
          <p className="ff_monserrat fw_regular fs_md text-white text_width text-center pb-xl-3">
            Whether you’re looking to order edibles online or browse for your
            new favorite strain, Purple Panda has got you covered.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Ourrange;
