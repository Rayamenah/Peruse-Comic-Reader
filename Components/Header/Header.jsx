import React, { useContext } from "react";
import { Context } from "../../pages/_app.jsx";
import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BiBookReader } from "react-icons/bi";

import Favorites from "./Favorites";

const Header = () => {
  const { show, setShow } = useContext(Context);

  return (
    <>
      <nav className=" w-full z-10 font-sans h-14 p-2 bg-gray-100 flex flex-row justify-between items-center font-bold md:h-15  ">
        <Link
          href="/"
          className="ml-2 text-xl text-center text-slate-800 md:text-2xl"
        >
          <div>
            <BiBookReader className="inline-block w-6 h-6 mr-2 text-slate-800" />
            <p className="">Peruse</p>
          </div>
        </Link>
        <div className="flex justify-between">
          <Link
            href="/"
            className="hidden sm:block mr-4 text-base text-slate-800 hover:text-slate-500 "
          >
            <FaSignInAlt />
          </Link>
          <AiFillHeart className="h-6 w-6" onClick={() => setShow(!show)} />
        </div>
      </nav>
      {show && <Favorites />}
    </>
  );
};

export default Header;