const OrganizerRow = ({ vol }) => {
  return (
    <>
      <td className="md:text-xl">{vol.campName}</td>
      <td className="md:text-xl">{vol.date}</td>
      <td className="md:text-xl">{vol.time}</td>
      <td className="md:text-xl">{vol.location}</td>
      <td className="md:text-xl">{vol.healthcareProfessional}</td>
      <td className="md:text-xl font-bold text-green-900 btn hover:bg-green-50 bg-green-50">
        Edit
      </td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm text-gray-900 font-bold hover:bg-red-500 bg-red-400"
        >
          Delete
        </button>
      </th>
    </>
  );
};

export default OrganizerRow;
