import React, { useState } from "react";
import "./index.scss";

const Header = () => {
  const [isIframeOpen, setIsIframeOpen] = useState(false);
  return (
    <header>
      <div className="header-inner">
        <h1>ROSTED COFFEE FOR YOU</h1>
        <p>
          The coffee is brewed by first roasting the green coffee beans over hot
          coals in a brazier. given an opportunity to sample.
        </p>
        <div className="header-buttons">
          <button className="beige-button">TESTY COFEE</button>
          <button className="black-button">READ MORE</button>
        </div>
      </div>
      <div className="links">
        <div className="social-media">
          <i className="fa-brands fa-facebook"> FACEBOOK</i>
          <i className="fa-brands fa-twitter"> TWITTER</i>
          <i className="fa-brands fa-youtube"> YOUTUBE</i>
        </div>
        <div className="youtube-link">
          <i
            onClick={() => setIsIframeOpen(!isIframeOpen)}
            className={`fa-solid ${isIframeOpen ? "fa-xmark" : "fa-play"}`}
          ></i>
          {isIframeOpen ? <p>Close Video</p> : <p>Play Video</p>}
        </div>
        <iframe
          className={`${isIframeOpen ? "iframe-active" : ""}`}
          src="https://www.youtube.com/embed/gvPetTPFsZM"
          title="YouTube video player"
          frameBorder="0"
        ></iframe>
      </div>
    </header>
  );
};

export default Header;
