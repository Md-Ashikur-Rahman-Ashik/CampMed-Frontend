import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CampRow = ({ vol, refetch }) => {
  const paymentStatus = vol.paymentStatus;
  const confirmation = vol.confirmation;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    if (paymentStatus === "Paid") {
      // Can't Delete
      Swal.fire({
        title: "Sorry!",
        text: "Your participation request can't be deleted.",
        icon: "error",
      });
    } else {
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
    }
  };

  const onSubmit = (data) => {
    const addFeedback = {
      feedback: data.feedback,
      campName: vol.campName,
      participantName: vol.participantName,
      rating: data.rating,
    };

    axiosSecure
      .post(`/feedback`, addFeedback, { withCredentials: true })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your feedback has been added.",
            icon: "success",
          });
        }
      });
  };

  return (
    <>
      <td className="md:text-xl">{vol.campName}</td>
      <td className="md:text-xl">${vol.campFees}</td>
      <td className="md:text-xl">{vol.participantName}</td>
      <td className="md:text-xl">
        {paymentStatus !== "Paid" ? (
          <Link to={`/dashboard/payment/${vol._id}`}>
            <button className="btn btn-ghost font-bold">
              {paymentStatus === "Paid" ? "Paid" : "Pay"}
            </button>
          </Link>
        ) : (
          <button className="btn btn-ghost font-bold">
            {paymentStatus === "Paid" ? "Paid" : "Pay"}
          </button>
        )}
      </td>
      <td className="md:text-xl">{confirmation ? confirmation : ""}</td>
      <td className="md:text-xl">
        <button
          onClick={() => handleDelete(vol._id)}
          className="btn btn-sm text-gray-900 font-bold hover:bg-red-500 bg-red-400"
        >
          Cancel
        </button>
      </td>
      <td>
        <label
          htmlFor="my_modal_6"
          className={`btn btn-sm font-bold text-xl text-green-500 bg-green-50 hover:scale-105 transition-transform`}
        >
          Feedback
        </label>
        <div className="card-actions justify-center">
          {/* Put this part before </body> tag */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <div className="space-y-2">
                  <label className="block text-green-900 font-bold">
                    Feedback
                  </label>
                  <textarea
                    {...register("feedback", { required: true })}
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-green-900 font-bold">
                    Rating
                  </label>
                  <input
                    type="number"
                    {...register("rating", {
                      min: 1,
                      max: 5,
                      required: true,
                    })}
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                  />
                </div>
                {errors.rating && (
                  <p className="text-red-600">
                    Minimum rating is 1 and Maximum rating is 5
                  </p>
                )}
                <div className="flex justify-center items-center gap-4">
                  <div className="flex justify-center">
                    <input
                      type="submit"
                      value="Submit"
                      className="font-bold btn mt-4 bg-green-50 text-green-900"
                    />
                  </div>
                  <div className="modal-action">
                    <label
                      htmlFor="my_modal_6"
                      className="btn text-red-600 font-bold"
                    >
                      Cancel
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </td>
    </>
  );
};

export default CampRow;
