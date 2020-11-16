import React from "react";
import firstImg from "../../assets/img/step-1.png";
import secondImgF from "../../assets/img/step-2-first.png";
import secodImgS from "../../assets/img/step-2-second.png";
import thirdImg from "../../assets/img/step-3.png";

import "./scss/main.css";
const Steps = () => {
  const data = {
    step: {
      p1:
        "Discuss design ideas and help us visualize what you’re looking for by either sending us sketches or similar images. Don’t forget to tell us a little bit about the relationship and the occasion so we can work our magic. ",
      p2:
        "Our design team will communicate with you every step of the way. You’ll receive jewelry consultant recommendations including pictures, emails, video calls, or any other way of connection you prefer in order to stay updated.",
      p3:
        "After approving the design and budget, we’ll create your dream ring and deliver it to you!",
    },
  };
  return (
    <div className="step">
      <div className="container">
        <div className="step-title">
          <span>The custom experience</span>
          <p>Consists of 3 steps</p>
        </div>
        <figure className="step-1">
          <figcaption>
            <span>01</span>
            <p>{data.step.p1}</p>
          </figcaption>
          <img src={firstImg} alt="step-1 img" />
        </figure>
        <figure className="step-2">
          <div className="step-2-block">
            <img
              className="step-2-block-img1"
              src={secondImgF}
              alt="step-1 img"
            />
            <img
              className="step-2-block-img2"
              src={secodImgS}
              alt="step-1 img"
            />
          </div>
          <figcaption>
            <span>02</span>
            <p>{data.step.p2}</p>
          </figcaption>
        </figure>
        <figure className="step-3">
          <figcaption>
            <span>03</span>
            <p>{data.step.p3}</p>
          </figcaption>
          <img src={thirdImg} alt="step-1 img" />
        </figure>
      </div>
    </div>
  );
};

export default Steps;
