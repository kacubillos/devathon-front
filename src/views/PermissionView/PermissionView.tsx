import { Link } from "react-router-dom";
import usePermissions from "../../hooks/usePermissions";
import { usePermissionsStore } from "../../store/permissions.store";
import { useEffect } from "react";

export const PermissionView = () => {
  const { getPermissions } = usePermissions();
  const permissions = usePermissionsStore((state) => state.permissions);

  useEffect(() => {
    const fetchPermissions = async () => {
      await getPermissions();
    };
    fetchPermissions();
  }, []);

  return (
    <div className="flex h-full flex-col">
      <div className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-neutral-200 p-4">
        <h1>Permissions</h1>
        <div>
          <Link to="create" className="btn-primary">
            + New
          </Link>
        </div>
      </div>
      <div className="flex h-full w-full flex-col flex-wrap p-8">
        {permissions.map((permission) => (
          <div
            key={permission.id}
            className="m-1 flex h-16 w-full flex-col rounded-lg border-neutral-200 p-4 shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg">{permission.name}</h2>
              </div>
              {/*<Link to={`${permission.id}`} className="ellipsis-icon"></Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
