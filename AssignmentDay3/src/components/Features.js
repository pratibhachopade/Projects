import React from 'react'
import featureimage from "../images/Frame 19.png";

function Features() {
  return (
    <div id="features">
        <div className='features-model'>
<img src={featureimage} alt="feature-image"/>
        </div>
       <div className='features-text'>
       <h4>This application is art</h4>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                  People also ask</p>
                 <button>View More</button>
       </div>
       <div className='arrow'></div>
    </div>
  )
}

export default Features