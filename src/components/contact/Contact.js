import React from "react";
import "./scss/main.css";
import img from "../../assets/img/contact.png";
const Contact = () => {
  return (
    <div className="contact">
      <img src={img} alt="" />
      <div className="container">
        <p>
          If you have any further questions, contact us at{" "}
          <span>(email or contact us forum) </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
