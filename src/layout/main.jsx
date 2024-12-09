import React, { useContext } from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";

const Main = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-slate-100 text-neutral-900 dark:bg-neutral-900 dark:text-slate-100 w-full h-full">
        <Header />
        <main className="pt-24 px-8 py-4 mx-auto max-w-screen-sm">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Main;
