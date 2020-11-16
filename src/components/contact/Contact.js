import React from "react";
import "./scss/main.css";
import img from "../../assets/img/contact.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const Contact = () => {
  return (
    <div className="contact">
      <Fade right>
        <img src={img} alt="" />
      </Fade>
      <Zoom>
        <div className="container">
          <p>
            If you have any further questions, contact us at{" "}
            <span>(email or contact us forum) </span>
          </p>
        </div>
      </Zoom>
    </div>
  );
};

export default Contact;
