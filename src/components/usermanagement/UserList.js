import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.uid}>
            <span>
              {" "}
              <strong>ID:</strong> {user.uid}
            </span>
            <span>
              {" "}
              <strong>E-mail:</strong> {user.email}
            </span>
            <span>
              {" "}
              <strong>Username:</strong> {user.username}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
