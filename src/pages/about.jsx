import React from "react";
import Preface from "../components/section/preface";
import Skills from "../components/section/skills";
import Hobby from "../components/section/hobbies";
import Gallery from "../components/section/gallery";

const About = () => {
  return (
    <div className="space-y-4">
      <Preface />
      <Skills />
      <Hobby />
      <Gallery />
    </div>
  );
};

export default About;
