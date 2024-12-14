import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TECHNOLOGIES_USED } from "../../libs/me";

const Techs = () => {
  return (
    <section className="py-4">
      <h1 className="text-2xl font-extrabold py-2">
        Technologies i've worked with
      </h1>
      <div className="px-2 space-y-4">
        {TECHNOLOGIES_USED.map((item) => {
          return (
            <div key={item.id} className="flex gap-2 items-center">
              <FontAwesomeIcon key={item.id} icon={item.icon} />
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Techs;
