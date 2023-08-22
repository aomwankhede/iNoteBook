import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
    cpassword: "",
  });
  const history = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/auth/createUser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        name: credentials.name,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      history("/");
    } else {
      alert("Invalid!!!");
    }
  };
  const myStyle = {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    display: "flex",
  };
  const myStyleF = {
    border: "2px solid black",
    padding: "31px",
    fontWeight: "bold",
    borderRadius: "11px",
  };
  return (
    <div style={myStyle}>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit} style={myStyleF}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            required
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
            name="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            required
            minLength={5}
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            required
            minLength={5}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChange}
            name="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            confirm password
          </label>
          <input
            required
            minLength={5}
            type="password"
            className="form-control"
            id="cpassword"
            onChange={onChange}
            name="cpassword"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
