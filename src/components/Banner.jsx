import Lottie from "lottie-react";
import img from "../assets/Animation - 1706717807974.json";

const Banner = () => {
  return (
    <div className=" flex justify-between items-center h-[80vh]">
      <div>
        <h2 className="text-6xl text-white font-extrabold italic font-Inter">
          Explore Show That{" "}
          <span className="text-[#E2B659] ">Blow Your Mind</span>
        </h2>
      </div>

      <div>
        <Lottie animationData={img} loop={true} />
      </div>
    </div>
  );
};

export default Banner;
