import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddCamp = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    const addItem = {
      campName: data.campName,
      campFees: parseInt(data.campFees),
      image: data.image,
      date: data.date,
      time: data.time,
      location: data.location,
      healthcareProfessional: data.healthcareProfessional,
      participantCount: 0,
      description: data.description,
      shortDescription: data.shortDescription,
      email: user?.email,
    };

    // console.log(addItem);

    axiosSecure
      .post("/camps", addItem)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          // Show success popup
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.campName} is added successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(() => {
        // console.error(error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Adding camp failed",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="card card-compact container rounded-xl mx-auto max-w-fit">
      <Helmet>
        <title>Add Camp | CampMed</title>
      </Helmet>
      <section className="bg-green-50 text-green-900">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-4"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-4 rounded-md shadow-sm bg-green-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="font-bold text-sm">
                  Camp Name
                </label>
                <input
                  {...register("campName", { required: true })}
                  type="text"
                  placeholder="Camp Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="font-bold text-sm">Photo URL</label>
                <input
                  {...register("image", { required: true })}
                  type="text"
                  placeholder="Photo URL"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="font-bold text-sm">Camp Fees</label>
                <input
                  {...register("campFees", { required: true })}
                  type="number"
                  placeholder="Camp Fees"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full">
                <label className="font-bold text-sm">Long Description</label>
                <input
                  {...register("description", { required: true })}
                  type="text"
                  placeholder="Long Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full">
                <label className="font-bold text-sm">Short Description</label>
                <input
                  {...register("shortDescription", { required: true })}
                  type="text"
                  placeholder="Short Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="font-bold text-sm">Time</label>
                <input
                  {...register("time", { required: true })}
                  type="text"
                  placeholder="10:00"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="font-bold text-sm">Location</label>
                <input
                  {...register("location", { required: true })}
                  type="text"
                  placeholder="Location"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="font-bold text-sm">
                  Healthcare Professional Name
                </label>
                <input
                  {...register("healthcareProfessional", { required: true })}
                  type="text"
                  placeholder="Healthcare Professional Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="font-bold text-sm">Participant</label>
                <input
                  disabled
                  type="number"
                  placeholder={0}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="font-bold text-sm">Date</label>
                <input
                  {...register("date", { required: true })}
                  type="text"
                  placeholder={"15-07-2024"}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
            </div>
          </fieldset>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Add Camp"
              className="btn bg-green-100 text-green-900"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCamp;
