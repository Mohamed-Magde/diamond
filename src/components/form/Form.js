import React, { useState } from "react";
import "./scss/main.css";
import img from "../../assets/img/form-img.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
const Form = () => {
  const initialState = {
    name: "",
    email: "",
    message1: "",
    message2: "",
    file: "",
    bestWay: "",
    phone: "",
  };
  const [formData, setFormData] = useState(initialState);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form id="form" className="form">
      <img src={img} alt="" />
      <div className="container">
        <div className="form-title">
          <Flip left>
            <p>
              Start Your <span>Custom-Design Now!</span>{" "}
            </p>
          </Flip>
        </div>
        <div className="form-wrapper">
          <Fade right>
            <div className="form-wrapper-flex">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
            </div>
          </Fade>
          <Zoom>
            <textarea
              placeholder="Tell us some how you imagine the ring"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </Zoom>
          <Flip left>
            <textarea
              placeholder="The occasion and some info about yourself and your partner"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </Flip>

          <Zoom>
            <div className="form-wrapper-file">
              <input type="file" name="" id="" />
              <span>Upload your inspirations</span>
              <i className="fas fa-paperclip"></i>
            </div>
          </Zoom>
          <Fade right>
            <div className="form-wrapper-flex">
              <input type="text" placeholder="The best way to reach you " />
              <input type="text" placeholder="phone number or email address " />
            </div>
          </Fade>

          <Zoom>
            <div className="form-wrapper-submit">
              <p>
                Start Your Custom Design <span>Right Now</span>
              </p>
              <input type="submit" />
            </div>
          </Zoom>
        </div>
      </div>
    </form>
  );
};

export default Form;
