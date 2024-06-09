import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCamp = (search) => {
  const {
    data: camps,
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const response = await axios.get(
        `https://b9a12-server-side-md-ashikur-rahman-ashik.vercel.app/camps?search=${search}`,
        {
          withCredentials: true,
        }
      );
      const data = await response.data;
      return data;
    },
  });

  return [camps, refetch, loading];
};

export default useCamp;
