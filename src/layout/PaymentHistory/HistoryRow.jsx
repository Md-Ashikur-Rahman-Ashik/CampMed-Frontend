import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import "../RegisteredCamps/CampRow.css";

const HistoryRow = ({ vol, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [confirmation, setConfirmation] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/participant/${vol.campName}`).then((res) => {
      setConfirmation(res.data);
    });
  }, [axiosSecure, vol.campName]);

  //   console.log(confirmation);

  return (
    <>
      <td className="md:text-xl">{vol.campName}</td>
      <td className="md:text-xl">${vol.campFees}</td>
      <td className="md:text-xl">{vol.paymentStatus}</td>
      <td className="md:text-xl">
        {confirmation?.confirmation || "Participation request deleted"}
      </td>
      <td className="md:text-xl text-green-900">{vol.paymentId}</td>
    </>
  );
};

export default HistoryRow;
