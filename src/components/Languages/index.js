import { useState } from 'react';
import './index.scss'

const Languages = () => {

  const handleOnMouseMove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  }

  return (
    <div className='languages-container'>
      <div className="wrapper" id='cards' onMouseMove={handleOnMouseMove}> 
        <div className='lan-html card'>
          <div className="card-border"></div>
          <div className="card-content">

          </div>
            
        </div>
        <div className='lan-css card' > 
          <div className="card-border"></div>         
          <div className="card-content">

          </div>
        </div>
        <div className='lan-js card'>
          <div className="card-border"></div>
          <div className="card-content">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Languages