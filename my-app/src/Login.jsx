import React, { Component, useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bad_password, setBadPassword] = useState(false);
  const [bad_username, setBadUsername] = useState(false);

  return (
    <div>
      Username:{" "}
      <input
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      
      Password: <input value={password}></input>
      <span style={{ color: "red" }}>
        {bad_username && "Bad Username"}
        {!bad_username && bad_password && "Bad Password"}
      </span>
      <button
        onClick={() => {
          setBadPassword(true);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
