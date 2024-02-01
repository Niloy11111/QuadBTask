import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="px-80 bg-[#000000]">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
