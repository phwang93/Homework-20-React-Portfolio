import React from 'react';
import './style.css';


const Home = () => {
    return (
        <section id="home">

        <div className="container home-container">
          <h1 className="animate__animated animate__fadeIn">Hi, I'm <span className="name">Philip Hwang.</span></h1>
          <h2 className="animate__animated animate__fadeIn">I'm a full-stack web developer.</h2>
          <a href="#about" className="animate__animated animate__fadeIn"> 
            <button className="btn btn-primary">Who am I?
            <i class="fa fa-angle-double-right fa-lg" aria-hidden="true"></i></button></a>
        </div>
  
      </section>
    )
}


export default Home;