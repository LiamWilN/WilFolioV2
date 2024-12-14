import React from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../libs/me";

const ProjectSection = () => {
  return (
    <section className="py-4">
      <h1 className="text-2xl font-extrabold py-2">Projects</h1>
      <div className="px-2 space-y-3">
        {PROJECTS.map((item) => {
          return (
            <Link to="/work" key={item.id}>
              <h2 className="text-lg font-bold">{item.name}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
