import React from "react";
import "./index.scss";

const Map = () => {
  return (
    <section id="map">
      <div className="maparea"  style={{ width: "50%" }}>
        <iframe
        className="mapArea"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%C6%8Fsas%20bina,%2025%20H%C3%BCseyn%20Cavid%20Prospekti,%20Bak%C4%B1%201073+(Our%20Univercity)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">
            Population calculator map
          </a>
        </iframe>
      </div>
      <div className="mapForm">
        <span>RESERVATION</span>
        <h2>BOOKING A TABLE</h2>
        <div className="input">
          <input type="text" placeholder="4 person" />
          <i class="fa-solid fa-user"></i>
        </div>
        <div className="input">
          <input type="text" placeholder="05.07.2003" />
          <i class="fa-solid fa-calendar-days"></i>
        </div>
        <div className="input">
          <input type="text" placeholder="12:30" />
          <i class="fa-regular fa-clock"></i>
        </div>
        <button>BOOK A TABLE</button>
      </div>
    </section>
  );
};

export default Map;
