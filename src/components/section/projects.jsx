import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../libs/me";

const ProjectSection = ({ isfromHome = true }) => {
  return (
    <section className={`${isfromHome ? "border-t-[1px] py-8" : "py-4"}`}>
      <h1 className="text-2xl font-extrabold pt-2 pb-4">Projects</h1>
      <div className="px-2 space-y-2">
        {PROJECTS.map((item) => {
          return (
            <Link
              className={`block bg-inherit ${
                isfromHome
                  ? "hover:bg-neutral-300 dark:hover:bg-neutral-800"
                  : "cursor-default"
              } p-2 rounded-md group/item`}
              key={item.id}
              to="/projects"
            >
              <div className="flex justify-between">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className={`${
                    isfromHome ? "block" : "hidden"
                  } group-hover/item:scale-125 transition-transform duration-200 ease-in-out`}
                />
              </div>
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
