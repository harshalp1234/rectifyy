import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Authstack from "./Authstack";
import Appstack from "./Appstack";
import SplashScreen from "react-native-splash-screen";

const Appnav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth); //check auth status

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return isAuthenticated ? <Appstack /> : <Authstack />;
};

export default Appnav;

const styles = StyleSheet.create({});
