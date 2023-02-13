import React, { useContext } from "react";
import Link from "next/link"
import { Context } from "../../pages/_app.jsx";
//Icons
import { GiCancel } from "react-icons/gi";

const Favorite = () => {
  const { setShow, favorites } = useContext(Context);

  return (
    <div className="absolute z-10 top-0 right-0 h-screen w-full  bg-slate-500 sm:w-1/2 md:w-1/2 transition-all">
      <div className="flex justify-between items-center border-b border-slate-800 p-2 py-[14px] ">
        <h1 className="text-xl font-bold text-slate-900 ">
          Favorites
        </h1>

        <GiCancel
          className=" h-6 w-6 cursor-pointer transition text-slate-900 hover:scale-110 active:scale-90"
          onClick={() => setShow(false)}
        />
      </div>
      {favorites?.map((item) => (
        <Link href={`./${item.data._id}`} className="ml-2 mt-4 font-bold text-slate-900 hover:text-slate-700" key={item.data._id}>{item.data.MangaTitle}</Link>
      ))}

    </div>
  );
};

export default Favorite;
// 