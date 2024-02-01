import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseShow = () => {
  const {
    data: shows,
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["shows"],
    queryFn: async () => {
      return axios
        .get("https://api.tvmaze.com/search/shows?q=all")
        .then((res) => res.data);
    },
  });
  return [shows, loading, refetch];
};

export default UseShow;
