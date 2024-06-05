import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useParticipant = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    data: participant,
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["participant"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/participant?email=${user?.email}`,
        { withCredentials: true }
      );
      const data = await response.data;
      return data;
    },
  });

  return [participant, refetch, loading];
};

export default useParticipant;
