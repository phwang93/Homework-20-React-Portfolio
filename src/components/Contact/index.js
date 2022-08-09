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
        <p data-aos="fade-up">I'm always looking for new career opportunities. <br />
          If you wish to connect, or ask me any questions,<br />
          Feel free to reach out 🙂. </p>

          <form className="was-validated mb-3">
                <div className="form-group mb-2">
                    <input data-aos="fade-up" type="text" className="form-control" id="nameFormControlInput" placeholder="Please enter your Name" required></input>
                    <div data-aos="fade-up" className="invalid-feedback">Please enter your name.</div>
                </div>

                <div className="form-group mb-2">
                    <input data-aos="fade-up" type="email" className="form-control" id="emailFormControlInput" placeholder="Please enter your Email" required></input>
                    <div data-aos="fade-up" className="invalid-feedback">Please enter a valid email.</div>
                </div>

                <div className="form-group mb-2">
                    <textarea data-aos="fade-up" className="form-control" id="messageFormControlTextarea" rows="6" required></textarea>
                    <div data-aos="fade-up" className="invalid-feedback">Please leave a message ◡̈ </div>
                </div>
                <input data-aos="fade-up" type="submit" value="SUBMIT" />
            </form>

        {/* <div className="row justify-content-center contact-row">
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
        </div> */}

      </div>

    </section>
  )
}

export default Contact;