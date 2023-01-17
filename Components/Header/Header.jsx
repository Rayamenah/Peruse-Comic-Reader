import React from "react";
import Link from "next/link";
import Favorites from "./Favorites";

const Header = () => {
  return (
    <>
      <nav className=" w-full z-10 font-sans h-12 p-2 bg-gray-100 flex flex-row justify-between font-bold md:h-15  ">
        <Link
          href="/"
          className="ml-2 text-xl text-center text-slate-800 md:text-2xl  "
        >
          Logo
        </Link>
        <div className="flex justify-right text-base md:flex flex-row space-x-4 md:text-l">
          <Link
            href="/Login"
            className="text-base text-slate-800 hover:text-slate-500 "
          >
            Login
          </Link>
          <Link
            href="/Login"
            className="text-base text-slate-800 hover:text-slate-500 "
          >
            Sign Up
          </Link>
        </div>
        <div>{/* <Favorites /> */}</div>
      </nav>
    </>
  );
};

export default Header;
