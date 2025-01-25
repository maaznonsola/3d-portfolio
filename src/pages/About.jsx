import React from "react";
import {skills, experiences} from "../constants/staticData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Social from "../components/Social";
import Resume from "../components/Resume";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text brown-gradient_text">Hi, I'm Maaz Nonsola</h1>
      <p className="text-slate-500 leading-relaxed mt-2">
        Software Engineer, specializing in designing and building applications.
      </p>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="flex flex-wrap gap-12 mt-16">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20 group" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10">
        <h3 className="subhead-text">Work Experience</h3>
        <p className="text-slate-500 leading-relaxed mt-2">
          I've worked with all sorts of companies, leveling up my skills and
          teaming up with smart people. Here's the rundown:
        </p>
      </div>
      <div className="pt-5">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              iconStyle={{background: experience.iconBg}}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "#000",
                background: "#e6ded6",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p
                  className="text-black-500 font-medium text-base"
                  style={{margin: 0}}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-black-500/70 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <hr className="mt-6" />
      <Resume />
      <hr className="mt-6" />
      <Social />
    </section>
  );
};

export default About;
