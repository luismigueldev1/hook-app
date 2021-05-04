import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function AboutPage() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({});
  };
  return (
    <div>
      <h1>About Page</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-warning" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
