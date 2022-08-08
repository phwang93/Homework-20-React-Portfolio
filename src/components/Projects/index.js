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
      name: 'Watch and Sell',
      image: "https://github.com/phwang93/Project-2-Watch-and-Sell/blob/main/public/imgs/app.png?raw=true",
      tech: "MySQL / HandleBars / Node.js / Express",
      link: "https://watch-sell-app.herokuapp.com/",
      github: "https://github.com/phwang93/Project-2-Watch-and-Sell",
    },
    {
      id: 2,
      name: "ReadMe Generator",
      image: "https://github.com/phwang93/Homework-9-README.md-Generator/blob/main/assets/demo/demo.gif?raw=true",
      tech: "Node.js / Inquirer.js",
      link: "https://github.com/phwang93/Homework-9-README.md-Generator/blob/main/assets/demo/demo.gif",
      github: "https://github.com/phwang93/Homework-9-README.md-Generator"
    },
    {
      id: 3,
      name: "Team Generator",
      image: "https://github.com/phwang93/Homework-10-OOP-Engineering-Team/blob/main/imgs/demo2.gif?raw=true",
      tech: "React.js / MySQL",
      link: "https://github.com/phwang93/Homework-10-OOP-Engineering-Team/blob/main/imgs/demo2.gif",
      github: "https://github.com/phwang93/Homework-10-OOP-Engineering-Team"
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