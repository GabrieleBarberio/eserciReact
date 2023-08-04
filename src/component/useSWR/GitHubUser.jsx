import React, { useState } from "react";
import { useSwr } from "./useSwr";

const GithubUser = ({ initialUsername }) => {
  const [username, setUsername] = useState(initialUsername);
  const { data, loading, error } = useSwr(username);

  const handleInput = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onInput={handleInput}
      />
      {loading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>Error: {error.message}</span>
      ) : (
        <h2>GitHub User: {data.login}</h2>
      )}
    </div>
  );
};

export default GithubUser;
