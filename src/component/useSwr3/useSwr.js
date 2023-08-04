import useSWR from "swr";

export const useGithubUser = (username) => {
  const fetcher = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Response error: something goes wrong");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, mutate } = useSWR(username, fetcher);

  const refetch = () => {
    mutate(); //forzo il refetch dei data
  };

  return {
    data,
    loading: !error && !data,
    error,
    refetch,
  };
};
