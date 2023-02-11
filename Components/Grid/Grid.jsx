import Image from "next/image";
import Link from "next/link";

const Grid = ({ item }) => {


  return (
    <div className="p-2 relative  w-1/2 xs:w-1/2 sm:w-1/2 md:w-1/3 font-sans ">
      <div className=" bg-slate-300 h-fit shadow-xl rounded-md text-slate-700 p-2 pt-0 md:justify-center dark:bg-slate-800 hover:shadow-xl hover:bg-slate-600 hover:text-white ease-in duration-300">
        <Image
          className="object-contain w-full h-48 md:w-1/2 md:h-21 m-auto "
          src={
            item.MangaCover ||
            "https://img.freepik.com/premium-vector/modern-minimal-404-error-page-website-404-error-page-found-with-dead-ghost-concept_599740-714.jpg?w=2000"
          }
          alt=""
          height={42}
          width={40}
          priority
        />
        <div className="space-y-4 md:block md:mx-1 mt-2 ">
          <Link href={`Main/${item._id}`}>
            <p className="text-xs text-neutral-300 font-semibold text-left sm:text-center md:text-center md:text-xs hover:underline ">
              {item.MangaTitle}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grid;
