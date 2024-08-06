// import { useRolePermissionStore } from "../store/rolePermission.store";
import rolePermissionService from "../services/rolePermission";
import { useRolePermissionStore } from "../store/rolePermission.store";
import { RolePermissionRequest, RolePermissionsResponse } from "../types/rolePermission.types";

const useRolePermission = () => {
  const setRolePermission = useRolePermissionStore((state) => state.setRolePermission);

  const createRolePermission = async (data: RolePermissionRequest[]) => {
    const response = await rolePermissionService.createRolePermission(data);
    if (response.status === 201) {
      //TODO: get role permissions
    }
  };

  const getPermissionForRole = async (role_id: number) => {
    const response = await rolePermissionService.getPermissionsforRole(role_id);
    if (response.status === 200) {
      const data = response.data as RolePermissionsResponse;
      setRolePermission(data.rolePermission);
    }
  };

  return { createRolePermission, getPermissionForRole };
};

export default useRolePermission;
