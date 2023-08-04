import useSWR from "swr";

export const useGithubUser = (username) => {
  const fetcher = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  if (!username) {
    return {
      data: null,
      loading: false,
      error: null,
    };
  }

  const { data, error } = useSWR(username, fetcher);

  return {
    data,
    loading: !error && !data,
    error,
  };
};
