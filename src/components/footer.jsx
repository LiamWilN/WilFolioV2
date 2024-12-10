import React, { useEffect, useState } from "react";
import {
  faFacebookMessenger,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import dayjs from "dayjs";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
    <footer className="pt-6">
      <h2 className="font-extrabold text-xl py-2">Lets Connect</h2>
      <p>Get in touch / reach out to me via Email</p>
      <section className="py-4 space-x-3">
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
        <FontAwesomeIcon icon={faFacebookMessenger} size="xl" />
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </section>
      <div className="flex gap-2 mb-24">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
        <p>williamncalda@gmail.com</p>
      </div>
      <section className="flex items-center justify-between text-sm">
        <span>&#169; {dayjs(Date()).format("YYYY")} | William Calda</span>
        <span>
          {timeZoneDB.countryCode} |{" "}
          {dayjs(timeZoneDB.formatted).format("ddd MM/DD/YYYY HH:MM")}
        </span>
      </section>
    </footer>
  );
};

export default Footer;
