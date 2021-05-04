import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function LoginPage() {
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({
      id: 1234,
      name: "Luis Miguel",
      email: "inf.lrodriguez@gmail.com",
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
