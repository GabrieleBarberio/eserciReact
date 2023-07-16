import { useFetch2 } from "./useFetch2";

export const GithubUserHook2 = ({ user }) => {
  const [data, setData, err, loading] = useFetch2(user);

  return (
    <div>
      <span>
        user: {data && data.login}, id: {data && data.id}
      </span>
    </div>
  );
};
