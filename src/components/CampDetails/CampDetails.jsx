import { useContext } from "react";
import {
  Link,
  ScrollRestoration,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const CampDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
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

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const participantEmail = user?.email;
    const participantName = user?.displayName;
    const age = parseInt(data.age);
    const phoneNumber = parseInt(data.phoneNumber);
    const emergency = parseInt(data.emergency);
    const paymentStatus = "Unpaid";
    const confirmation = "Pending";

    const handleIncrease = () => {
      axios.put(`http://localhost:5000/participant/${_id}`, {
        withCredential: true,
      });
    };

    const newParticipant = {
      campName,
      campFees,
      location,
      healthcareProfessional,
      participantEmail,
      participantName,
      age,
      phoneNumber,
      emergency,
      paymentStatus,
      confirmation,
    };

    axios
      .post("http://localhost:5000/participant", newParticipant)
      .then((res) => {
        if (res.data.insertedId) {
          handleIncrease();
          Swal.fire({
            title: "Success!",
            text: "Joining Request Send Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        } else {
          Swal.fire({
            title: "Error!",
            text: "Joining Request failed",
            icon: "error",
            confirmButtonText: "Exit",
          });
        }
      });
  };

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
          {`Participants: ${participantCount} Person`}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="font-bold text-center text-lg">{campName}</h3>
              <h3 className="font-bold text-lg">Camp Fee: ${campFees}</h3>
              <h3 className="font-bold text-lg">Location: {location}</h3>
              <h3 className="font-bold text-lg">
                Healthcare Professional: {healthcareProfessional}
              </h3>
              <h3 className="text-green-900 font-bold text-lg">
                Participant Name: {user?.displayName}
              </h3>
              <h3 className="text-green-900 font-bold text-lg">
                Participant Email: {user?.email}
              </h3>
              <div className="space-y-2">
                <label htmlFor="age" className="block text-green-900 font-bold">
                  Age
                </label>
                <input
                  type="number"
                  {...register("age", { required: true })}
                  placeholder="Your Age"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="space-y-2 mt-2">
                <label htmlFor="age" className="block text-green-900 font-bold">
                  Phone Number
                </label>
                <input
                  type="number"
                  {...register("phoneNumber", { required: true })}
                  placeholder="Your Phone Number"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="space-y-2 mt-2">
                <label htmlFor="age" className="block text-green-900 font-bold">
                  Gender
                </label>
                <input
                  type="text"
                  {...register("gender", { required: true })}
                  placeholder="Your Gender"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="space-y-2 mt-2">
                <label htmlFor="age" className="block text-green-900 font-bold">
                  Emergency Contact Number
                </label>
                <input
                  type="text"
                  {...register("emergency", { required: true })}
                  placeholder="Your Emergency Contact Number"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center">
                  <input
                    type="submit"
                    value="Join"
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
    </div>
  );
};

export default CampDetails;
