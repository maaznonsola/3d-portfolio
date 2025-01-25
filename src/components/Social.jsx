import React from "react";
import {socialLinks} from "../constants/staticData";
import {Link} from "react-router-dom";

const Social = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between mt-6">
      <p className="social">
        &copy; {currYear} <strong>Maaz Nonsola</strong>. All rights reserved.
      </p>
      <div className="flex gap-3 justify-center items-center">
        {socialLinks.map((social) => (
          <Link
            to={social.link}
            target={social.name == "Contact" ? "_self" : "_blank"}
            key={social.name}
          >
            <img
              src={social.iconUrl}
              alt={social.name}
              className="className='w-6 h-6 object-contain'"
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Social;
