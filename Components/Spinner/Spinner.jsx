import React from "react";

const Spinner = () => {
  return (
    <div className="absolute inset-0 h-8 w-8 rounded-full border border-slate-600/50 border-t-2 border-t-sky-600 animate-spin"></div>
  );
};

export default Spinner;
