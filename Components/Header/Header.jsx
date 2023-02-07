import React, { useContext } from "react";
import Link from "next/link";
import { Context } from "../../pages/_app.jsx";
import { FaSignInAlt } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai"


const Header = () => {
  const { show, setShow } = useContext(Context);

  return (
    <>
      <nav className=" w-full shadow-xl z-10 font-sans h-14 p-2 bg-gray-100 flex flex-row justify-between items-center font-bold md:h-15  ">
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
          <AiFillHeart className="h-6 w-6 transition hover:scale-110 active:scale-90" onClick={() => setShow(true)} />
        </div>
      </nav>
    </>
  );
};

export default Header;
