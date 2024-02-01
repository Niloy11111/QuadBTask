import { Link } from "react-router-dom";
import "../components/All.css/Card.css";

const Singleshow = ({ showInfo }) => {
  const { score, show } = showInfo;
  const { name, image, rating, id } = show;

  return (
    <div className="rawCssCard ">
      <div className="card-container relative">
        <img className="h-[400px] w-full" src={image?.original}></img>
        <div
          style={{
            backgroundColor: "rgba(11, 11, 11, 0.80)",
          }}
          className="p-2 flex justify-between absolute bottom-0   bg-blend-overlay h-[70px]  w-full"
        >
          <h2 className=" text-2xl font-bold  text-[#F9F871] font-Inter">
            {" "}
            {name}{" "}
          </h2>

          <Link to={`/details/${id}`}>
            <button className="px-6 py-2 bg-[#F9F871] font-Inter">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Singleshow;
