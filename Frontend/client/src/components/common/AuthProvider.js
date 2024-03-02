import React, { createContext, useState } from 'react';

// Create a context for the auth state
export const AuthContext = createContext();

// Create a provider component for the AuthContext
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
