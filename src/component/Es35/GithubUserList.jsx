import React, { useState } from "react";
import { GithubUser } from "../ES34/GithubUser";

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
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users &&
          users.map((username) => (
            <GithubUser key={username} username={username} />
          ))}
      </ul>
    </div>
  );
};

export default GithubUserList;
