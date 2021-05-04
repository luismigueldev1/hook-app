import React, { useState } from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./context/UserContext";

export default function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
}
