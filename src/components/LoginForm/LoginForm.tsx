import { useState } from "react";
import { InputField } from "../Input/Input";
import useLogin from "../../hooks/useLogin";
import { Credentials } from "../../types/api.types";
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/useNotification";

export const LoginForm = () => {
  const { showNotification } = useNotification();
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  //const [rememberMe, setRememberMe] = useState(false);
  const { login } = useLogin();
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(credentials);
      showNotification("Login successful", 3000, "success");
      navigate("/dashboard");
    } catch (error) {
      showNotification(error.message, 3000, "error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-5">
      <InputField
        id="username"
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <InputField
        id="password"
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <div className="flex flex-col gap-4">
        {/*}
        <div className="flex items-center justify-between sm:justify-start">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="recordar"
              className="mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="recordar">Recordar</label>
          </div>
        </div> 
        */}
        <button
          type="submit"
          className="h-12 self-center rounded-lg bg-black px-24 text-sm text-white sm:self-auto md:px-6 md:text-lg lg:px-8 lg:text-xl"
        >
          Log in
        </button>
      </div>
    </form>
  );
};
