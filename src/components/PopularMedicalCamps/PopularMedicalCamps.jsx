import axios from "axios";
import { useEffect, useState } from "react";
import MedicalCampCard from "./MedicalCampCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const PopularMedicalCamps = () => {
  // const [camps, setCamps] = useState([]);
  const campsQuery = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/camps", {
        withCredentials: true,
      });
      const data = await response.data;
      return data;
    },
  });

  return (
    <div className="container p-6 mx-auto mt-20">
      <h2 className="text-5xl text-center font-bold text-green-700">
        Popular Medical Camps
      </h2>
      <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {campsQuery.data
          .map((camp) => (
            <MedicalCampCard key={camp._id} camp={camp}></MedicalCampCard>
          ))
          .slice(0, 6)}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to={"/available-camps"}
          className="font-bold text-xl btn w-1/3 bg-green-50 text-green-500"
        >
          See All Camps
        </Link>
      </div>
    </div>
  );
};

export default PopularMedicalCamps;
