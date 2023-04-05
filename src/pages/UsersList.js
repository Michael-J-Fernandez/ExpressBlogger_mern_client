import { useEffect, useState } from "react";
import api from "../api/axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState({ query: "", role: "all" });

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await api.get("/users");
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredUsers = users
    .filter((user) => {
      if (filter.role === "all") {
        return true;
      } else {
        return user.userRole === filter.role;
      }
    })
    .filter((user) => {
      const { fName, lName, email } = user;
      const searchQuery = filter.query.toLowerCase();

      return (
        email.includes(searchQuery) ||
        fName.toLowerCase().includes(searchQuery) ||
        lName.toLowerCase().includes(searchQuery)
      );
    });

  return (
    <div className="users-list">
      <div className="users-filter">
        <label htmlFor="query">
          <input
            type="text"
            name="query"
            id="query"
            autoComplete="false"
            placeholder="Search..."
            value={filter.query}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="all">
          <input
            type="radio"
            name="role"
            id="all"
            value="all"
            checked={filter.role === "all"}
            onChange={(e) => handleChange(e)}
          />
          All
        </label>
        <label htmlFor="user">
          <input
            type="radio"
            name="role"
            id="user"
            value="user"
            checked={filter.role === "user"}
            onChange={(e) => handleChange(e)}
          />
          User
        </label>
        <label htmlFor="admin">
          <input
            type="radio"
            name="role"
            id="admin"
            value="admin"
            checked={filter.role === "admin"}
            onChange={(e) => handleChange(e)}
          />
          Admin
        </label>
      </div>
      {users ? (
        filteredUsers.map((user) => {
          return (
            <div className="user-card" key={user.id}>
              <p>
                <strong>Name:</strong> {user.fName} {user.lName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Role:</strong> {user.userRole}
              </p>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default UsersList;
