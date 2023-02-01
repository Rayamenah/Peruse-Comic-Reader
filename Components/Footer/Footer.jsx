import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className=" bg-slate-800">
        <div className="flex flex-row md:flex-row justify-center items-center">
          <a
            href="https://github.com/RaymondAmenah"
            className="text-center text-sm font-bold p-6 w-10 h-10"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/JamesRhaymond"
            className="text-center text-sm font-bold p-6 w-10 h-10"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:raymondamenah@gmail.com"
            className="text-center text-sm font-bold p-6 w-10 h-10"
          >
            <SiGmail />
          </a>
        </div>
        <p className="text-center text-sm font-bold p-6 text-slate-400">
          {" "}
          Designed by Raymond
        </p>
        <p className="text-center text-sm font-bold p-6 text-slate-400">
          All rghts reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
