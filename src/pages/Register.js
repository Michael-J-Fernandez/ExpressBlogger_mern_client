import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Register = () => {
  const navigate = useNavigate();

  const resetInput = {
    fName: "",
    lName: "",
    email: "",
    password: "",
  };

  const [registerInput, setRegisterInput] = useState(resetInput);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await api.post("/users/register", registerInput);

    if ("error" in data) {
      setError(data.error);
    } else {
      const { name, token } = data;

      localStorage.setItem(
        process.env.REACT_APP_TOKEN_HEADER_KEY,
        JSON.stringify({ name, token })
      );

      setRegisterInput(resetInput);

      navigate("/");
      window.location.reload();
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div
        className="error-message"
        style={{ color: "red", fontWeight: "800px" }}
      >
        {error}
      </div>
      <br />
      <label htmlFor="fName">
        First Name:
        <input
          type="text"
          name="fName"
          id="fName"
          onChange={(e) => handleChange(e)}
          value={registerInput.fName}
        />
      </label>
      <label htmlFor="lName">
        Last Name:
        <input
          type="text"
          name="lName"
          id="lName"
          onChange={(e) => handleChange(e)}
          value={registerInput.lName}
        />
      </label>
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
};

export default Register;
