// import { ActivityIndicator, StyleSheet, View } from 'react-native';
// import React, { useEffect } from 'react';
// import { AuthContext } from '../context/Authcontext';
// import { useContext } from 'react';
// import Authstack from './Authstack';
// import { NavigationContainer } from '@react-navigation/native';
// import Appstack from './Appstack';
// import SplashScreen from 'react-native-splash-screen';


// const Appnav = () => {
//   useEffect(() => {
//     SplashScreen.hide()
//   }, [])

//   const { userToken } = useContext(AuthContext)


//   return (
//     userToken ? <Appstack /> : <Authstack />

//   );
// };

// export default Appnav;

// const styles = StyleSheet.create({});

// import { StyleSheet } from 'react-native';
// import React, { useEffect, useContext } from 'react';
// import { AuthContext } from '../context/Authcontext';
// import Authstack from './Authstack';
// import { NavigationContainer } from '@react-navigation/native';
// import Appstack from './Appstack';
// import SplashScreen from 'react-native-splash-screen';

// const Appnav = () => {
//   const { userToken, isLoading } = useContext(AuthContext);


//   useEffect(() => {
//     if (!isLoading) {
//       SplashScreen.hide(); // ✅ hide splash only after token check
//     }
//   }, [isLoading]);

//   if (isLoading) {
//     return null; // ✅ keep splash screen visible until check completes
//   }

//   return (

//     userToken ? <Appstack /> : <Authstack />

//   );
// };

// export default Appnav;

// const styles = StyleSheet.create({});


// import { StyleSheet } from "react-native";
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import Authstack from "./Authstack";
// import Appstack from "./Appstack";
// import SplashScreen from "react-native-splash-screen";

// const Appnav = () => {
//   const { token } = useSelector((state) => state.auth); // ✅ get token from redux

//   useEffect(() => {
//     SplashScreen.hide(); // ✅ hide splash after redux loads
//   }, []);

//   return token ? <Appstack /> : <Authstack />;
// };

// export default Appnav;

// const styles = StyleSheet.create({});


import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Authstack from "./Authstack";
import Appstack from "./Appstack";
import SplashScreen from "react-native-splash-screen";

const Appnav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth); // ✅ check auth status

  useEffect(() => {
    SplashScreen.hide(); 
  }, []);

  return isAuthenticated ? <Appstack /> : <Authstack />;
};

export default Appnav;

const styles = StyleSheet.create({});
