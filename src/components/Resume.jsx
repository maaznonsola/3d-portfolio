import React from "react";
import {download} from "../assets/icons";

const Resume = () => {
  return (
    <section className="flex justify-between items-center mt-6">
      <p className="font-semibold text-3xl">
        Have a quick look on profile?
        <br />
        Download the CV
      </p>
      <a href="/Maaz_Resume.pdf" download>
        <button className="cv_button btn" type="button">
          <span className="cv_button__text">Download</span>
          <span className="cv_button__icon">
            <img src={download} alt="download-cv" className="download_image" />
          </span>
        </button>
      </a>
    </section>
  );
};

export default Resume;
