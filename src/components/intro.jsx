import React from "react";
import { MY_INTRO } from "../libs/me";

const Intro = () => {
  return (
    <section className="space-y-4">
      {MY_INTRO.map((item, index) => (
        <p data-aos="fade-right" data-aos-delay={index * 300} key={index}>
          {item}
        </p>
      ))}
    </section>
  );
};

export default Intro;
