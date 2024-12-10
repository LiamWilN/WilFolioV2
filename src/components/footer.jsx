import React from "react";
import {
  faFacebookMessenger,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="py-6">
      <h2 className="font-extrabold text-xl py-2">Lets Connect</h2>
      <p>Get in touch / reach out to me via Email</p>
      <div className="py-4 space-x-3">
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
        <FontAwesomeIcon icon={faFacebookMessenger} size="xl" />
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </div>
      <div className="py-4 space-x-2">
        <FontAwesomeIcon icon={faEnvelope} size="xl" />
      </div>
    </div>
  );
};

export default Footer;
