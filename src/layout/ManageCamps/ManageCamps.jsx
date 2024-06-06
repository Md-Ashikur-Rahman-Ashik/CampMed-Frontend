import useCampOrganizer from "../../hooks/useCampOrganizer";
import OrganizerRow from "./OrganizerRow";

const ManageCamps = () => {
  const [organizer, refetch, loading] = useCampOrganizer();
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

  return (
    <div className="card card-compact container rounded-xl mx-auto max-w-fit bg-base-100">
      {organizer?.length === 0 && (
        <h2 className="font-bold text-center text-5xl text-green-900">
          Your Camp Posts will be shown here
        </h2>
      )}
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
