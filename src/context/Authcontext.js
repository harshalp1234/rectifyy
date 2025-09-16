
import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // ✅ added
  const [userToken, setUserToken] = useState(null);

  // Check token on app start
  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          setUserToken(token);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false); // ✅ done checking
      }
    };
    loadToken();
  }, []);

  const login = async () => {
    const token = 'abcd';
    setUserToken(token);
    try {
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    setUserToken(null);
    try {
      await AsyncStorage.removeItem('token');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, userToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
