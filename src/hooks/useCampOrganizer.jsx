import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCampOrganizer = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    data: organizer,
    refetch,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["organizer"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/camp?email=${user?.email}`, {
        withCredentials: true,
      });
      const data = await response.data;
      return data;
    },
  });

  return [organizer, refetch, isLoading];
};

export default useCampOrganizer;
