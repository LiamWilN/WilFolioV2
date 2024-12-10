import React from "react";
import { MY_INTRO } from "../libs/constants";

const Intro = () => {
  return (
    <section className="space-y-4">
      {MY_INTRO.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </section>
  );
};

export default Intro;
