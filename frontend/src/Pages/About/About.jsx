import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";
// import MetaData from "../MetaData";

const About = () => {
  const visitInstagram = () => {
    window.location = "/about";
  };
  document.title = "About Us";
  return (
    <>
      <Header />

      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        {/* <MetaData title={'About Us'} /> */}
        <div className="about-section-box">
          <div>
            <div>
              <img
                style={{ width: "15rem", height: "15rem", margin: "2rem 0" }}
                src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
                alt="Founder"
              />
              <h1>RAJ SHAH & MONARK TALPADA</h1>
              <button onClick={visitInstagram}>Visit Instagram</button>
              <br />
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
