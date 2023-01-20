import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ChapContainer = ({ NewchapterId, chapterTitle }) => {
  const router = useRouter();
  const route = router.query;

  return (
    <div
      key={NewchapterId}
      className="m-1 p-2 h-13 rounded-sm flex justify-between bg-slate-300"
    >
      <Link href={`${route.manga}/Chapter/${NewchapterId}`}>
        <p className="cursor-pointer text-sm mr-2 font-semibold text-slate-700 hover:text-neutral-900 hover:underline">
          {chapterTitle}
        </p>
      </Link>
    </div>
  );
};

export default ChapContainer;
