import React from "react";

const GridContainer = ({ children }) => {
  return (
    <>
      <div className="text-2xl text-neutral-100 font-semibold p-2 bg-slate-900 w-full h-14">
        Latest Manwha
      </div>
      <div className="flex flex-wrap flex-row bg-slate-500 ">{children}</div>
    </>
  );
};

export default GridContainer;
