import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";
import icon1 from "../assets/people_24px.svg";
import icon2 from "../assets/whatshot_24px.svg";
import icon3 from "../assets/mood_24px.svg";
import image1 from "../assets/larm-rmah-AEaTUnvneik-unsplash-min.jpg";
import image2 from "../assets/seth-doyle-zf9_yiAekJs-unsplash-min.jpg";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <>
      <section className="hero__Section">
        <Navbar />
        <div className="heroSection__Contents container">
          <h1>Do a good thing make someone smile</h1>
          <h2>Give a helping hand to those who need it!</h2>
          <button className="herobtn2 button">Get started</button>
        </div>
      </section>

      <section className="section mid">
        <div className="container midsection">
          <h3>
            Share your love and<span> get involved</span>
          </h3>
          <div className="midsection__Content">
            <div className="contentColumn">
              <img src={icon1} alt="icon1" />
              <h4>Be a Volunteer</h4>
              <p>Become a Volunteer if you are ready to support people and the community</p>
            </div>
            <div className="contentColumn">
              <img src={icon2} alt="icon1" />
              <h4>Comfort</h4>
              <p>Make someone’s life by giving of yours.</p>
            </div>
            <div className="contentColumn">
              <img src={icon3} alt="icon1" />
              <h4>Donate</h4>
              <p>Start donating to our campaigns to support us and make someone smile. </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container bottomsection">
          <h3 className="heading">
            More people,<span> More Impact</span>
          </h3>
          <div className="imageandtext div1">
            <img className="img1" src={image1} alt="image1" />
            <div className="textContent content1">
              <h5>Highest form of love </h5>
              <p>Charities bring together people who care about a cause so that they can make a difference.</p>
            </div>
          </div>
          <div className="imageandtext div2">
            <img className="img2" src={image2} alt="image1" />
            <div className="textContent content2">
              <h5>Unselfish love of one’s fellow men </h5>
              <p>
                Since the beginning our theme has been about one thing: improving the lives of others by any means. Everything we do aims to help
                those that have limited resources..
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section4">
        <div className="container volunteersection">
          <h3>Become a Volunteer</h3>
          <p>Join us for a better life and beautiful future </p>
          <button className="volunteerButton">Join Us Now</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
