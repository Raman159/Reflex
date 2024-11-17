// import React from 'react';
import "./CSS/ServicesPage.css";
import Navigation from "./Navigation";
import webGif from "./assets/image/web.gif";
import graphicGif from "./assets/image/graphic.gif";
import softwareGif from "./assets/image/software.gif";
import marketGif from "./assets/image/digital marketing.gif";
import mobileGif from "./assets/image/mobile application.gif";
import commerceGif from "./assets/image/ecommerce.gif";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Our web development services focus on creating responsive, fast, and secure websites. We help businesses establish a strong online presence by building custom solutions tailored to their goals. From sleek designs to advanced functionalities, we ensure your website delivers an exceptional user experience while boosting engagement and conversions. Let us transform your ideas into a powerful digital platform.",
    image: webGif,
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Unleash the power of creativity with our graphic design services. From logos and branding to promotional materials, we craft designs that captivate and communicate your message effectively. Our team combines artistic skill with strategic thinking to deliver visuals that resonate with your audience. Elevate your brand identity and make a lasting impression with our professional graphic design solutions.",
    image: graphicGif,
  },
  {
    id: 3,
    title: "Software Development",
    description:
      "We specialize in developing tailored software solutions that address unique business challenges. Our team designs scalable, reliable, and feature-rich software to streamline operations and enhance productivity. Whether you need enterprise systems or custom applications, we deliver solutions that align with your goals. Empower your business with software that drives efficiency and growth.",
    image: softwareGif,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Boost your online presence with our comprehensive digital marketing services. We provide expert strategies in SEO, PPC, social media management, and content marketing to drive traffic and engagement. Our data-driven approach ensures campaigns that target the right audience and deliver measurable results. Build your brand, grow your customer base, and achieve business success with our marketing expertise.",
    image: marketGif,
  },
  {
    id: 5,
    title: "Mobile Application Development",
    description:
      "Transform ideas into engaging mobile experiences with our app development services. We design and build apps for iOS and Android platforms, focusing on user-friendly interfaces and seamless performance. Whether for startups or enterprises, our apps are crafted to meet your business objectives and delight users. Empower your audience with innovative mobile solutions.",
    image: mobileGif,
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    description:
      "Take your business online with our tailored e-commerce solutions. We create user-friendly online stores with secure payment gateways, easy navigation, and efficient inventory management. Our team focuses on providing a seamless shopping experience for customers while maximizing sales. Build a robust e-commerce platform that enhances your brand and drives growth.",
    image: commerceGif,
  },
];

const ServiceCard = ({ title, description, image, reverseLayout }) => {
  return (
    <div className={`service-card ${reverseLayout ? "reverse" : ""}`}>
      <div className="service-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <>
      <Navigation />
      <div
        className="cover-image"
        style={{ backgroundImage: "url('./src/assets/image/servicebg.jpg')" }}
      >
        <h2 className="cover-text">
        Innovative solutions for your successs
        </h2>
        <p className="cover-subtext">
        Transforming challenges into solutions, our services empower your business to thrive in a digital world.
        </p>
      </div>
      <div className="header-text-content">
        <h2>
         Explore Our Digital Solutions
        </h2>
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
            reverseLayout={index % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
