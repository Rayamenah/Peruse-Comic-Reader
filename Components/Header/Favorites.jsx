import React, { useContext } from "react";
import Link from "next/link"
import { Context } from "../../pages/_app.jsx";
//Icons
import { GiCancel } from "react-icons/gi";

const Favorite = () => {
  const { setShow, favorites } = useContext(Context);

  return (
    <div className="transition-all">
      <div className="absolute z-10 top-0 right-0 h-full w-full bg-slate-500 md:w-1/2">
        <h1 className="text-xl font-bold mt-4 ml-4 text-slate-900 ">
          Favorites
        </h1>

        <GiCancel
          className="absolute top-4 right-[13px] h-6 w-6 cursor-pointer"
          onClick={() => setShow(false)}
        />
        {favorites.length > 1 && favorites.map((item) => (
          <Link href={`Main/${item.data._id}`} key={item.data._id}>{item.data.MangaTitle}</Link>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
// 