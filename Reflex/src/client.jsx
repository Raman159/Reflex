// import React from 'react'
import './CSS/client.css'
import Btn from './btn'; 
const client = () => {
  return (
    <div className='client-container'>
        <div className='client-cards'>
            <div className='client-card card1'></div>
            <div className='client-card card2'></div>
            <div className='client-card card3'></div>
            <div className='client-card card4'></div>
            <div className='client-card card5'></div>
        </div>
      
        <div className="client-text">
        <h2>Our valued customers</h2>
        <p>
          Our clients are at the heart of everything we do. We strive to understand their unique needs and deliver tailored solutions that drive success. With a focus on building lasting partnerships, we are committed to exceeding their expectations and helping them achieve their goals.
        </p>
        <Btn btncontent="See More" link='/clients'/>
        </div>
      </div>
  )
}

export default client