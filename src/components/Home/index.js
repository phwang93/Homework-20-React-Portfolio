import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <h4 className="subtitle">Hello, my name is</h4>
                    <h1>Philip <span id="ln">Hwang</span></h1>
                    <h4 className="subtitle">I'm a Full Stack Web Developer</h4>
                </h1>
                <Link to="/about">
                    <button>Who am I?</button>
                </Link>
            </div>
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/assets/images/me.png`}
                    alt="Me"
                />
            </div>
        </div>
    )
}


export default Home;