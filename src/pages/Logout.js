import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  useEffect(() => {
    const logOut = async () => {
      localStorage.removeItem(process.env.REACT_APP_TOKEN_HEADER_KEY);
    };
    logOut();
  });

  return <Navigate to="/" />;
};

export default Logout;
