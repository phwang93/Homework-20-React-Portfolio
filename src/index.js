import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "animate.css/animate.min.css";
import "aos/dist/aos.css";

ReactDOM.render(
    <BrowserRouter basename="/react-portfolio">
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
