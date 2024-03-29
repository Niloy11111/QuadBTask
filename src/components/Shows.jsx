import UseShow from "../hooks/UseShow";
import Singleshow from "./Singleshow";

const Shows = () => {
  const [shows, loading, refetch] = UseShow();

  return (
    <div className="pb-20">
      <h2 className="text-center mb-16 text-6xl text-white font-extrabold italic font-Inter">
        Ongoing<span className="text-[#E2B659]"> Shows</span>
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {shows?.map((item) => (
          <Singleshow showInfo={item} key={item?.show?.id}></Singleshow>
        ))}
      </div>
    </div>
  );
};

export default Shows;
