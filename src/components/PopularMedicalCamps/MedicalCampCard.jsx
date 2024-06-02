import { Link } from "react-router-dom";

const MedicalCampCard = ({ camp }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
      <figure>
        <img src={camp.image} className="w-full" alt="Album" />
      </figure>
      <div className="p-8">
        <div className="flex justify-between mb-2">
          <p className="font-bold">{camp.location}</p>
          <p className="font-bold">Participants: {camp.participantCount}</p>
        </div>
        <h2 className="text-xl font-bold text-green-500 mb-4 text-center">
          {camp.campName}
        </h2>
        <div>
          <Link to={`/camp-details/${camp._id}`}>
            <button className="btn text-green-500 bg-green-50 font-bold w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MedicalCampCard;
