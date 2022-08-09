import React, { useEffect } from "react";
import "./style.css";
import AOS from "aos";

function Contact() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="contact">

      <div className="container page-container">
        <h1 data-aos="fade-up">Contact Me</h1>
        <p>I'm always looking for new career opportunities. <br />
          If you wish to hire me, work together, or ask me any questions,<br />
          Feel free to reach out. </p>

        <div className="row justify-content-center contact-row">
          <div className="col-12">
            <a href="mailto:pshwang93@gmail.com">
              <i className="fa fa-envelope-o fa-2x social-link" aria-hidden="true"></i>Email: pshwang93@gmail.com</a>
          </div>

          <div className="col-12 col-md-3">
            <a href="https://github.com/pshwang93/">
              <i className="fa fa-github fa-2x social-link" aria-hidden="true"></i>Github: pshwang93</a>
          </div>

          <div className="col-12 col-md-3">
            <a href="https://www.linkedin.com/in/philipshwang/">
              <i className="fa fa-linkedin fa-2x social-link" aria-hidden="true"></i>Linkedin: philipshwang</a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact;