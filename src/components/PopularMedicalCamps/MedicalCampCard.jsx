import { Link } from "react-router-dom";

const MedicalCampCard = ({ camp }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
      <figure>
        <img src={camp.Image} className="w-full" alt="Album" />
      </figure>
      <div className="p-8">
        <div className="flex justify-between mb-2">
          <p className="font-bold">{camp.Location}</p>
          <p className="font-bold">Participants: {camp.ParticipantCount}</p>
        </div>
        <h2 className="text-xl font-bold text-green-500 mb-4 text-center">
          {camp.CampName}
        </h2>
        <div>
          <Link to={`/camps/${camp._id}`}>
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
