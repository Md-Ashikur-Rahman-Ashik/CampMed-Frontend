import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import RegisteredRow from "./RegisteredRow";

const ManageRegisteredCamps = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: participant,
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["participant"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/participant-camp`, {
        withCredentials: true,
      });
      const data = await response.data;
      return data;
    },
  });

  //   console.log(participant);
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
  //   refetch();

  return (
    <div className="card card-compact container flex rounded-xl mx-auto max-w-fit bg-base-100">
      {participant?.length === 0 && (
        <h2 className="font-bold text-center text-5xl text-green-900">
          All registered camps will be shown here
        </h2>
      )}
      <div className="overflow-auto">
        <table className="table">
          {/* head */}
          {participant?.length > 0 && (
            <thead>
              <tr>
                <th className="md:text-xl">Participant Name</th>
                <th className="md:text-xl">Camp Name</th>
                <th className="md:text-xl">Camp Fees</th>
                <th className="md:text-xl">Payment Status</th>
                <th className="md:text-xl">Confirmation Status</th>
                <th></th>
              </tr>
            </thead>
          )}
          <tbody>
            {participant.map((vol) => (
              <tr key={vol._id}>
                <RegisteredRow vol={vol} refetch={refetch}></RegisteredRow>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRegisteredCamps;
