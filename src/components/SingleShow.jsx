import { Link } from "react-router-dom";
import "../components/All.css/Card.css";

const Singleshow = ({ showInfo }) => {
  const { score, show } = showInfo;
  const { name, image, rating, id } = show;

  return (
    <div className="rawCssCard ">
      <div className="card-container bg-gray-200">
        <img className="h-[400px] w-full" src={image?.original}></img>
        <div className="flex justify-between text-white">
          <h2 className=" text-xl font-medium font-Inter"> {name} </h2>
          <p className=" font-Inter">
            rating <span className="text-xl text-[#E2B659]">*</span>{" "}
            {rating?.average}
          </p>
          <Link to={`/details/${id}`}>
            <button className="px-6 bg-red-700 rounded-lg">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Singleshow;

import React from "react";
