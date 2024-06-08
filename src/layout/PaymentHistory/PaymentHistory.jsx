import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import HistoryRow from "./HistoryRow";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: history,
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["history"],
    queryFn: async () => {
      const response = await axiosSecure.get("/payment-history", {
        withCredentials: true,
      });
      const data = await response.data;
      return data;
    },
  });

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

//   console.log(history)

  return (
    <div className="card card-compact container rounded-xl mx-auto max-w-fit">
      {history.length === 0 && (
        <h2 className="font-bold text-center text-5xl text-green-900">
          Your payment history will be shown here
        </h2>
      )}
      <div className="overflow-auto">
        <table className="table">
          {/* head */}
          {history.length > 0 && (
            <thead>
              <tr>
                <th className="md:text-xl">Camp Name</th>
                <th className="md:text-xl">Camp Fees</th>
                <th className="md:text-xl">Payment Status</th>
                <th className="md:text-xl">Confirmation Status</th>
                <th className="md:text-xl">Transaction Id</th>
              </tr>
            </thead>
          )}
          <tbody>
            {history?.map((vol) => (
              <tr key={vol._id}>
                <HistoryRow vol={vol} refetch={refetch}></HistoryRow>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
