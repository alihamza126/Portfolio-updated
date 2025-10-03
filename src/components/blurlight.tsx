import React from "react";

const Blurlight = ({ className = "" }) => {
  return (
    <span
      className={`absolute blur-3xl z-0
      bg-gradient-to-br from-emerald-400 opacity-30 via-emerald-400 w-64 h-64  to-green-500 
      ${className}`}
    />
  );
};

export default Blurlight;
