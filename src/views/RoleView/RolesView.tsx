import { useEffect } from "react";
import { Link } from "react-router-dom";
import useRoles from "../../hooks/useRoles";
import "./RolesView.css";
import { useRolesStore } from "../../store/roles.store";

export const RolesView = () => {
  const { getRoles } = useRoles();
  const roles = useRolesStore((state) => state.roles);

  useEffect(() => {
    const fetchRoles = async () => {
      await getRoles();
    };
    fetchRoles();
  }, []);
  return (
    <div className="flex h-full flex-col">
      <div className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-neutral-200 p-4">
        <h1>Roles</h1>
        <div>
          <Link to="create" className="btn-primary">
            + New
          </Link>
        </div>
      </div>
      <h2 className="mx-8 mt-8">Standard roles</h2>
      <div className="flex h-full w-full flex-wrap p-8">
        {roles.map((role) => (
          <div
            key={role.id}
            className="m-4 flex h-16 w-full flex-col rounded-lg border-neutral-200 p-4 shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg">{role.name}</h2>
              </div>
              <Link to={`${role.id}`} className="ellipsis-icon"></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
