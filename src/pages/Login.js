import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const resetInput = {
    email: "",
    password: "",
  };

  const [loginInput, setLoginInput] = useState(resetInput);
  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await api.post("/users/login", loginInput);

    if ("error" in data) {
      setError(data.error);
    } else {
      const { user, token } = data;

      localStorage.setItem(
        process.env.REACT_APP_TOKEN_HEADER_KEY,
        JSON.stringify({ user, token })
      );

      setLoginInput(resetInput);

      navigate("/");
      window.location.reload();
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div
        className="error-message"
        style={{ color: "red", fontWeight: "800px" }}
      >
        {error}
      </div>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => handleChange(e)}
          value={loginInput.email}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => handleChange(e)}
          value={loginInput.password}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
