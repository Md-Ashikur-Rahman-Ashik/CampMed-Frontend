import { useState } from "react";
import useCamp from "../../hooks/useCamp";
import AllCampCard from "./AllCampCard";
import { useForm } from "react-hook-form";

const AvailCamps = () => {
  const [search, setSearch] = useState("");
  const [camps, refetch, loading] = useCamp(search);
  const {
    register,
    handleSubmit,
    reset,
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
  refetch();

  const onSubmit = (data) => {
    setSearch(data.searchText);
    // console.log(data.searchText);
  };

  return (
    <div className="container p-6 mx-auto">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {camps.map((camp) => (
          <AllCampCard key={camp._id} camp={camp}></AllCampCard>
        ))}
      </div>
    </div>
  );
};

export default AvailCamps;
