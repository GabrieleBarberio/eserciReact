import { useFetch } from "./useFetch";

export const GithubUserHook = () => {
  const [data, setData] = useFetch("GabrieleBarberio");

  return (
    <div>
      <span>
        user: {data && data.login}, id: {data && data.id}
      </span>
    </div>
  );
};
