import Image from "next/image";
import Link from "next/link";

const Grid = ({ item, clickable }) => {
  return (
    <div className="p-2 relative w-full xs:w-1/2 sm:w-1/2 md:w-1/3 font-sans ">
      <div className="flex bg-slate-300 h-fit shadow-xl rounded-md text-slate-700 p-2  dark:bg-slate-800  md:flex hover:shadow-xl hover:bg-slate-600 hover:text-white ease-in duration-300">
        <Image
          className="object-cover w-1/2 h-48 md:w-1/2 md:h-21 "
          src={item.MangaCover}
          alt=""
          height={42}
          width={40}
        />
        <div className="ml-1 pt-2 space-y-4 md:block md:mx-1">
          <Link href={`Main/${item._id}`}>
            <p className="text-xs text-neutral-300 font-bold text-left md:text-xs hover:underline ">
              {item.MangaTitle}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grid;
