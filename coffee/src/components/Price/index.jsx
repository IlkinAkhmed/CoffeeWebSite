import React, { useContext, useState } from 'react';
import "./index.scss"
import { searchContext } from '../../context/searchContext';

const Price = () => {
  const {sliderValue,handleSliderChange} = useContext(searchContext)

  return (
    <div className='search-product'>
      <h2>SEARCH HERE</h2>
      <div className="slidecontainer">
        <input style={{background: "#c7a17a"}} type="range" min="0" max="50" value={sliderValue} className="slider" id="myRange" onChange={handleSliderChange} />
        <div className='price'>
          <p>$0 - ${sliderValue}</p>
          <button>FILTER</button>
        </div>
    </div>
    </div>
    
  );
};

export default Price;
