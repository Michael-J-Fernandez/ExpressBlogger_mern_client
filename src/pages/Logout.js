import { useEffect } from "react"
import { Navigate } from "react-router-dom";
import api from "../api/blogs"

const Logout = () => {

    useEffect(() => {
        const logOut = async () => {
            await api.get("/users/logout");
        }
        logOut();
    })

    return (
        <Navigate to="/" />
    );
}
 
export default Logout;