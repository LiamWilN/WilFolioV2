import React from "react";
import PROFILE from "../../assets/images/profilePic.png";
import { PREFACE } from "../../libs/me";

const Preface = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <span className="text-xs">
          Hi, I'm
          <h1 className="font-bold text-2xl">William Calda</h1>
        </span>
        <img
          src={PROFILE}
          alt="William Calda"
          className="h-24 w-24 rounded-full m-4"
        />
      </div>
      <div className="space-y-4">
        {PREFACE.map((item, index) => (
          <p
            data-aos="fade-right"
            data-aos-delay={index * 200}
            className="p-2 text-left md:text-right"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Preface;
