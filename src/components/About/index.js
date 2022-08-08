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
            <p>I'm a full-stack web developer with a certificate from the UCI Full Stack coding bootcamp,  I create websites that are: </p>

            <div className="row justify-content-center icon-row">
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i class="fa fa-mobile fa-5x" aria-hidden="true"></i>
                </div>
                <h2 className="tech">Tech</h2>
              </div>
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i class="fa bi-currency-dollar fa-5x" aria-hidden="true"></i>
                </div>
                <h2 className="business">Business</h2>
              </div>
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i class="fas bi-apple fa-3x" aria-hidden="true"></i>
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