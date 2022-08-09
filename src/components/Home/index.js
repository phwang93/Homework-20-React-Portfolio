import React from 'react';
import './style.css';
import Typical from 'react-typical'

const what = [
    'Web Developer 💻', 1500,
    'Restaurant Consultant 🥂', 1500,
    'Sales Professional 💲', 1500,
    'Brand Ambassador ⌚', 1500,
  ];


const Home = () => {
    return (
        <section id="home">

        <div className="container home-container">
          <h1 className="animate__animated animate__fadeIn">Hi, I'm <span className="name">Philip Hwang.</span></h1>
          <h2 className="animate__animated animate__fadeIn">I'm a <Typical wrapper="b" steps={what} loop={Infinity} className="what" />
          </h2>
          <a href="#about" className="animate__animated animate__fadeIn"> 
            <button className="btn btn-primary">Who am I?
            <i className="fa fa-angle-double-right fa-lg" aria-hidden="true"></i></button></a>
            </div>
  
      </section>
    )
}


export default Home;