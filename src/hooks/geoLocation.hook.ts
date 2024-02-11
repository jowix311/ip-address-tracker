import { useQuery } from "@tanstack/react-query";

const useGeoLocation = () => {
  const apiQuery =
    "https://ipgeolocation.abstractapi.com/v1/?api_key=de0fb72673f946cf92101236820fb553";
  const { data, isLoading } = useQuery({
    queryKey: ["ipAddress"],
    queryFn: async () => {
      const response = await fetch(apiQuery);
      return response.json();
    },
  });
  //TODO implement mutation when form is submitted
  // // Force to query again
  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(
  //       "https://geo.ipify.org/api/v2/country?apiKey=at_QqYLWe2Y7qv5uoIV1Usq4XgRb9Vzf&ipAddress=8.8.8.8",
  //     );
  //   },
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ["ipAddress"] });
  //   },
  // });
  //TODO remove console.logs
  console.log("res", data);
  console.log(isLoading);
  return {
    data,
  };
};

export default useGeoLocation;
