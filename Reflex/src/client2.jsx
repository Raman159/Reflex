// import React from 'react'
import './CSS/client2.css'
import Btn from './btn'; 

const Client2 = () => {
  return (
    <div className='unique-client-container'>
        <div className='unique-client-cards'>
            <div className='unique-client-card unique-card1'></div>
            <div className='unique-client-card unique-card2'></div>
            <div className='unique-client-card unique-card3'></div>
            <div className='unique-client-card unique-card4'></div>
        </div>
      
        <div className="unique-client-text">
        <h2>Our valued customers</h2>
        <p>
          Our clients are at the heart of everything we do. We strive to understand their unique needs and deliver tailored solutions that drive success. With a focus on building lasting partnerships, we are committed to exceeding their expectations and helping them achieve their goals.
        </p>
        <Btn btncontent="See More..." />
        </div>
      </div>
  )
}

export default Client2;










// import React, { useState, useEffect } from "react";
// import Navigation from "./Navigation";
// import Services from "./Services";
// import Why from "./Card-2";
// import Client from "./client";
// import Client2 from "./client2";
// import CEO from "./ceo";
// // import Cursor from "./Cursor";

// function App() {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsSmallScreen(window.matchMedia("(max-width: 820px)").matches);
//     };

//     checkScreenSize();

//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   return (
//     <div className="app-container">
//       <Navigation />
//       <Services />
//       <Why />
//       {}
//       {isSmallScreen ? <Client2 /> : <Client />}
//       <CEO />
//     </div>
//   );
// }

// export default App;
