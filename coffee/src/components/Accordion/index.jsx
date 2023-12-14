import React, { useState } from 'react'
import "./index.scss"

const Accordion = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    };

  return (
    <div className="accordion-item">
      <div className="accordion-header">
        <button onClick={handleOpen}><i class="fa-solid fa-arrow-down"></i></button>
        <h2>{title}</h2>
      </div>
      {isOpen && 
        <p>{content}</p>
      }
    </div>
  )
}

export default Accordion