import React, { useContext } from "react";
import { Context } from "../../pages/_app.jsx";
//Icons
import { AiFillHeart } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

const Favorite = () => {
  const { show, setShow, favorites } = useContext(Context);

  return (
    <div className="">
      {show && (
        <div className="absolute z-10 top-0 right-0 h-full w-full bg-slate-500 md:w-1/2">
          <h1 className="text-xl font-bold mt-4 ml-4 text-slate-900 ">
            Favourites
          </h1>

          <GiCancel
            className="absolute top-4 right-[13px] h-6 w-6 cursor-pointer"
            onClick={() => setShow(false)}
          />
          {favorites.map((item) => (
            <div key={item._id}>{item.MangaTitle}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
