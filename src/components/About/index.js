import React, { useEffect } from "react";
import picture from "../assets/images/me.PNG";
import "./style.css";
import AOS from "aos";

function About() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <section id="about">

      <div className="container page-container">
        <h1 data-aos="fade-up">About me</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 img-column" data-aos="zoom-in-right">
          <img src={picture} alt="me"></img>
          </div>
          <div className="col-12 col-md-8 p-column" data-aos="fade-left">
            <p>I’m an aspiring Web Developer, currently finishing my Full Stack Web Developer’s certification at UCI. In 2015, I received my BS in Biochemistry, with a minor in Hospitality, at Cal Poly Pomona. Until early 2022, I’ve been employed as a High Level Operations Manager for a few well known Restaurant groups in California, and at an International-Level. Currently, I'm a Sales Professional / Brand Ambassador for the Rolex Boutique in South Coast Plaza. <br />
             When it comes to the Tech Industry, I wish to expand my knowledge and skills. I’ve always believed in the saying “Don’t put all your eggs in one basket”, and "Knowledge is key to success". The more you know, the better you can connect with great individuals around the world. <br/>
             These are a few fields that I'm well versed on:  </p>

            <div className="row justify-content-center icon-row">
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i className="fa fa-mobile fa-5x" aria-hidden="true"></i>
                </div>
                <h2 className="tech">Tech</h2>
              </div>
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i className="fa bi-currency-dollar fa-5x" aria-hidden="true"></i>
                </div>
                <h2 className="business">Business</h2>
              </div>
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i className="fas bi-apple fa-3x" aria-hidden="true"></i>
                </div>
                <h2 className="retail">Retail</h2>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About;