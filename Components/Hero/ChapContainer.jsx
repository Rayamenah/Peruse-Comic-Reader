import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ChapContainer = ({ url, NewchapterId, chapterTitle }) => {
  const router = useRouter();
  const route = router.query;

  // console.log(route);
  return (
    <div
      key={NewchapterId}
      className="m-1 p-2 h-13 rounded-sm flex justify-between bg-slate-300"
    >
      <Link href={`${route.manga}/Chapter/${NewchapterId}`}>
        <p className="cursor-pointer text-xs mr-2 font-semibold text-slate-700 hover:text-neutral-900 hover:underline">
          {chapterTitle}
        </p>
      </Link>
      {/* <a href={url} target="_blank" rel="noreferrer">
        <p className="cursor-pointer text-xs mr-2 font-semibold text-slate-700 hover:text-neutral-900 hover:underline">
          {chapterTitle}
        </p>
      </a> */}
    </div>
  );
};

export default ChapContainer;
