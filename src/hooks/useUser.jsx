import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: adminUser, refetch, isPending: loading } = useQuery({
    queryKey: ["adminUser"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/users?email=${user?.email}`, {
        withCredentials: true,
      });
      const data = await response.data;
      return data;
    },
  });
  return [adminUser, refetch, loading];
};

export default useUser;
