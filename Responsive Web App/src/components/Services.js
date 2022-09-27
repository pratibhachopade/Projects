import React from 'react'
import Box from './Box';
import image1 from "../images/s1.png";
import image2 from "../images/s2.png";

function Services() {
  return (
    <div className='services'>
        <div className='s-heading'>
          </div>
          <div className='b-container'>
          <Box image={image1} alte={image1} button='react'/>
          <Box image={image2} alte={image2} button='js' />
      </div>
        
    </div>
  )
}

export default Services