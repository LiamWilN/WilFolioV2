import React from "react";
import Preface from "../components/section/preface";
import Skills from "../components/section/skills";
import Hobby from "../components/section/hobbies";

const About = () => {
  return (
    <div className="space-y-4">
      <Preface />
      <Skills />
      <Hobby />
    </div>
  );
};

export default About;
