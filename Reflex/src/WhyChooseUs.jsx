import React, { useState } from "react";
import "./CSS/WhyChooseUs.css";
import WhyUs from './assets/image/WhyChooseUs.jpg';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    { title: "Website Development", content: "We specialize in creating custom websites that are tailored to the specific needs of each client. Our team of experts can handle everything from the design and development of the website to ongoing maintenance and updates." },
    { title: "Mobile Application", content: "We offer mobile application development services for both iOS and Android platforms, delivering seamless user experiences and feature-rich apps." },
    { title: "Software Development", content: "Our software development services are designed to meet your business requirements, offering customized solutions for any industry." },
    { title: "Graphic Design", content: "We provide creative and innovative graphic design solutions that effectively communicate your brand's message." },
    { title: "eCommerce", content: "We create comprehensive eCommerce platforms, including online stores, payment gateways, and customer management systems." },
    { title: "Digital Marketing", content: "Our digital marketing services help you increase online visibility, drive traffic, and boost conversions through various strategies." },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="why-choose-us-container">
      <div className="left-section">
        <img
          src={WhyUs}
          alt="Team Working"
          className="why-choose-us-image"
        />
      </div>
      <div className="right-section">
        <h2 className="why-choose-us-title">Why Choose Us?</h2>
        <p className="why-choose-us-description">
          Our vision is to be the leading provider of custom technology solutions for businesses looking to grow their online presence. We strive to be at the forefront of technological advancements and to continuously improve our services in order to stay ahead of the competition. We are committed to empowering our clients to fully leverage the potential of the internet through the use of cost-effective and innovative solutions.
        </p>
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                <h3 className="accordion-title">{item.title}</h3>
                <span className={`accordion-icon ${activeIndex === index ? "active" : ""}`}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div className={`accordion-content ${activeIndex === index ? "expanded" : ""}`}>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
