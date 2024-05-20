import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const validUsername = "mor_2314";
    const validPassword = "83r5^_";

    if (username === validUsername && password === validPassword) {
      const token = btoa(`${username}:${password}`); 
      localStorage.setItem("token", token);
      setIsAuthenticated(true); 
      navigate("/products");
    } else {
      setError("Incorrect username or password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <h4 className="text-center py-2">Login Page</h4>
          <form onSubmit={handleLogin}>
            <div className="form-group py-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group py-2 position-relative">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="position-absolute pe-3 visibilityIcon"
                onClick={togglePasswordVisibility}
              >
                <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
              </span>
            </div>
            {error && <div className="alert alert-danger mt-2">{error}</div>}
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary mt-2 px-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
