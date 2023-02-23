import React from "react";

const TitleBar = ({ children }: { children: string }) => {
  return (
    <div className="w-full backdrop-blur py-2 shadow-md">
      <h1 className="text-3xl text-primary-300 font-bold">
        {children.toUpperCase()}
      </h1>
    </div>
  );
};

export default TitleBar;
