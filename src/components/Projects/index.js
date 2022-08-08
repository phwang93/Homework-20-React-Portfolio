import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";
import "./style.css";
import AOS from "aos";

function Portfolio() {

  const [state, setState] = useState([]);

  useEffect(() => {
    setState(PortfolioItems);
    AOS.init();
    AOS.refresh();
  }, []);

  const PortfolioItems = [
    {
      id: 1,
      name: "Work Bytes",
      image: "https://media-cdn.grubhub.com/image/upload/c_scale,w_1650/q_50,dpr_auto,f_auto,fl_lossy,c_crop,e_vibrance:20,g_center,h_900,w_800/v1539269005/Onboarding/SL/burger-and-fries.jpg",
      tech: "jQuery / Materialize",
      link: "https://relizabet.github.io/Work_Bytes/",
      github: "https://github.com/dylanbest15/Work-Bytes",
    },
    {
      id: 2,
      name: "Outdoor Adventure Buddies",
      image: "https://www.referenceforbusiness.com/photos/outdoor-adventure-travel-company-694.jpg",
      tech: "Handlebars / MySQL",
      link: "https://whispering-castle-57159.herokuapp.com/",
      github: "https://github.com/dylanbest15/Outdoor-Adventure-Buddies"
    },
    {
      id: 3,
      name: "Job Trackr",
      image: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F669868153%2F0x0.jpg%3Ffit%3Dscale",
      tech: "React.js / MySQL",
      link: "https://whispering-woodland-82554.herokuapp.com/",
      github: "https://github.com/dylanbest15/Job-Trackr"
    },
    {
      id: 4,
      name: "Fitness Tracker",
      image: "https://www.medibank.com.au/content/dam/livebetter/en/images/migrated/50e391fd048f7ca173459df82eff345e/Lightning_workout_Compressed.jpg",
      tech: "Express / MongoDB",
      link: "https://warm-spire-59876.herokuapp.com/",
      github: "https://github.com/dylanbest15/Fitness-Tracker"
    }
  ]

  return (
    <section id="portfolio">

      <div className="container page-container portfolio-container">
        <h1 data-aos="fade-up">My portfolio.</h1>
        <div className="row">

          {state.map(item => (
            <PortfolioItem
              name={item.name}
              tech={item.tech}
              image={item.image}
              link={item.link}
              github={item.github}
            />
          ))}

        </div>
      </div>
    </section>
  )
}