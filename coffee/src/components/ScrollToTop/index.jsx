import React, { useState, useEffect } from "react";
import "./index.scss";

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <i onClick={scrollToTop} class="fa-solid fa-arrow-up-long"></i>;
}

export default ScrollToTopButton;
