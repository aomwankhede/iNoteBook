import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let history = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      history("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const containerStyle = {
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const myStyleF = {
    border: "2px solid black",
    padding: "31px",
    fontWeight: "bold",
    borderRadius: "11px",
  };

  const inputStyle = {
    width: "100%",
    padding: "5px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "3px",
    padding: "10px 20px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <div style={containerStyle}>
        <form style={myStyleF} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              style={{
                fontFamily: "sans-serif",
                fontSize: "larger",
                fontWeight: "bolder",
              }}
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
              style={inputStyle}
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              style={{
                fontFamily: "sans-serif",
                fontSize: "larger",
                fontWeight: "bolder",
              }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
              style={inputStyle}
              placeholder="password"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              type="submit"
              className="btn btn-primary"
              style={buttonStyle}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
