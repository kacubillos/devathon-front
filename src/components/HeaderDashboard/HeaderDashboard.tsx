import "./HeaderDashboard.css";
import useLogin from "../../hooks/useLogin";

export const HeaderDashboard = () => {
  const { logout } = useLogin();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="logo-container">
        <span className="logo"></span>
        <span>Inventory System</span>
      </div>
      <div className="mx-4 flex cursor-pointer items-center">
        <span className="logout-icon" onClick={handleLogout}></span>
      </div>
    </header>
  );
};
