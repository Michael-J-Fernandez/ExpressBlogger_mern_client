import { useState } from "react";

const Login = () => {
  const resetInput = {
    email: "",
    password: "",
  };

  const [loginInput, setLoginInput] = useState(resetInput);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginInput((prev) => ({ ...prev, [name]: value }));
    console.log(loginInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginInput);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        {" "}
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
        {" "}
        Password:
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => handleChange(e)}
          value={loginInput.password}
        />
      </label>
    </form>
  );
};

export default Login;
