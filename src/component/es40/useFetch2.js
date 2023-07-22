import { useEffect, useState } from "react";

export const useFetch2 = (username) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setErr(null);
    if (!data) {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const res = await response.json();
          setData(res);
        }
      } catch (error) {
        console.log(error);
        setErr(error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [data, setData, fetchData, err, loading];
};
