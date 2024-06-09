import { useState } from "react";
import useCampOrganizer from "../../hooks/useCampOrganizer";
import OrganizerRow from "./OrganizerRow";
import { useForm } from "react-hook-form";

const ManageCamps = () => {
  const [search, setSearch] = useState("");
  const [organizer, refetch, loading] = useCampOrganizer(search);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   console.log(organizer);
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

  const onSubmit = (data) => {
    setSearch(data.searchText);
  };

  return (
    <div className="card card-compact container rounded-xl mx-auto max-w-fit bg-base-100">
      {organizer?.length === 0 && (
        <h2 className="font-bold text-center text-5xl text-green-900">
          Your Camp Posts will be shown here
        </h2>
      )}
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
          <input
            type="text"
            {...register("searchText")}
            placeholder="Type here"
            className="input input-bordered input-success w-full max-w-xs"
          />
          <input
            className="btn bg-green-50 text-green-900 font-bold"
            type="submit"
            value="Search"
          />
        </form>
      </div>
      <div className="overflow-auto">
        <table className="table">
          {/* head */}
          {organizer?.length > 0 && (
            <thead>
              <tr>
                <th className="md:text-xl">Name</th>
                <th className="md:text-xl">Date</th>
                <th className="md:text-xl">Time</th>
                <th className="md:text-xl">Location</th>
                <th className="md:text-xl">Healthcare Professional</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
          )}
          <tbody>
            {organizer.map((vol) => (
              <tr key={vol._id}>
                <OrganizerRow vol={vol} refetch={refetch}></OrganizerRow>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCamps;
