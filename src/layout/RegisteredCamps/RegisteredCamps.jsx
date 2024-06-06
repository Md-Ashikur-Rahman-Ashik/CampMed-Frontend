import useParticipant from "../../hooks/useParticipant";
import CampRow from "./CampRow";

const RegisteredCamps = () => {
  const [participant, refetch, loading] = useParticipant();

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

  //   console.log(participant);

  return (
    <div className="card card-compact container rounded-xl mx-auto max-w-fit">
      {participant?.length === 0 && (
        <h2 className="font-bold text-center text-5xl text-green-900">
          Your registered camps will be shown here
        </h2>
      )}
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
