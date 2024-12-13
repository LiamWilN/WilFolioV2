import React from "react";
import Intro from "../components/intro";
import Title from "../components/title";
import WorkSection from "../components/section/work";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Title />
      <Intro />
      <WorkSection />
      <Footer />
    </>
  );
};

export default Home;
