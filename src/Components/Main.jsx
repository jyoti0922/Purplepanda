import React from "react";
import { Container } from "react-bootstrap";
import image1 from "../assets/images/png/main1.png";
import image2 from "../assets/images/png/main2.png";
import image3 from "../assets/images/png/main3.png";
import image4 from "../assets/images/png/main4.png";
import image5 from "../assets/images/png/main5.png";
import image6 from "../assets/images/png/main6.png";
import image7 from "../assets/images/png/main7.png";
import shade from "../assets/images/png/main-shadow.png";
import Carousel from "react-bootstrap/Carousel";

const Main = () => {
  return (
    <section className="page_bg position-relative py-5">
      <img
        className="position-absolute shade_set d-none d-md-block"
        src={shade}
        alt="shade"
      />
      <Container>
        <Carousel className="d-sm-none">
          <Carousel.Item>
            <div className="d-flex flex-column align-items-center">
              <img src={image1} alt="image1" />
              <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                Mushrooms
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-column align-items-center">
              <img src={image2} alt="image2" />
              <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                Extracts
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-column align-items-center">
              <img src={image3} alt="image3" />
              <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                Vapes & <span className="d-block">Accessories</span>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-column align-items-center">
              <img src={image4} alt="image4" />
              <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                CBD
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-column align-items-center">
              <img src={image5} alt="image5" />
              <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                Edibles
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-column align-items-center">
              <img src={image6} alt="image6" />
              <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                Cannabis
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-column align-items-center">
              <img src={image7} alt="image7" />
              <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                Bulk Orders
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
        <div data-aos="fade-down" data-aos-duration="3000">
          <div className="row justify-content-between py-md-5 z_index_2 position-relative d-none d-sm-flex">
            <div className="col-auto text-center">
              <div>
                <img src={image1} alt="image1" />
                <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                  Mushrooms
                </p>
              </div>
            </div>
            <div className="col-auto">
              <div>
                <img src={image2} alt="image2" />
                <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                  Extracts
                </p>
              </div>
            </div>
            <div className="col-auto">
              <div>
                <img src={image3} alt="image3" />
                <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                  Vapes & <span className="d-block">Accessories</span>
                </p>
              </div>
            </div>
            <div className="col-auto">
              <div>
                <img src={image4} alt="image4" />
                <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                  CBD
                </p>
              </div>
            </div>
            <div className="col-auto">
              <div>
                <img src={image5} alt="image5" />
                <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                  Edibles
                </p>
              </div>
            </div>
            <div className="col-auto">
              <div>
                <img src={image6} alt="image6" />
                <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                  Cannabis
                </p>
              </div>
            </div>
            <div className="col-auto">
              <div>
                <img src={image7} alt="image7" />
                <p className="ff_philosopher fw_bold fs_lg text-white text-center mt-3">
                  Bulk Orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Main;
