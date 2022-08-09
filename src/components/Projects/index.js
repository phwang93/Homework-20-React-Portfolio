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
      name: "Note Taker",
      image: "https://github.com/phwang93/Homework-11-Express-Note-Taker/blob/main/imgs/demo1.gif?raw=true",
      tech: "Express / Node.js",
      link: "https://philips-note-taker.herokuapp.com",
      github: "https://github.com/phwang93/Homework-11-Express-Note-Taker"
    },
    {
        id: 5,
        name: "E-Commerce BackEnd",
        image: "https://github.com/phwang93/Homework-13-ORM/blob/main/imgs/Demo.gif?raw=true",
        tech: "Node / Inquirer / MySQL / Sequelize / Insomnia / Dotenv",
        link: "https://youtu.be/Rz3_PmW4LyY",
        github: "https://github.com/phwang93/Homework-13-ORM"
    },
    {
        id: 6,
        name: "Tech Blog App",
        image: "https://github.com/phwang93/Homework-14-Tech-Blog/raw/main/public/imgs/app.png",
        tech: "Node / Inquirer / Express / MySQL / Sequelize / Dotenv / Handlebars / Insomnia / Bcrypt / Heroku / Bulma",
        link: "https://ph-tech-app.herokuapp.com/",
        github: "https://github.com/phwang93/Homework-14-Tech-Blog"
    }
    ,
    {
        id: 7,
        name: "Social Network API",
        image: "https://github.com/phwang93/Homework-18-SocialNetworkAPI/raw/main/imgs/Demo.gif",
        tech: "Express / Moment / MongoDB / Mongoose ODM",
        link: "https://youtu.be/jMBa5A6An2c",
        github: "https://github.com/phwang93/Homework-18-SocialNetworkAPI"
    }
    ,
    {
        id: 8,
        name: "JATE APP",
        image: "https://github.com/phwang93/Homework-19-Text-Editor/raw/main/client/src/images/screenshot.png",
        tech: "Node / Express / Heroku / Webpack",
        link: "https://jate-app-ph.herokuapp.com/",
        github: "https://github.com/phwang93/Homework-19-Text-Editor"
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