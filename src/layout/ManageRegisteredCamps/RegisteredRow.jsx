import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RegisteredRow = ({ vol, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const paymentStatus = vol.paymentStatus;
  const confirmation = vol.confirmation;

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
        axiosSecure
          .delete(`/participant-camp/${id}`, { withCredentials: true })
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your participation request has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handlePending = () => {
    if (paymentStatus !== "Paid") {
      Swal.fire({
        title: "Sorry!",
        text: "Participant hasn't paid yet.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <td className="md:text-xl">{vol.participantName}</td>
      <td className="md:text-xl">{vol.campName}</td>
      <td className="md:text-xl">${vol.campFees}</td>
      <td className="md:text-xl">
        {paymentStatus === "Paid" ? "Paid" : "Unpaid"}
      </td>
      <td className="md:text-xl">
        <button onClick={handlePending} className="btn font-bold">
          {confirmation ? confirmation : ""}
        </button>
      </td>
      <td className="md:text-xl">
        <button
          onClick={() => handleDelete(vol._id)}
          className="btn btn-sm text-gray-900 font-bold hover:bg-red-500 bg-red-400"
        >
          Cancel
        </button>
      </td>
    </>
  );
};

export default RegisteredRow;
