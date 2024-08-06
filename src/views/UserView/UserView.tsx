import { useEffect, useState } from "react";
import usersService from "../../services/users";
import "./UserView.css";

export const UserView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await usersService.getUsers();
      setUsers(response);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex h-full flex-col">
      <div className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-neutral-200 p-4">
        <h1>Users</h1>
        <div>
          <button className="btn-primary">+ New</button>
        </div>
      </div>
      {/* content users list */}
      <div className="flex h-full w-full flex-wrap p-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="m-4 flex h-48 w-48 flex-col rounded-lg border-neutral-200 p-4 shadow-xl"
          >
            <span className="avatar-icon self-center"></span>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-md">{user.username}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
