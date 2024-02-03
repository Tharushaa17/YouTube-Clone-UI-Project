import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  // faGlobeAmericas,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-slate-900 text-slate-50 flex justify-around items-center">
        <aside>
          <h1 className="font-bold text-3xl uppercase sm:text-xl flex flex-wrap m-5">
            <Link to={'/'}>
            <span className="text-purple-300 font-bold">Modern</span>
            <span className="bg-[#fbe2e3] text-slate-700 px-1">Walk</span>
            </Link>
          </h1>
          <h1 className="text-lg font-thin">Tharushaa Dhananjani Samaraweera</h1>
          <h1 className="text-md font-thin">2024/02/03</h1>
        </aside>
        <div className="border-l border-slate-300 h-full"></div>
        <nav>
          <p>
            <FontAwesomeIcon icon={faLinkedin} />
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} />
          </p>
          <p>
            <FontAwesomeIcon icon={faFacebook} />
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
