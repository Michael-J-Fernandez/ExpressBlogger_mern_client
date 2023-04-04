import { useEffect, useState } from "react";
import api from "../api/axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await api.get("/users");
      setUsers(usersData.data.users);
    };
    fetchUsers();
  }, []);

  return (
    <div className="users-list">
      {users ? (
        users.map((user) => <p key={user.id}>{user.email}</p>)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default UsersList;
