import React, { useContext, useState } from "react";
import "./index.scss";
import "../../App.scss"
import Logo from "/public/img/logo.png";
import LogoBlack from "/public/img/logo-black.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const navigate = useNavigate()

  const { basketArr } = useContext(BasketContext);
  return (
    <nav>
      <div className="nav-inner">
        <div className="navtexts">
          <ul>
            <li>
              <NavLink className={'navlink'} to={"/"}><div className="circle"></div>HOME </NavLink>
            </li>
            <li>

              <NavLink className={'navlink'} to={"/about"}><div className="circle"></div>ABOUT</NavLink>
            </li>
            <li>

              <NavLink className={'navlink'} to={"/menu"}><div className="circle"></div>MENU</NavLink>
            </li>
            <li>

              <NavLink className={'navlink'} to={"/reservation"}><div className="circle"></div>RESERVATION</NavLink>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img onClick={() => navigate('/')} src={Logo} alt="" />
        </div>
        <div className="right-side-nav">
          <div className="nav-texts">
            <ul>
            <li className="sublink">
                <NavLink className={'navlink'} to={"/faq"}><div className="circle"></div>FAQ</NavLink>
            </li>
              <li className="sublink">

                <NavLink className={'navlink'} to={"/shop"}><div className="circle"></div>SHOP</NavLink>
                <div className="submenu">
                  <ul className="sub-texts">
                    <li><Link to={"/shop"}>SHOP</Link></li>
                    <li>SHOP DETAILS</li>
                    <li>SHOP CART</li>
                    <li>SHOP CHECKOUT</li>
                  </ul>
                </div>
              </li>
              <li className="sublink">

                <NavLink className={'navlink'} to={"/contact"}><div className="circle"></div>CONTACT</NavLink>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <i onClick={()=>setIsSearchOpen(!isSearchOpen)} className={`fa-solid ${isSearchOpen ? 'fa-xmark' : 'fa-magnifying-glass'}`}></i>
            <i onClick={()=>navigate('/wishlist')} className="fa-regular fa-heart"></i>
            <i onClick={()=>navigate('/basket')} className="fa-solid fa-basket-shopping">
              <p className="message">{basketArr.length}</p>
            </i>
            <i onClick={() => setIsNavOpen(!isNavOpen)} className="fa-solid fa-bars"></i>
          </div>

        </div>
      </div>
      <div className={`side-navbar ${isNavOpen ? 'nav-active' : ''} `}>
        <i onClick={() => setIsNavOpen(!isNavOpen)} className="fa-solid fa-xmark"></i>
        <div className="nav-head">
          <img src={LogoBlack} alt="" />
        </div>
        <div className="texts">
          <ul>
            <li><Link onClick={() => setIsNavOpen(!isNavOpen)} to={"/"} className="side-nav-link">HOME</Link></li>
            <li><Link onClick={() => setIsNavOpen(!isNavOpen)} to={"/about"} className="side-nav-link">ABOUT</Link></li>
            <li><Link onClick={() => setIsNavOpen(!isNavOpen)} to={"/menu"} className="side-nav-link">MENU</Link></li>
            <li><Link onClick={() => setIsNavOpen(!isNavOpen)} to={"/reservation"} className="side-nav-link">RESERVATION</Link></li>
            <li><Link onClick={() => setIsOpen(!isOpen)} className="side-nav-link opener">SHOP <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></Link>
              <ul className={`shop-texts ${isOpen ? 'active' : ''}`}>
                <li><Link onClick={() => setIsNavOpen(!isNavOpen)}  to={"/shop"} className="side-nav-link">Shop</Link></li>
                <li><Link onClick={() => setIsNavOpen(!isNavOpen)} className="side-nav-link">Shop Cart</Link></li>
                <li><Link onClick={() => setIsNavOpen(!isNavOpen)} className="side-nav-link">Shop Details</Link></li>
                <li><Link onClick={() => setIsNavOpen(!isNavOpen)} className="side-nav-link">Shop Checkout</Link></li>
                <hr />
              </ul>
            </li>
            <li><Link  onClick={() => setIsNavOpen(!isNavOpen)} to={'/contact'} className="side-nav-link">CONTACT</Link></li>
          </ul>
        </div>
      </div>
      <div className={`search ${isSearchOpen ? 'search-active' : ''}`}>
          <input type="text" placeholder="Search Keywords..." />
          <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  );
};

export default Navbar;
