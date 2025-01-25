import React from "react";
import {Link} from "react-router-dom";
import Connect from "../components/Connect";
import {projects} from "../constants/staticData";
import {github} from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text brown-gradient_text">My Projects</h1>
      <p className="text-slate-500 leading-relaxed mt-2">
        Each project reflects my passion for combining creativity with technical
        expertise. From interactive 3D experiences to dynamic web applications,
        I aim to deliver solutions that are innovative, functional, and visually
        compelling. These projects not only demonstrate my skills in modern
        technologies but also highlight my ability to solve real-world problems
        with clean and efficient code. Your collaboration is highly valued!
      </p>
      <div className="pt-10 flex flex-wrap gap-16 ">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="w-12 h-12 new-btn">
              <div className="new-btn-front">
                <img src={project.iconUrl} alt="amazon" />
              </div>
              <div className="new-btn-back"></div>
            </div>

            <h1 className="mt-4 text-2xl font-poppins font-semibold">
              {project.name}
            </h1>
            <p className="text-slate-500 mt-2">{project.description}</p>
            <div className="font-semibold text-amber-700 mt-2">
              <Link to={project.link} target="_blank" rel="noopener noreferrer">
                <button className="btn-github">
                  <img src={github} alt="" className="w-4 h-4" />
                  <span className="font-poppins">View on Github</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-8" />
      <Connect />
    </section>
  );
};

export default Projects;
