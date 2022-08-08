import React from "react";
import "./style.css";
import Pdf from "../assets/images/Resume.pdf";

function Footer() {
  return (
    <footer>

      <a href="#home"><i class="fa fa-angle-double-up fa-2x back-to-top" aria-hidden="true"></i><br /></a>

      <br />

      <a href="https://github.com/pshwang93"><i className="fa fa-github fa-2x social-link" aria-hidden="true"></i> </a>
      <a href="https://www.linkedin.com/in/philipshwang/"><i className="fa fa-linkedin fa-2x social-link" aria-hidden="true"></i> </a>
      <a href= {Pdf} target="Resume.pdf"><i className="fa fa-file-text-o fa-2x social-link" aria-hidden="true"></i> </a>
      <a href="mailto:pshwang93@gmail.com"><i className="fa fa-envelope-o fa-2x social-link" aria-hidden="true"></i> </a>
      <p>Philip Hwang © 2022</p>

    </footer>
  )
}

export default Footer;