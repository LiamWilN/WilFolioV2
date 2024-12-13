import React from "react";
import { WORK_EXPERIENCE } from "../../libs/me";

const WorkSection = () => {
  return (
    <section className="py-4">
      <h1 className="text-2xl font-extrabold py-2">Work Experience</h1>
      <div className="px-2">
        {WORK_EXPERIENCE.map((item) => {
          return (
            <div className="py-2" key={item.id}>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <h4 className="text-sm">{item.company}</h4>
              <h6 className="text-sm">{item.date}</h6>
              <ul className="p-2 list-disc list-inside ">
                {item.experiences.map((item, index) => (
                  <li key={index}>{Object.values(item)[0]}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkSection;
