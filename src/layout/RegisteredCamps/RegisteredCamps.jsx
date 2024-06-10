import { useState } from "react";
import useParticipant from "../../hooks/useParticipant";
import CampRow from "./CampRow";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const RegisteredCamps = () => {
  const [search, setSearch] = useState("");
  const [participant, refetch, loading] = useParticipant(search);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  //   console.log(participant);

  return (
    <div className="card card-compact container rounded-xl mx-auto max-w-fit">
      <Helmet>
        <title>Registered Camps | CampMed</title>
      </Helmet>
      {participant?.length === 0 && (
        <h2 className="font-bold text-center text-5xl text-green-900">
          Your registered camps will be shown here
        </h2>
      )}
      <div className="flex justify-center mb-4">
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
          {participant?.length > 0 && (
            <thead>
              <tr>
                <th className="md:text-xl">Camp Name</th>
                <th className="md:text-xl">Camp Fees</th>
                <th className="md:text-xl">Participant Name</th>
                <th className="md:text-xl">Payment Status</th>
                <th className="md:text-xl">Confirmation Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
          )}
          <tbody>
            {participant.map((vol) => (
              <tr key={vol._id}>
                <CampRow vol={vol} refetch={refetch}></CampRow>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredCamps;
