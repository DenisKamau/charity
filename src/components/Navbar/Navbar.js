import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setisMobile] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    window.scrollY >= 70 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={!navbar ? "navbar" : "navbar active"}>
      <nav className="navSection">
        <div className="navbar__Container container">
          <div className="logo">
            charity<span>.</span>
          </div>
          <ul className={isMobile ? "navbar__mobileLinks" : "navbar__Links"} onClick={() => setisMobile(false)}>
            <li className="home">Home</li>
            <li className="about">About us</li>
            <li className="blog">Blog</li>
            <li className="contact">Contact</li>

            {isMobile ? <li className="contact">Donate</li> : <button className="btn donateButton">Donate</button>}
          </ul>
          <button onClick={() => setisMobile(!isMobile)} className="menu">
            {isMobile ? <>✕</> : <>☰</>}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
