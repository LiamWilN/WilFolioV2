import React from "react";
import { WORK_EXPERIENCE } from "../../libs/me";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const WorkSection = ({ isfromHome = true }) => {
  return (
    <section className={`${isfromHome ? "border-t-[1px] py-8" : "py-4"} `}>
      <h1 className="text-2xl font-extrabold pt-2 pb-4">Work Experience</h1>
      <div className="px-2 space-y-3">
        {WORK_EXPERIENCE.map((item) => {
          return (
            <Link
              to="/work"
              className={`block bg-inherit ${
                isfromHome
                  ? "group/item hover:bg-neutral-300 dark:hover:bg-neutral-800"
                  : "cursor-default"
              } p-2 rounded-md`}
              key={item.id}
            >
              <div className="flex justify-between">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  className={`${
                    isfromHome ? "block" : "hidden"
                  } group-hover/item:transition-transform group-hover/item:duration-200 group-hover/item:scale-125 group-hover/item:text-xl`}
                />
              </div>
              <h4 className="text-sm">{item.company}</h4>
              <h6 className="text-sm">{item.date}</h6>
              <ul
                className={`${
                  isfromHome ? "hidden" : "visible"
                } p-2 list-disc list-inside text-neutral-800 dark:text-neutral-400`}
              >
                {item.experiences.map((item, index) => (
                  <li key={index}>{Object.values(item)[0]}</li>
                ))}
              </ul>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default WorkSection;
