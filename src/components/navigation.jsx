import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import { NAVIGATION_MENU } from "../libs/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Navigation = () => {
  const { setDarkMode, darkMode } = useContext(ThemeContext);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <nav className="flex items-center justify-center gap-2">
      {NAVIGATION_MENU.filter((item) => item.id > 0).map((item) => (
        <NavLink
          key={item.id}
          className={({ isActive }) =>
            `${
              isActive && "bg-neutral-300 dark:bg-neutral-600"
            } p-2 rounded flex justify-end items-center transition-all duration-500 ease-in-out`
          }
          to={item.link}
          aria-label={item.arialabel}
        >
          {item.name}
        </NavLink>
      ))}
      <button className="pl-2" onClick={toggleDarkMode}>
        {darkMode ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
    </nav>
  );
};

export default Navigation;
