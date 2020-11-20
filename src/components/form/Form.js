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
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { email, name, message1, message2, file, bestWay, phone } = formData;
  return (
    <form id="form" className="form" onSubmit={handleSubmit}>
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
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Your Name"
                onChange={handleChange}
              />
              <input
                name="email"
                value={email}
                type="email"
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>
          </Fade>
          <Zoom>
            <textarea
              placeholder="Tell us some how you imagine the ring"
              name="message1"
              value={message1}
              onChange={handleChange}
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </Zoom>
          <Flip left>
            <textarea
              placeholder="The occasion and some info about yourself and your partner"
              name="message2"
              value={message2}
              onChange={handleChange}
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </Flip>

          <Zoom>
            <div className="form-wrapper-file">
              <input
                type="file"
                name="file"
                value={file}
                onChange={handleChange}
                id=""
              />
              <span>Upload your inspirations</span>
              <i className="fas fa-paperclip"></i>
            </div>
          </Zoom>
          <Fade right>
            <div className="form-wrapper-flex">
              <input
                type="text"
                name="bestWay"
                value={bestWay}
                onChange={handleChange}
                placeholder="The best way to reach you "
              />
              <input
                name="phone"
                value={phone}
                onChange={handleChange}
                type="text"
                placeholder="phone number or email address "
              />
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
