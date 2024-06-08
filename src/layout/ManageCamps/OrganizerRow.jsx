import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import "../RegisteredCamps/CampRow.css";

const OrganizerRow = ({ vol, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-camp/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Post has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

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
          onClick={() => handleDelete(vol._id)}
          className="btn btn-sm text-gray-900 font-bold hover:bg-red-500 bg-red-400"
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default OrganizerRow;
