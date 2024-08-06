import { useState } from "react";
import "./SideMenu.css";
import { NavItem } from "../NavItem/NavItem";

export const SideMenu: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const toggleNavExpansion = () => setIsNavExpanded(!isNavExpanded);

  return (
    <nav className={`${isNavExpanded ? "max-nav-width" : "min-nav-width"} side-menu`}>
      <ul className="nav-wrapper">
        <NavItem to="home" label="Home" compact={!isNavExpanded} hasIcon={true}>
          <span className="home-icon"></span>
        </NavItem>
        <NavItem
          to="users"
          label="Users"
          compact={!isNavExpanded}
          hasIcon={false}
          className="nav-item-hover"
        >
          <span className="users-icon"></span>
        </NavItem>
        <NavItem
          to="roles"
          label="Roles"
          compact={!isNavExpanded}
          hasIcon={false}
          className="nav-item-hover"
        >
          <span className="role-icon"></span>
        </NavItem>
        <NavItem
          to="permissions"
          label="Permissions"
          compact={!isNavExpanded}
          hasIcon={false}
          className="nav-item-hover"
        >
          <span className="permission-icon"></span>
        </NavItem>
      </ul>
      <div className="chevron-wrapper">
        <span
          className={`chevron ${isNavExpanded ? "chevron-left" : "chevron-right"} cursor-pointer`}
          onClick={toggleNavExpansion}
        ></span>
      </div>
    </nav>
  );
};
