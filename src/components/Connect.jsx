import React from "react";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <section className="flex justify-between items-center mt-6">
      <p className="font-semibold text-3xl">
        Have a project in mind?
        <br />
        Let’s connect & build something together!
      </p>
      <Link to={"/contact"}>
        <div className="btn">Connect</div>
      </Link>
    </section>
  );
};

export default Connect;
