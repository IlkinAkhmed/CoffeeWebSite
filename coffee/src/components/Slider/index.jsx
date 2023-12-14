import React from "react";
import Swiper from "swiper";
import "swiper/css";
import "./index.scss";

const Slider = () => {
  return (
    <section id="slider">
      <div className="headtext">
        <p>CUSTOMER FEEDBACK</p>
        <h2>OUR CUSTOMER REVIEW</h2>
      </div>
      <swiper-container
        class="mySwiper"
        space-between="30"
        centered-slides="true"
        autoplay-delay="2500"
        autoplay-disable-on-interaction="true"
        loop='true'
      >
        <swiper-slide>
          <div className="slider">
            <img
              className="reviewLogo"
              src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/t-quote.png"
              alt=""
            />
            <p className="reviewText">
              Very good quality of food and service. Vast menu with child
              friendly items as well as local seafood and even entrees for those
              who dont like seafood. Great place! Thanks. We absolutely love
              everything there!
            </p>
            <div className="profile">
              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png"
                alt=""
              />
              <h3>RASALINA DE WILLAMSON</h3>
              <p>FOUNDER & CO</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="slider">
            <img
              className="reviewLogo"
              src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/t-quote.png"
              alt=""
            />
            <p className="reviewText">
              Very good quality of food and service. Vast menu with child
              friendly items as well as local seafood and even entrees for those
              who dont like seafood. Great place! Thanks. We absolutely love
              everything there!
            </p>
            <div className="profile">
              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png"
                alt=""
              />
              <h3>RASALINA DE WILLAMSON</h3>
              <p>FOUNDER & CO</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="slider">
            <img
              className="reviewLogo"
              src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/t-quote.png"
              alt=""
            />
            <p className="reviewText">
              Very good quality of food and service. Vast menu with child
              friendly items as well as local seafood and even entrees for those
              who dont like seafood. Great place! Thanks. We absolutely love
              everything there!
            </p>
            <div className="profile">
              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png"
                alt=""
              />
              <h3>RASALINA DE WILLAMSON</h3>
              <p>FOUNDER & CO</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </section>
  );
};

export default Slider;
