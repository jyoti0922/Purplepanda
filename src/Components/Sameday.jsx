import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../assets/images/png/pandasec8-img.png";
import samedaydelivery from "../assets/images/png/same-day-delivery-img.png";
import samedayshade from "../assets/images/png/same-day-shade.png";
import discreet from "../assets/images/png/discreet.png";
import premium from "../assets/images/png/premium.png";
import collect from "../assets/images/png/collect.png";
import mail from "../assets/images/png/wide-mail.png";
import man from "../assets/images/png/man.png";
import secure from "../assets/images/png/secure.png";

const Sameday = () => {
  return (
    <section className="page_bg pb-5 pt-md-5">
      <Container>
        <Row className="align-items-center justify-content-between py-md-5">
          <Col md={4}>
            <div className="position-relative">
              <img
                className="w-100 position-relative z_index_2"
                src={image1}
                alt="image1"
              />
              <img
                className="position-absolute z_index_1 sameday_shade_set d-none d-xl-block"
                src={samedayshade}
                alt="samedayshade"
              />
            </div>
          </Col>
          <Col md={7}>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="row">
                <div className="col-6">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={samedaydelivery} alt="samedaydelivery" />
                    <p className="ff_montserrat fw_semibold fs_md text-white mb-0">
                      Same Day Delivery
                    </p>
                  </div>
                  <div className="d-flex gap-2 align-items-center mt-3">
                    <img src={discreet} alt="discreet" />
                    <p className="ff_montserrat fw_semibold fs_md text-white mb-0">
                      Discreet packaging
                    </p>
                  </div>
                  <div className="d-flex gap-2 align-items-center mt-3">
                    <img src={premium} alt="premium" />
                    <p className="ff_montserrat fw_semibold fs_md text-white mb-0">
                      Premium Marijuana Buds
                    </p>
                  </div>
                  <div className="d-flex gap-2 align-items-center mt-3">
                    <img src={collect} alt="collect" />
                    <p className="ff_montserrat fw_semibold fs_md text-white mb-0">
                      Collect Rewards
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={mail} alt="mail" />
                    <p className="ff_montserrat fw_semibold fs_md text-white mb-0">
                      Canada Wide Mail Orders
                    </p>
                  </div>
                  <div className="d-flex gap-2 align-items-center mt-3">
                    <img src={man} alt=" man" />
                    <p className="ff_montserrat fw_semibold fs_md text-white mb-0">
                      19+
                    </p>
                  </div>
                  <div className="d-flex gap-2 align-items-center mt-3">
                    <img src={secure} alt="secure" />
                    <p className="ff_montserrat fw_semibold fs_md text-white mb-0">
                      Secure Transactions
                    </p>
                  </div>
                  <div className="d-flex gap-2 align-items-center mt-3"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Sameday;
