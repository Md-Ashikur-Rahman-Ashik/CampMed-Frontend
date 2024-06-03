import useCamp from "../../hooks/useCamp";
import AllCampCard from "./AllCampCard";

const AvailCamps = () => {
  const [camps, refetch, loading] = useCamp();
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

  return (
    <div className="container p-6 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {camps.map((camp) => (
          <AllCampCard key={camp._id} camp={camp}></AllCampCard>
        ))}
      </div>
    </div>
  );
};

export default AvailCamps;
