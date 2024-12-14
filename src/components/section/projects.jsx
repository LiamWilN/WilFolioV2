import React from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../libs/me";

const ProjectSection = ({ isfromHome = true }) => {
  return (
    <section className="py-4">
      <h1 className="text-2xl font-extrabold py-2">Projects</h1>
      <div className="px-2 space-y-2">
        {PROJECTS.map((item) => {
          return (
            <Link
              className={`block bg-inherit ${
                isfromHome &&
                "ease-in duration-300 hover:bg-neutral-300 dark:hover:bg-neutral-800"
              } p-2 rounded-md`}
              key={item.id}
              to="/projects"
            >
              <h2 className="text-lg font-bold">{item.name}</h2>
              <div className="flex gap-2 items-center">
                <h4 className="text-sm py-2">Technology used: </h4>
                {item.technologies.map((tech, index) => (
                  <img
                    key={index}
                    src={tech.icon}
                    alt={tech.name}
                    className="h-5 w-5"
                    title={tech.name}
                  />
                ))}
              </div>
              <p
                className={`${
                  isfromHome ? "line-clamp-1" : "line-clamp-none"
                } text-sm text-neutral-800 dark:text-neutral-400`}
              >
                {item.description}
              </p>
              <ul
                className={`${
                  isfromHome ? "hidden" : "visible"
                } list-disc pl-5 mt-2 text-sm`}
              >
                {item.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
