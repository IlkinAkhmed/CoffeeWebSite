import React from 'react'
import "./index.scss"
import Logo from "/public/img/logo.png"
import ScrollToTopButton from '../../components/ScrollToTop'

const Footer = () => {
  return (
    <footer>
      <div className="scroll-top">
        <ScrollToTopButton />
        <p>GO TO TOP</p>
      </div>
      <div className="footer-inner">
        <div className="footer-details">
          <div className="phone">
            <p><i class="fa-solid fa-mobile-screen-button"> </i> PHONE: +994 50 5798656</p>
          </div>
          <div className="address">
            <p><i class="fa-solid fa-location-dot"></i> ADDRESS: Binagadi, Biladjari</p>
          </div>
          <div className="email">
            <input type="email" placeholder='Enter your email...' />
            <p>SUBSCRIBE <i class="fa-brands fa-telegram"></i></p>
          </div>
        </div>
        <div className="social-media">
          <div className="logo">
            <img src={Logo} alt="" />
            <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum</p>
          </div>
          <div className="links">
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-facebook'></i>
            <i className='fa-brands fa-youtube'></i>
            <i className='fa-brands fa-google-plus'></i>
            <i className='fa-brands fa-instagram'></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer