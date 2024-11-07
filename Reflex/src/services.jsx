
import image from './assets/image/services.png';
import Card from './card';
import './CSS/services.css';
import webGif from "./assets/image/web.gif"
import graphicGif from "./assets/image/graphic.gif"
import softwareGif from "./assets/image/software.gif"
import marketGif from "./assets/image/digital marketing.gif"
import mobileGif from "./assets/image/mobile application.gif"
import commerceGif from "./assets/image/ecommerce.gif"

const cardData = [
  {
      "title": "Web Development",
      "image": webGif,
      "description": "We specialize in creating custom websites that are tailored to the specific needs of each client. Our team ofexperts can handle everything from the design and development of the website to ongoing maintenance and updates."
  },
  {
      "title": "Graphic Design",
      "image": graphicGif,
      "description": "We have a team of experienced graphic designers who can create visually appealing and engaging designs for websites, brochures, business cards, and other marketing materials."
  },
  {
      "title": "Mobile Application",
      "image": mobileGif,
      "description": "We have experience in developing mobile apps for Android and iOS platforms, we are able to create apps that are optimized for different devices and screen sizes."
  },
  {
      "title": "Software Development",
      "image":  softwareGif,
      "description": "We have a team of software developers who can create custom software solutions for businesses of all sizes. Whether you need a simple application or a complex system."
  },
  {
      "title": "Digital Marketing",
      "image":marketGif,
      "description": "We provide a variety of digital marketing services such as search engine optimization (SEO), social media marketing, and email marketing to help businesses increase their online visibility and reach more customers."
  },
  {
      "title": "E-Commerce",
      "image": commerceGif,
      "description": "We have experience in creating e-commerce websites and integrating it with various payment gateways and shipping providers. We can help you set up your online store and make it easy for customers."
  }
]



const Services = () => {
  return (
    <div className="services">
      <div className='top'>
      <p className="services-txt">How Can We Help You?</p>
      <img className="triangles" src={image} alt="img" />
      </div>
      <div className="main-services">
        {
          cardData.map((card) => {
           return <Card 
              key={card?.title}
              image={card?.image}
              title={card?.title}
              description={card?.description}/>
              
          })
        }
        
      
      </div>
    </div>
  );
}

export default Services;
