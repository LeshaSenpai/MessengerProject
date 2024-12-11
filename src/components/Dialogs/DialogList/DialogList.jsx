import React from "react";
import { Link } from "react-router-dom";

const DialogList = () => {
  const users = [
    { id: 1, username: "Alice" },
    { id: 2, username: "Bob" },
    { id: 3, username: "Charlie" },
  ];

  return (
    <div>
      <h2>Dialogs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/dialogs/${user.username}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export {DialogList};
