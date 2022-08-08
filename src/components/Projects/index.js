import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import "./style.css";
import AOS from "aos";

function Projects() {

  const [state, setState] = useState([]);

  useEffect(() => {
    setState(ProjectItems);
    AOS.init();
    AOS.refresh();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ProjectItems = [
    {
      id: 1,
      name: 'Work Bytes',
      image: "https://www.referenceforbusiness.com/photos/outdoor-adventure-travel-company-694.jpg",
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
    },
    {
        id: 4,
        name: "Fitness Tracker",
        image: "https://www.medibank.com.au/content/dam/livebetter/en/images/migrated/50e391fd048f7ca173459df82eff345e/Lightning_workout_Compressed.jpg",
        tech: "Express / MongoDB",
        link: "https://warm-spire-59876.herokuapp.com/",
        github: "https://github.com/dylanbest15/Fitness-Tracker"
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
        <h1 data-aos="fade-up">Portfolio</h1>
        <div className="row">

          {state.map(item => (
            <ProjectItem
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

export default Projects;