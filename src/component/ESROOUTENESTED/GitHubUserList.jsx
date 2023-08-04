import React, { useState } from "react";
import { GithubUser } from "../ES34/GithubUser";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const GithubUserList = () => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddUser = () => {
    setUsers([...users, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a username"
      />
      <ul>
        {users &&
          users.map((username) => (
            <li key={username}>
              <Link to={`/users/${username}`}>{username}</Link>
            </li>
          ))}
      </ul>
      <Routes>
        <Route path="/:username" element={<GithubUser />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default GithubUserList;
