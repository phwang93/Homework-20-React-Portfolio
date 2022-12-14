import React from "react";
import "./style.css";
import Pdf from "../assets/images/Resume.pdf";

function Navbar() {
    
  return (
    <nav className="navbar fixed-top navbar-expand-lg">

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <a href="https://github.com/phwang93"><i className="fa fa-github fa-lg" aria-hidden="true"></i> </a>
      <a href="https://www.linkedin.com/in/philipshwang/"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i> </a>
      <a href="mailto:pshwang93@gmail.com"><i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i> </a>
      <a href= {Pdf} target="Resume.pdf"><i className="fa fa-file-text-o fa-lg" aria-hidden="true"></i> </a>
    </nav>
  )
}

export default Navbar;