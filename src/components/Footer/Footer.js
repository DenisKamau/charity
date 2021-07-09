import React from "react";
import "./Footer.css";
import arrow from "../assets/arrow_forward_24px.png";

const Footer = () => {
  return (
    <section data-testid="footer" className="section footerSection">
      <div className="container footer">
        <div className="leftBlock">
          <div className="logo" style={{ color: "black" }}>
            charity<span>.</span>
          </div>
          <p>Giving help to those who need it.</p>
        </div>
        <div className="rightBlock">
          <div className="footerColumn first">
            <h5>Organization</h5>
            <ul>
              <li>
                <a href="1#">About</a>
              </li>
              <li>
                <a href="2#">Blog</a>
              </li>
              <li>
                <a href="3#">Support</a>
              </li>
            </ul>
          </div>
          <div className="footerColumn">
            <h5>Donate</h5>
            <ul>
              <li>
                <a href="4#">Rescue an orphan</a>
              </li>
              <li>
                <a href="5#">Fund an orphanage</a>
              </li>
            </ul>
          </div>
          <div className="footerColumn">
            <h5>Contact Us</h5>
            <ul>
              <li>
                <a href="6#">info@charity.com</a>
              </li>
              <li>
                <a href="7#">1200-200-890-345</a>
              </li>
              <li>
                <a href="8#">Nairobi, KE</a>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h5>Stay up to date</h5>
            <p>Subscribe to our newsletter for upcoming projects</p>
            <div className="inputForm">
              <input type="email" placeholder="Email"></input>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <p>© Copyright charity.</p>
      </div>
    </section>
  );
};

export default Footer;
