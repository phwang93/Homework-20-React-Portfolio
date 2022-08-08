import React, { useEffect } from "react";
import picture from "../assets/images/face.JPG";
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
            <p>I'm a full-stack web developer with a certificate from the University of New Hampshire coding bootcamp and a
              bachelor's degree from the University of Pittsburgh. I create websites that are: </p>

            <div className="row justify-content-center icon-row">
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i class="fa fa-mobile fa-5x" aria-hidden="true"></i>
                </div>
                <h2 className="responsive">Responsive</h2>
              </div>
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i class="fa fa-lightbulb-o fa-5x" aria-hidden="true"></i>
                </div>
                <h2 className="intuitive">Intuitive</h2>
              </div>
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i class="fa fa-cog fa-5x" aria-hidden="true"></i>
                </div>
                <h2 className="dynamic">Dynamic</h2>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About;