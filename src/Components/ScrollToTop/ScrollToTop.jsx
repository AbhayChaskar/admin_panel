import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <a
      onClick={scrollToTop}
      className={`scroll-to-top d-flex align-items-center justify-content-center ${
        scroll > 100 ? "active" : undefined
      }`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollToTop;
