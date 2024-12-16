import React, { useEffect, useState } from "react";
import {
  faFacebookMessenger,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import dayjs from "dayjs";
import { faEnvelope, faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TIMEZONEDB } from "../libs/constants";
import { SOCIAL_MEDIA_LINK } from "../libs/constants";

const api = TIMEZONEDB;
const timezone = "Asia/Manila";
const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${api}&format=json&by=zone&zone=${timezone}`;

const Footer = () => {
  const [timeZoneDB, setTimeZoneDB] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTimeZoneDB(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const faIcons = {
    0: faLinkedin,
    1: faFacebookMessenger,
    2: faGithub,
  };

  return (
    <footer className="pt-6 relative">
      <h2 className="font-extrabold text-2xl py-2">Lets Connect</h2>
      <p>Get in touch / reach out to me via Email</p>
      <section className="py-4 space-x-3">
        {SOCIAL_MEDIA_LINK.map((item) => {
          return (
            <a
              className="group/item"
              key={item.id}
              href={item.link}
              target="_blank"
            >
              <FontAwesomeIcon
                className="group-hover/item:transition-all group-hover/item:ease-in-out group-hover/item:duration-400 group-hover/item:w-8 group-hover/item:h-8"
                size={item.size}
                icon={faIcons[item.id]}
              />
            </a>
          );
        })}
      </section>
      <a
        className="flex items-center gap-2 mb-24 group/item"
        href="mailto:williamncalda@gmail.com."
        target="_blank"
      >
        <FontAwesomeIcon icon={faEnvelope} size="xl" />
        <p className="">williamncalda@gmail.com</p>
      </a>
      <section className="flex items-center justify-between text-sm">
        <span>&#169; {dayjs(Date()).format("YYYY")} | William Calda</span>
        <span>
          {dayjs(timeZoneDB.formatted).format("ddd MM/DD/YYYY HH:MM")}{" "}
          {timeZoneDB.abbreviation}
        </span>
      </section>
      <FontAwesomeIcon
        className="absolute bottom-10 right-5"
        icon={faCircleUp}
        size="2xl"
      />
    </footer>
  );
};

export default Footer;
