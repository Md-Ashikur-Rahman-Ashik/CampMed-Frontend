import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useUser from "../../hooks/useUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const OrganizerProfile = () => {
  const { user } = useContext(AuthContext);
  const [adminUser, refetch, loading] = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  // console.log(adminUser);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  const adminName = adminUser?.name;
  // console.log(adminName);

  const onSubmit = (data) => {
    const organizerName = data.name;
    const photo = data.photo;
    const contact = data.contact;
    const userId = adminUser._id;

    const updateInfo = {
      name: organizerName,
      photo: photo,
      contact: contact,
    };

    axiosSecure.put(`/user/${userId}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Information updated successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="card card-compact container rounded-xl mx-auto max-w-fit bg-base-100">
        <figure>
          <img
            src={user?.photoURL}
            className="rounded-xl max-w-fit"
            alt={adminUser?.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Organizer Name:{" "}
            <span className="text-green-900">{adminUser?.name}</span>
          </h2>
          <h2 className="card-title">
            Organizer Email:{" "}
            <span className="text-green-900">{adminUser?.email}</span>
          </h2>
          <h2 className="card-title">
            Contact Information:{" "}
            <span className="text-green-900">
              {adminUser?.contact || "Nothing Mentioned"}
            </span>
          </h2>
          <label
            htmlFor="my_modal_6"
            className={`mt-5 mx-auto btn font-bold text-xl text-green-500 bg-green-50 w-1/2 md:w-1/3 hover:scale-105 transition-transform`}
          >
            Update
          </label>
          <div className="card-actions justify-center">
            {/* Put this part before </body> tag */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <div className="space-y-2">
                    <label
                      htmlFor="age"
                      className="block text-green-900 font-bold"
                    >
                      Photo URL
                    </label>
                    <input
                      type="text"
                      {...register("photo")}
                      defaultValue={`${user?.photoURL}`}
                      className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="age"
                      className="block text-green-900 font-bold"
                    >
                      Organizer Name
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      defaultValue={adminName}
                      className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="age"
                      className="block text-green-900 font-bold"
                    >
                      Contact Information
                    </label>
                    <input
                      type="text"
                      {...register("contact")}
                      defaultValue={`${
                        adminUser?.contact || "Nothing Mentioned"
                      }`}
                      className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div className="flex justify-center">
                      <input
                        type="submit"
                        value="Update"
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
      </div>
    </div>
  );
};

export default OrganizerProfile;
