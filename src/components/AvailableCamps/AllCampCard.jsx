import { Link } from "react-router-dom";

const AllCampCard = ({ camp }) => {
  return (
    <div className="card mt-6 card-compact bg-base-100 hover:scale-105 transition-transform shadow-xl">
      <figure>
        <img src={camp.image} alt={camp.campName} />
      </figure>
      <div className="mt-2">
        <h2 className="text-xl font-bold text-green-500 text-center">
          {camp.campName}
        </h2>
        <div className="flex mt-2 justify-between px-4">
          <p className="font-bold">{camp.location}</p>
          <p className="font-bold">Participants: {camp.participantCount}</p>
        </div>
        <div className="flex mt-2 justify-between px-4">
          <p className="font-bold">{camp.date}</p>
          <p className="font-bold">Time: {camp.time}</p>
        </div>
        <h2 className="text-xl font-bold text-green-500 text-center">
          {camp.healthcareProfessional}
        </h2>
        <h2 className="text-xl font-bold text-center">
          {camp.shortDescription}
        </h2>
        <div className="card-actions justify-center mt-4">
          <Link to={`/camp-details/${camp._id}`}>
            <button className="btn text-green-900 bg-green-50 font-bold mb-4">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCampCard;
