import React, { useEffect, useState } from "react";
import "./CSS/rocket.css";
import rocketGif from "./assets/image/rocket.gif";
import Web from "./assets/image/web-development.png";
import Software from "./assets/image/software-development.png";
import App from "./assets/image/app-development.png";
import Graphic from "./assets/image/graphic-designer.png";
import Ecommerce from "./assets/image/e-commerce.png";
import Navigation from "./Navigation";

const Rocket = () => {
  const [isComplete, setRocket] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRocket(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [setRocket]);

  return (
    <div className="rocket-container">
      <Navigation />
      <div className="reflex-text">
        Reflex IT Solution
      </div>
      {isComplete && <img src={rocketGif} alt="rocket" className="rocket" />}
      <div className="display-content-1">
        <div className="item item1" style={{ animationDelay: "1s" }}>
          <img src={Web} alt="icon" className="icon" />
          <p className="item-txt">Web Development</p>
        </div>
        <div className="item item2" style={{ animationDelay: "4.5s" }}>
          <img src={App} alt="icon" className="icon" />
          <p className="item-txt">Mobile App Development</p>
        </div>
        <div className="item item3" style={{ animationDelay: "7.8s" }}>
          <img src={Ecommerce} alt="icon" className="icon" />
          <p className="item-txt">E-Commerce</p>
        </div>
      </div>
      <div className="display-content-2">
        <div className="item item4" style={{ animationDelay: "3s" }}>
          <img src={Graphic} alt="icon" className="icon" />
          <p className="item-txt">Graphic Designing</p>
        </div>
        <div className="item item5" style={{ animationDelay: "6.5s" }}>
          <img src={Software} alt="icon" className="icon" />
          <p className="item-txt">Software Development</p>
        </div>
      </div>
    </div>
  );
};

export default Rocket;
