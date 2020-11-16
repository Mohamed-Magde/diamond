import React from "react";
import "./scss/main.css";
import img from "../../assets/img/form-img.png";
const Form = () => {
  return (
    <div className="form">
      <img src={img} alt="" />
      <div className="container">
        <div className="form-title">
          <p>
            Start Your <span>Custom-Design Now!</span>{" "}
          </p>
        </div>
        <div className="form-wrapper">
          <div className="form-wrapper-flex">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
          </div>
          <textarea
            placeholder="Tell us some how you imagine the ring"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <textarea
            placeholder="The occasion and some info about yourself and your partner"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div className="form-wrapper-file">
            <input type="file" name="" id="" />
            <span>Upload your inspirations</span>
            <i className="fas fa-paperclip"></i>
          </div>
          <div className="form-wrapper-flex">
            <input type="text" placeholder="The best way to reach you " />
            <input type="text" placeholder="phone number or email address " />
          </div>
          <div className="form-wrapper-submit">
            <p>
              Start Your Custom Design <span>Right Now</span>
            </p>
            <input type="submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
