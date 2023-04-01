import { useState } from "react";

const Register = () => {
  const resetInput = {
    email: "",
    password: "",
  };

  const [registerInput, setRegisterInput] = useState(resetInput);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRegisterInput(resetInput);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => handleChange(e)}
          value={registerInput.email}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => handleChange(e)}
          value={registerInput.password}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
 
export default Register;