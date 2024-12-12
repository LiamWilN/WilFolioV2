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

  return (
    <footer className="pt-6 relative">
      <h2 className="font-extrabold text-xl py-2">Lets Connect</h2>
      <p>Get in touch / reach out to me via Email</p>
      <section className="py-4 space-x-3">
        <a href="https://www.linkedin.com/in/caldawilliam" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a href="https://m.me/CaldaWilliam" target="_blank">
          <FontAwesomeIcon icon={faFacebookMessenger} size="xl" />
        </a>
        <a href="https://github.com/LiamWilN" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
      </section>
      <a
        className="flex gap-2 mb-24"
        href="mailto:williamncalda@gmail.com."
        target="_blank"
      >
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
        <p>williamncalda@gmail.com</p>
      </a>
      <section className="flex items-center justify-between text-sm">
        <span>&#169; {dayjs(Date()).format("YYYY")} | William Calda</span>
        <span>
          {dayjs(timeZoneDB.formatted).format("ddd MM/DD/YYYY HH:MM")}
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
