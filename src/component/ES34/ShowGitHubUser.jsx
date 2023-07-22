import React from "react";
import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export const ShowGithubUser = () => {
  const { username } = useParams();

  return (
    <div>
      <h1>User: {username}</h1>
      <GithubUser username={username} />
    </div>
  );
};

export default ShowGithubUser;
