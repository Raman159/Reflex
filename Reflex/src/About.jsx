import Navigation from "./Navigation";
import "./CSS/About.css";
import Siximg from './assets/image/6dline.png';
import WhyChooseUs from './WhyChooseUs';
import Footer from "./footer";
import Socials from "./Socials.jsx";

const About = () => {
  const sectionData = [
    {
      title: "Who Are We",
      content:
        "We are a team of 25 experts with over 3 years of experience in building web applications and software. Our goal is to help businesses grow their online presence and achieve their goals through the use of technology. We have a wealth of experience in this field and are well-equipped to handle any project, big or small. Whether you need a new website, a custom software solution, or help with digital marketing, we have the skills and expertise to help you succeed.",
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to empower our clients to fully utilize the internet by providing affordable and effective custom technology solutions. We understand that every business is unique, and therefore we offer customized solutions tailored to each client’s specific needs. Our team of experts have years of experience in web application and software development, and we are dedicated to providing the highest quality services at an affordable price.",
    },
    {
      title: "Why Us",
      content:
        "At Reflex IT Solution, we take the time to listen to our clients' requirements, ensuring we understand their unique challenges and goals. Our team is dedicated to providing innovative, tailored software solutions that not only meet your needs but also help your business thrive. With a genuine commitment to your success, we combine expertise and cutting-edge technology to drive growth and deliver results you can trust.",
    },
  ];

  const statsData = [
    {
      description:
        "Our satisfied clients are proof of our commitment to delivering exceptional, results-driven solutions.",
      value: "69",
    },
    {
      description:
        "With countless successful projects completed, we deliver proven results that drive growth and innovation.",
      value: "149",
    },
    {
      description:
        "Our team has written millions of lines of code, powering innovative solutions and transforming ideas into reality.",
      value: "748k+",
    },
  ];

  const sixdData = [
    { number: "01", Six: "Discovery" },
    { number: "02", Six: "Planning" },
    { number: "03", Six: "Design" },
    { number: "04", Six: "Development" },
    { number: "05", Six: "Testing" },
    { number: "06", Six: "Launch" },
  ];

  return (
    <>
      <Navigation />
      <div className="cover-image" style={{backgroundImage: "url('./src/assets/image/about-img.jpg')",}}>
        <h2 className="cover-text">
          We blend innovation and expertise to deliver tailored software
          solutions.
        </h2>
        <p className="cover-subtext">
          Reflex IT Solution is committed to empowering businesses with
          cutting-edge software solutions, designed to simplify challenges and
          fuel growth in the digital era.
        </p>
      </div>
      <div className="about-container">
        <div className="about-cards">
          {sectionData.map((section, index) => (
            <AboutCard
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
        <div className="about-stats">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              description={stat.description}
              value={stat.value}
            />
          ))}
        </div>
        <div className="six-d-heading">
        <h2 className="six-title">Our Six - D Process</h2>
        <img src={Siximg} className="SixImg"/>
        </div>
        <hr className="hr" />

        <div className="six-D-container">
          {sixdData.map((item, index) => (
            <SixD key={index} number={item.number} Six={item.Six} />
          ))}
        </div>
      </div>
      <WhyChooseUs />
      <Socials />
      <Footer />
    </>
  );
};

const AboutCard = ({ title, content }) => {
  return (
    <div className="about-card">
      <div className="dash"></div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const StatCard = ({ description, value }) => {
  return (
    <div className="stat-card">
      <p>{description}</p>
      <h2>{value}</h2>
    </div>
  );
};

const SixD = ({ number, Six }) => {
  return (
    <div className="six-d-card">
      <h3 className="sixd-text">
        <span className="dot">.</span>
        {number}
      </h3>
      <p>{Six}</p>
    </div>
  );
};

export default About;
