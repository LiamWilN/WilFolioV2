import React from "react";
import { WORK_EXPERIENCE } from "../../libs/me";
import { Link } from "react-router-dom";

const WorkSection = ({ isfromHome = true }) => {
  return (
    <section className="py-4">
      <h1 className="text-2xl font-extrabold py-2">Work Experience</h1>
      <div className="px-2 space-y-3">
        {WORK_EXPERIENCE.map((item) => {
          return (
            <Link
              to="/work"
              className={`block bg-inherit ${
                isfromHome &&
                "ease-in duration-300 hover:bg-neutral-300 dark:hover:bg-neutral-800"
              } p-2 rounded-md`}
              key={item.id}
            >
              <h2 className="text-lg font-bold">{item.title}</h2>
              <h4 className="text-sm">{item.company}</h4>
              <h6 className="text-sm">{item.date}</h6>
              <ul
                className={`${
                  isfromHome ? "hidden" : "visible"
                } p-2 list-disc list-inside`}
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
