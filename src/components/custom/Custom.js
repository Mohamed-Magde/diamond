import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./scss/main.css";
import img from "../../assets/img/flexible-designs.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
const Custom = () => {
  return (
    <div className="custom">
      <div className="container">
        <Zoom>
          <div className="custom-title">
            <span>Explore </span>
            <p>Habib Diamond</p>
          </div>
        </Zoom>{" "}
        <div className="custom-desc">
          <Flip left>
            <p>
              Get inspired by our custom made engagement rings and start her
              dream
            </p>
          </Flip>
          <Zoom>
            {" "}
            <span> Right now!</span>
          </Zoom>
        </div>
        <Fade right>
          <CarouselProvider
            className="custom-wrapper"
            naturalSlideWidth={100}
            naturalSlideHeight={40}
            totalSlides={3}
          >
            <Slider className="custom-wrapper-slider">
              <Slide className="custom-wrapper-slider-item" index={0}>
                <div className="slide-flex">
                  <div className="slide-flex-content">
                    <span>Flexible designs</span>
                  </div>
                  <img src={img} alt="" />
                </div>
              </Slide>
              <Slide className="custom-wrapper-slider-item" index={1}>
                <div className="slide-flex">
                  <div className="slide-flex-content">
                    <span>Flexible designs</span>
                  </div>
                  <img src={img} alt="" />
                </div>
              </Slide>
              <Slide className="custom-wrapper-slider-item" index={2}>
                <div className="slide-flex">
                  <div className="slide-flex-content">
                    <span>Flexible designs</span>
                  </div>
                  <img src={img} alt="" />
                </div>
              </Slide>
            </Slider>
            <ButtonBack className="custom-wrapper-btn back">
              {" "}
              <i className="fas fa-arrow-left"></i>
            </ButtonBack>
            <ButtonNext className="custom-wrapper-btn next">
              <i className="fas fa-arrow-right"></i>
            </ButtonNext>
          </CarouselProvider>
        
        </Fade>
      </div>
    </div>
  );
};

export default Custom;
