import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, logout } from "../slice/AuthSlice";
import { View, Text, Button } from "react-native";

const AuthScreen = () => {
  const dispatch = useDispatch();
  const { userToken, isLoading } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    try {
      dispatch(loginStart());
      // fake token
      const token = "abcd";
      // if API login succeeds
      dispatch(loginSuccess(token));
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View>
      {userToken ? (
        <>
          <Text>Logged in with token: {userToken}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Text>Not logged in</Text>
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

export default AuthScreen;
