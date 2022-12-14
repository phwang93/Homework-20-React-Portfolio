import React, { useEffect } from "react";
import AOS from "aos";

function ProjectItem(props) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="col-6 col-md-3">
      <div className="container item-container" data-aos="zoom-in-up">
        <img src={props.image} alt={props.name}></img>
        <div className="middle">
          <p className="text-name">{props.name}</p>
          <p className="text-tech">{props.tech}</p>
          <a href={props.link}><button className="btn btn-primary btn-livelink">Deployed</button></a>
          <a href={props.github}><button className="btn btn-primary btn-github">Github</button></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem;