import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../assets/images/png/items1-img.png";
import image2 from "../assets/images/png/items2-img.png";
import image3 from "../assets/images/png/items3-img.png";

const Items = () => {
  return (
    <section className="item-bg py-5">
      <Container>
        <div>
          <h2 className="ff_philosopher fw_bold fs_2xl text-white text-center">
            Most <span className="clr_1">Popular </span>Items
          </h2>
          <p className="ff_montserrat fw_regular fs_md text-white text-center mt-3">
            Pellentesque tincidunt fermentum mauris dignissim quam{" "}
            <span className="d-lg-block">
              arcu. A netus natoque urna vivamus faucibus. Sollicitudin et nisl.
            </span>
          </p>
        </div>
        <Row className="pt-5 pb-lg-5 justify-content-center">
          <Col sm={6} md={4} lg={3} className="mb-5 mb-lg-0">
            <div className="givepanda_row_bg px-2 pt-3 pb-4 h-100">
              <img className="w-100" src={image1} alt="image1" />
              <p className="ff_montserrat fw_regular fs_lg text-white mt-3 mb-0">
                Stoner Patch(500mg)
              </p>
              <p className="ff_montserrat fw_bold fs_lg clr_1">$20.00</p>
              <button className="ff_montserrat fw_bold fs_xmd text-white signin_btn mt-4">
                ADD TO CART
              </button>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-5 mb-lg-0">
            <div className="givepanda_row_bg px-2 pt-3 pb-4 h-100">
              <img className="w-100" src={image2} alt="image2" />
              <p className="ff_montserrat fw_regular fs_lg text-white mt-3 mb-0">
                Stoner Patch(500mg)
              </p>
              <p className="ff_montserrat fw_bold fs_lg clr_1">$20.00</p>
              <button className="ff_montserrat fw_bold fs_xmd text-white signin_btn mt-4">
                ADD TO CART
              </button>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-5 mb-lg-0">
            <div className="givepanda_row_bg px-2 pt-3 pb-4 h-100">
              <img className="w-100" src={image3} alt="image3" />
              <p className="ff_montserrat fw_regular fs_lg text-white mt-3 mb-0">
                Stoner Patch(500mg)
              </p>
              <p className="ff_montserrat fw_bold fs_lg clr_1">$20.00</p>
              <button className="ff_montserrat fw_bold fs_xmd text-white signin_btn mt-4">
                ADD TO CART
              </button>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-5 mb-lg-0">
            <div className="givepanda_row_bg px-2 pt-3 pb-4 h-100">
              <img className="w-100" src={image3} alt="image3" />
              <p className="ff_montserrat fw_regular fs_lg text-white mt-3 mb-0">
                Stoner Patch(500mg)
              </p>
              <p className="ff_montserrat fw_bold fs_lg clr_1">$20.00</p>
              <button className="ff_montserrat fw_bold fs_xmd text-white signin_btn mt-4">
                ADD TO CART
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Items;
