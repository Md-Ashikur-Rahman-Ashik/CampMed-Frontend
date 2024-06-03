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
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AllCampCard;
