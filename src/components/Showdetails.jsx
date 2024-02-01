import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const Showdetails = () => {
  const allShows = useLoaderData();
  const params = useParams();
  const idParse = parseFloat(params.id);

  const clickedCard = allShows.find(
    (each) => parseFloat(each?.show?.id) === idParse
  );

  const { show } = clickedCard;
  const {
    name,
    image,
    status,
    rating,
    id,
    network,
    genres,
    type,
    schedule,
    summary,
  } = show;

  const eventName = show?.name;
  const uniqueId = show?.id;
  const genresInfo = genres?.[0];

  const localStorageItem = {
    eventName,
    status,
    uniqueId,
    genresInfo,
  };

  const idCard = parseFloat(id);
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const eventName = form.eventName.value;
    const status = form.status.value;
    const uniqueId = form.uniqueId.value;
    const genresInfo = form.genresInfo.value;

    const eventInfo = {
      eventName,
      status,
      uniqueId,
      genresInfo,
    };

    const bookedEventArray = [];

    const bookedEvents = JSON.parse(localStorage.getItem("booked"));

    if (!bookedEvents) {
      bookedEventArray.push(eventInfo);
      localStorage.setItem("booked", JSON.stringify(bookedEventArray));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Action has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const isExist = bookedEvents.find(
        (item) => parseFloat(item?.uniqueId) === idCard
      );

      if (!isExist) {
        bookedEventArray.push(...bookedEvents, localStorageItem);
        localStorage.setItem("booked", JSON.stringify(bookedEventArray));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Action has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Sorry ! it is already booked",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="">
      <h2 className="text-center pt-20  text-6xl text-white font-extrabold italic font-Inter mb-24">
        More About <br />
        <span className="text-[#E2B659] ml-32"> The Shows</span>
      </h2>

      <div className="-mb-14 flex gap-5 items-center">
        <Link to={`/`}>
          {" "}
          <button className="bg-white hover:bg-[#E2B659] px-3 py-3 rounded-full">
            {" "}
            <MdOutlineArrowBackIos></MdOutlineArrowBackIos>{" "}
          </button>
        </Link>
        <h2 className="text-xl  uppercase  font-Inter text-[#E2B659]">
          {genres?.[0]}, {type}
        </h2>
      </div>

      <div className="pt-20 flex justify-center gap-10 pb-20">
        <div className="flex-1">
          <img className="w-[600px] h-[700px]" src={image?.original}></img>
        </div>

        <div className="flex-1">
          <p className="font-Inter uppercase text-sm text-[#F9F871] ">
            {network?.name}
          </p>
          <h2 className="text-4xl mb-4 font-Inter font-medium mt-6 text-[#FFF]">
            {" "}
            {name}{" "}
          </h2>
          <p className="font-Inter uppercase text-sm text-[#7F4D3E]">
            {" "}
            {network?.country?.name}, {schedule?.days?.[0]}, {schedule?.time}{" "}
          </p>
          <p className="text-[#fff] mt-12 font-Inter"> {summary} </p>

          <button
            className=" px-10 mt-5 py-3 text-sm font-Inter font-semibold bg-[#F9F871]"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Lets Book
          </button>
          <dialog id="my_modal_1" className="modal ">
            <div className="modal-box rounded bg-[#412728] text-[#fff]">
              <img
                className="mx-auto mb-7"
                src="https://www.monster.com/assets/profile/_next/static/media/cloud.44af2f8f.svg"
              ></img>
              <h2 className="mb-5 text-lg font-bold font-Inter text-center mt-2">
                Book a Movie Ticket
              </h2>

              <form action="" onSubmit={handleAddBook}>
                <input
                  type="text"
                  className="py-3 block text-black font-Inter pl-3 border mb-3 w-full outline-none rounded"
                  defaultValue={name}
                  name="eventName"
                  id=""
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    className="py-3 block text-black font-Inter pl-3 border mb-3 w-full outline-none rounded"
                    defaultValue={status}
                    name="status"
                    id=""
                  />
                  <input
                    type="number"
                    className="py-3 block text-black font-Inter pl-3 border mb-3 w-full outline-none rounded"
                    defaultValue={id}
                    name="uniqueId"
                    id=""
                  />
                </div>
                <input
                  type="text"
                  className=" py-3 block text-black font-Inter pl-3 border mb-3 w-full outline-none rounded"
                  defaultValue={genresInfo}
                  name="genresInfo"
                  id=""
                />
                <button className="py-3 w-full border-2 gap-3 border-[#D9DBE9] hover:bg-[#000000] text-[#fff] rounded font-semibold text-sm">
                  Continue
                </button>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="border-2  px-6 py-2 text-sm bg-[#6e46ae] font-semibold rounded text-[#FFF]">
                    GO BACK
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Showdetails;
