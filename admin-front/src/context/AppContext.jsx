import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, getUser, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check authentication status and user data on mount
    if (isAuthenticated()) {
      const userData = getUser();
      if (userData) {
        setUser(userData);
      }
    }
  }, [isAuthenticated, getUser]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    localStorage.setItem('darkMode', !darkMode);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate('/login');
  };

  const value = {
    darkMode,
    toggleDarkMode,
    user,
    setUser,
    handleLogout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;