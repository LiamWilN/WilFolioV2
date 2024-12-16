import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./navigation";
import { NAVIGATION_MENU } from "../libs/constants";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-8 bg-gradient-to-b from-neutral-50 from-60% to-transparent dark:from-neutral-900 dark:from-70% dark:to-transparent z-50">
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
