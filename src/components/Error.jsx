import React from "react";

function Error({ children }) {
  return (
    <div className="absolute top-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded transition-transform duration-500 ease-in-out">
      <span className="block sm:inline">{children}</span>
    </div>
  );
}

export default Error;
