import React, { useContext } from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";

const Index = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 w-full h-full">
        <Header />
        <section className="pt-24 px-8 py-4 mx-auto max-w-screen-sm">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Index;
