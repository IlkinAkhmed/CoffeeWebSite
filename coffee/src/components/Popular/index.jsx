import React from 'react'
import "./index.scss"
import useFetchData from '../../hooks/UseFetchData'

const Popular = () => {
  const {data} = useFetchData("cafenapopular");

  return (
    <section id='popularMenu'>
      <div className="head-texts">
        <span>MENU</span>
        <h2>CAFENA POPULAR MENU</h2>
      </div>
      <div className="wrapper">
        {data.map((item) => (
          <div className="popularCard4">
            <div className="bg-animation"></div>
            <img src={item.img} alt="" />
            <div className="details">
              <h3>{item.name}
                <div className="name-line"></div>
              </h3>
              <p>${item.price}</p>
            </div>
          </div>

        ))}
      </div>


    </section>
  )
}

export default Popular