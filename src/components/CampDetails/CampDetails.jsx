import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";

const CampDetails = () => {
  const camp = useLoaderData();
  const {
    campName,
    image,
    campFees,
    date,
    time,
    location,
    healthcareProfessional,
    participantCount,
    description,
    _id,
  } = camp;

  return (
    <div className="container p-6 mx-auto min-h-[calc(100vh-349px)]">
      <ScrollRestoration></ScrollRestoration>
      <img src={image} className="w-full h-[400px] rounded-xl" alt={campName} />
      <h2 className="mt-4 text-center text-green-500 text-3xl md:text-5xl font-bold mb-5">
        {campName}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4 mt-4">
        <p className="font-bold justify-center text-center flex items-center text-xl border-2 border-green-400 rounded-xl p-2">
          Date: {date ? date : "No Date Mentioned"}
        </p>
        <p className="font-bold justify-center text-center flex items-center text-xl border-2 border-green-400 rounded-xl p-2">
          Time: {time ? time : "No Time Mentioned"} AM
        </p>
        <p className="font-bold justify-center text-center flex items-center text-xl border-2 border-green-400 rounded-xl p-2">
          Location: {location ? location : "No Location Mentioned"}
        </p>
        <p className="font-bold justify-center text-center flex items-center text-xl border-2 border-green-400 rounded-xl p-2">
          Camp Fee: ${campFees ? campFees : "No CampFees Mentioned"}
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <p className="font-bold justify-center text-center flex items-center text-xl border-2 border-green-400 rounded-xl p-2">
          {`Healthcare Professional:
          ${
            healthcareProfessional
              ? healthcareProfessional
              : " No Healthcare Professional Mentioned"
          }`}
        </p>
        <p className="font-bold justify-center text-center flex items-center text-xl border-2 border-green-400 rounded-xl p-2">
          {`Participants:
          ${
            participantCount ? participantCount : " No Participants Mentioned"
          } Person`}
        </p>
      </div>
      <p className="mt-10 text-center text-xl font-bold">
        {description ? description : "No Description Added"}
      </p>
      <div className="flex justify-center">
        <label
          htmlFor="my_modal_6"
          className={`mt-5 btn font-bold text-xl text-green-500 bg-green-50 w-1/2 md:w-1/3 hover:scale-105 transition-transform`}
        >
          Join Camp
        </label>
        {/* Put this part before </body> tag */}
        <form>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">This modal works with a hidden checkbox!</p>
              <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">
                  Close!
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampDetails;
