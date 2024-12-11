import React, { useState } from "react";
import { usersMock } from "./UsersMock";
import { Link } from "react-router-dom";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersMock.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Users</h1>
      <div>
        {currentUsers.map((user) => (
          <div key={user.id} style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            <img src={user.photo} alt={user.name} style={{ borderRadius: "50%", marginRight: "10px" }} />
            <div>
              <h3>{user.name}</h3>
              <Link to={`/dialogs/${user.name}`}>Начать чат</Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>Предыдущая</button>
        )}
        {indexOfLastUser < usersMock.length && (
          <button onClick={() => handlePageChange(currentPage + 1)}>Следующая</button>
        )}
      </div>
    </div>
  );
};

export default Users;
