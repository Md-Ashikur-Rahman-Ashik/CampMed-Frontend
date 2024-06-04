import { Link } from "react-router-dom";

const OrganizerRow = ({ vol, refetch }) => {
  return (
    <>
      <td className="md:text-xl">{vol.campName}</td>
      <td className="md:text-xl">{vol.date}</td>
      <td className="md:text-xl">{vol.time}</td>
      <td className="md:text-xl">{vol.location}</td>
      <td className="md:text-xl">{vol.healthcareProfessional}</td>
      <td className="md:text-xl">
        <Link vol={vol} to={`/dashboard/update-camp/${vol._id}`}>
          <button className="font-bold text-green-900 btn hover:bg-green-50 bg-green-50">
            Edit
          </button>
        </Link>
      </td>
      <td className="">
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm text-gray-900 font-bold hover:bg-red-500 bg-red-400"
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default OrganizerRow;
