import { useEffect, useState } from "react";

export const GithubUser = ({ username }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    if (!data) {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const res = await response.json();
          setData(res);
        }
      } catch (error) {}
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <span>
          user: {data && data.login}, id: {data && data.id}
        </span>
      </div>
    </>
  );
};
