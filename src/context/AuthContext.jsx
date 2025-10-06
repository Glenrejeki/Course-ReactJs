import React, { createContext, useState, useEffect } from "react";
import { getLocalUser, setLocalUser, removeLocalUser } from "../utils/localStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getLocalUser());

  useEffect(() => {
    setUser(getLocalUser());
  }, []);

  const login = (email, password) => {
    const storedUser = getLocalUser();
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      return true;
    }
    return false;
  };

  const register = (newUser) => {
    setLocalUser(newUser);
    setUser(newUser);
  };

  const logout = () => {
    removeLocalUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
