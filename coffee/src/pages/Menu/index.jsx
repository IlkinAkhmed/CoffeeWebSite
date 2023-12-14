import React, { useContext } from 'react'
import "./index.scss"
import useFetchData from '../../hooks/UseFetchData'
import { searchContext } from './../../context/searchContext';
import { NavLink } from 'react-router-dom';
import Loading from '../isLoading';
import Error from '../Error';

const Menu = () => {
  const { data, isLoading, error } = useFetchData("menu");
  const { category, setCategory } = useContext(searchContext)

  return (
    <>
      {
        isLoading ? (
          <Loading />
        ) : error ? (
           <Error />
        ) : (
          <div>
      <div className='contact-main'>
        <h2>CAFENA MENU</h2>
        <div className='home-slash-page'>
          <h6>HOME/</h6>
          <span>MENU</span>
        </div>
        <img className='shape' src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
      </div>
      <div className="head-texts">
        <span>MENU</span>
        <h2>CAFENA POPULAR MENU</h2>
      </div>
      <div className='menu-category-container'>
        <div className='menu-category'>
          <div className='menu-btns'>
            <button onClick={() => setCategory('All')} id='all'>ALL</button>
            <button onClick={() => setCategory('Hot Coffee')}>HOT COFFEE</button>
            <button onClick={() => setCategory('Cold Coffee')}>COLD COFFEE</button>
            <button onClick={() => setCategory('Hot Drink')}>HOT DRINKS</button>
            <button onClick={() => setCategory('Cold Drink')}>COLD DRINKS</button>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "80%" }} className="wrapper">
        {data
          .filter((item) => item.category === category || category === 'All')
          .map((item) => (
            <div key={item.id} className="popularCard2">
              <div className="bg-animation"></div>
              <img src={item.img} alt="" />
              <div className="details">
                <h3>{item.name}
                  <div className="name-line"></div>
                </h3>
                <p>${item.price}.00</p>
              </div>
            </div>

          ))}
      </div>
    </div>
        )
      }
    </>
  )
}

export default Menu