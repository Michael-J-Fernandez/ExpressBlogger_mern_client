import { useState } from "react";

import api from "../api/blogs";

const Login = () => {
  const resetInput = {
    email: "",
    password: "",
  };

  const [loginInput, setLoginInput] = useState(resetInput);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/users/login", loginInput);

    setLoginInput(resetInput);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
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
