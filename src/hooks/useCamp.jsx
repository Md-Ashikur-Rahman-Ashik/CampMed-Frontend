import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCamp = () => {
  const {
    data: camps,
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/camps", {
        withCredentials: true,
      });
      const data = await response.data;
      return data;
    },
  });

  return [camps, refetch, loading];
};

export default useCamp;