import React from "react";
import { TECHNOLOGIES_USED } from "../../libs/me";

const Techs = () => {
  return (
    <section className="py-4">
      <h1 className="text-2xl font-extrabold py-2">
        Technologies i've worked with
      </h1>
      <div className="px-2 flex items-center space-x-1">
        {TECHNOLOGIES_USED.map((item) => {
          return (
            <div
              className="rounded-lg hover:shadow p-2 ease-in duration-300 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              key={item.id}
            >
              <img
                src={item.icon}
                alt={item.name}
                title={item.name}
                className="h-8 w-8"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Techs;
