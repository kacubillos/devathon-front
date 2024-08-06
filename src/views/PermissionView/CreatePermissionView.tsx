import { useState } from "react";
import { BackTo } from "../../components/BackTo/BackTo";
import usePermissions from "../../hooks/usePermissions";

export const CreatePermissionView = () => {
  const { createPermission } = usePermissions();
  const [data, setData] = useState({
    name: "",
  });

  const handleCreatePermission = async () => {
    try {
      await createPermission(data);
      setData({
        name: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-with-actions">
      <div className="px-8 pt-8">
        <BackTo>Permissions</BackTo>
      </div>

      {/* content */}
      <div className="flex-auto px-8">
        <h1 className="text-3xl">Create permission</h1>
        <div className="mt-8 flex w-full flex-col space-y-4 rounded-md border-solid border-neutral-200 px-4 py-8 shadow-lg">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-neutral-700">Name</label>
            <input
              type="text"
              className="h-10 rounded-md bg-neutral-200 p-4 focus:bg-blue-200"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
        </div>
      </div>
      {/* actions */}
      <div className="mt-auto flex items-center space-x-2 border-t border-neutral-200 p-4">
        <button className="btn-primary" onClick={() => handleCreatePermission()}>
          Save
        </button>
        <button className="btn-secondary" onClick={() => setData({ name: "" })}>
          Cancel
        </button>
      </div>
    </div>
  );
};
