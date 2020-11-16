import React from "react";
import "./scss/main.css";
import bg from "../../assets/img/hero-img.png";
import logo from "../../assets/img/logo.png";

import Fade from "react-reveal/Fade";
const Banner = () => {
  const data = {
    p:
      "Do you feel inspired by the endless Jewelry images all over the social media? Ever wished to have a unique piece of jewelry of your own? Well, now we can create a one-of-a-kind jewelry piece, custom-made just for you!. Whether you want to create an upgraded version of jewelry or want to create from scratch, our design team will pleasantly work around the clock to make your dream design come true.",
  };
  return (
    <div className="banner">
      <Fade left>
        <div className="left">
          <img className="left-logo" src={logo} alt="" />
          <p className="left-title">
            <span className="first">Let us</span> spark your interest <br /> to
            make your dream Ring/Gem <span className="second">come true! </span>
          </p>
          <p className="left-desc">{data.p}</p>
          <a href="#form" className="btn-primary">
            <p>
              Start Your Custom Design <span>Right Now</span>
            </p>
          </a>
        </div>
        <figure className="right">
          <img src={bg} alt="" />
        </figure>
      </Fade>
    </div>
  );
};

export default Banner;
