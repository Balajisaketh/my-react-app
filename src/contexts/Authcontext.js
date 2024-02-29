// AuthContext.js
import React, { createContext, useState,useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Simulate successful login
    console.log(userData,"i am data")
    setUser(userData);
    setIsLoggedIn(!isLoggedIn)
  };

  const logout = () => {
    // Logic to handle logout
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, login, logout ,isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
