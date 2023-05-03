import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handlePW = (e) => {
    setPassword(e.target.value);
  };

  const submitInfo = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("UserInfo"));
    if (id === user.id && password === user.password) {
      props.login(true);
    } else {
      alert("틀렸어요 🥲");
    }
  };

  useEffect(() => {}, [id, password]);

  return (
    <div className="wrapper_box">
      <h2>LOG IN</h2>
      <form className="login_form" onSubmit={submitInfo}>
        <input
          type="text"
          className="login_input"
          placeholder="ID"
          value={id}
          onChange={handleId}
        />
        <input
          placeholder="Password"
          type="Password"
          className="login_input"
          value={password}
          onChange={handlePW}
        />
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
