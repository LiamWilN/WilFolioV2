import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./navigation";
import { NAVIGATION_MENU } from "../libs/constants";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-8">
      <section className="mx-auto max-w-screen-sm px-6">
        <div className="flex flex-nowrap items-center justify-between">
          <Link
            className="font-bold"
            to={NAVIGATION_MENU[0].link}
            aria-label={NAVIGATION_MENU[0].arialabel}
          >
            {NAVIGATION_MENU[0].name}
          </Link>
          <Navigation />
        </div>
      </section>
    </header>
  );
};

export default Header;
