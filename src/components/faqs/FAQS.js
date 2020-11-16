import React, { useState } from "react";
import "./scss/main.css";
import img from "../../assets/img/engagement-diamond.png";
const FAQS = () => {
  const data = [
    {
      id: "first",
      title: "Can I know the exact budget before approving the design?",
      desc:
        "Yes, we’ll let you know once you approved the design and before we start the creation.a",
    },
    {
      id: "second",
      title: "How long will the custom design process take?",
      desc:
        "Yes, we’ll let you know once you approved the design and before we start the creation.a",
    },
    {
      id: "third",
      title:
        "Why do you need information about my interest, personality, and relationship?",
      desc:
        "Yes, we’ll let you know once you approved the design and before we start the creation.a",
    },
    {
      id: "fourth",
      title: "How can I communicate with the design team?",
      desc:
        "Yes, we’ll let you know once you approved the design and before we start the creation.a",
    },
    {
      id: "fifth",
      title: "Can you make me a design if I do not live in the area?",
      desc:
        "Yes, we’ll let you know once you approved the design and before we start the creation.a",
    },
  ];
  const [answer, setAnswer] = useState("first");
  const handleAnswer = (e) => {
    if (answer === e.target.id) {
      setAnswer("you have selected that dumbass");
    } else {
      setAnswer(e.target.id);
      console.log(e.target.id);
    }
  };
  return (
    <div className="faqs">
      <div className="container">
        <div className="faqs-left">
          <div className="faqs-left-title">
            <span>Custom Design</span>
            <p>FAQS</p>
          </div>
          {data.map((item) => {
            const { id, title, desc } = item;
            return (
              <div
                className={
                  answer === id ? "faqs-left-block" : "faqs-left-block faqs-low"
                }
                key={id}
              >
                <div className="faqs-left-block-title">
                  <span>{title}</span>
                  <i
                    id={id}
                    onClick={handleAnswer}
                    className={
                      answer === id ? "fas fa-arrow-right" : "fas fa-times"
                    }
                  ></i>
                </div>
                <div
                  className={id === answer ? "faqs-left-block-desc" : "hidden"}
                >
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <figure className="faqs-right">
          <img src={img} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default FAQS;
