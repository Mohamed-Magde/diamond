import React from "react";
import img from "../../assets/img/explore.png";
import comma from "../../assets/img/comma.png";
import "./scss/main.css";
const Explore = () => {
  const data = {
    p:
      "Women appreciate effort especially when it comes to emotions. Your partner will feel special for having a unique engagement ring. Make her feel proud by giving her a custom-made engagement ring to show off. Not only will she cherish this gesture, but she’ll appreciate it as long as she lives!",
  };
  return (
    <figure className="explore">
      <figcaption>
        <img src={comma} alt="" />
        <p>{data.p}</p>
        <a href="" className="btn-primary">
          <p>
            Start Your Custom Design <span> Right Now </span>
          </p>
        </a>
      </figcaption>
      <img className="explore-bg" src={img} alt="" />
    </figure>
  );
};

export default Explore;
