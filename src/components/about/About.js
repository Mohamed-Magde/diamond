import React from "react";
import "./scss/main.css";
import img from "../../assets/img/about.png";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-left">
          <div className="about-left-title">
            <span>Design Her Dream</span> <p>Engagement Ring …. </p>
          </div>
          <div className="about-left-desc">
            <p>
              Finding the perfect engagement ring can be challenging and takes a
              lot of time searching through countless rings. Habib Diamond
              believes that every ring tells a different story. For you it may
              be just a ring, but for her it’s much more than that! It’s a
              promise, a commitment, a future, and an endless love. Let us help
              you design her dream engagement ring. A ring that she will
              definitely say yes to! A ring for a life-time experience!
              <span>
                From concept to creation, we’ll work through every step so your
                special moment will be joyful and unforgettable!
              </span>
            </p>
          </div>
        </div>
        <figure className="about-right">
          <img src={img} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default About;
