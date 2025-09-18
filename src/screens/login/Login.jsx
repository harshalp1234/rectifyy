
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator
// } from 'react-native';
// import React, { useContext, useEffect, useState } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Custombutton from '../../components/Custombutton';
// import { AuthContext } from '../../context/Authcontext';
// import Toast from 'react-native-toast-message';

// const Login = ({ navigation }) => {
//   const { login, isLoading } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const buttonPress = async () => {
//     if (!email) {
//       return Toast.show({
//         type: 'error',
//         text1: 'Enter Email',
//       });
//     }

//     if (!emailRegex.test(email)) {
//       return Toast.show({
//         type: 'error',
//         text1: 'Please enter a valid email address',
//       });
//     }

//     if (!password) {
//       return Toast.show({
//         type: 'error',
//         text1: 'Enter Password',
//       });
//     }

//     if (!passwordRegex.test(password)) {
//       return Toast.show({
//         type: 'error',
//         text1: 'Must include uppercase, lowercase, number, special char',
//       });
//     }

//     try {
//       Toast.show({
//         type: 'success',
//         text1: 'Welcome back 👋',
//       });
//       login();
//     } catch (error) {
//       console.log("Login error:", error);
//       Toast.show({
//         type: 'error',
//         text1: 'Something went wrong. Try again.',
//       });
//     }
//   };

//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     )
//   }

//   return (
//     <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#4d6fa9" }}>
//       {/* Logo */}
//       <View style={{ flexDirection: "row", justifyContent: "center" }}>
//         <Image style={styles.image} source={require("../login/logo.png")} />
//       </View>

//       {/* Title */}
//       <View style={{ flexDirection: "row", justifyContent: "center" }}>
//         <Text style={{ color: "white", fontSize: 20 }}>WELCOME TO PS PRO</Text>
//       </View>

//       {/* Email Input */}
//       <View style={[styles.container, { marginTop: 30 }]}>
//         <Text style={styles.label}>Enter Email</Text>
//         <TextInput
//           placeholder="Enter Your Email"
//           placeholderTextColor="#4d6fa9"
//           style={styles.textinput}
//           onChangeText={setEmail}
//           value={email}
//         />
//       </View>

//       {/* Password Input */}
//       <View style={styles.container}>
//         <Text style={styles.label}>Enter Password</Text>
//         <TextInput
//           secureTextEntry={!showPassword}
//           placeholder="Enter Your Password"
//           placeholderTextColor="#4d6fa9"
//           style={styles.textinput}
//           onChangeText={setPassword}
//           value={password}
//         />
//         <TouchableOpacity
//           onPress={() => setShowPassword(!showPassword)}
//           style={{
//             position: "absolute",
//             right: 25,
//             top: 30,
//           }}
//         >
//           <Icon
//             name={showPassword ? "eye" : "eye-slash"}
//             size={26}
//             color="#888"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Login Button */}
//       <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: "13%" }}>
//         <Custombutton title="Login" onPress={buttonPress} />
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 30,
//     resizeMode: "contain",
//   },
//   label: {
//     marginBottom: 5,
//     fontWeight: 'bold',
//     color: "white",
//     marginLeft: 17,
//   },
//   textinput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 15,
//     color: "#4d6fa9aaa",
//     backgroundColor: "white",
//   },
//   container: {
//     marginVertical: 10,
//   }
// });


// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
// } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import Custombutton from "../../components/Custombutton";
// import Toast from "react-native-toast-message";
// import { useDispatch, useSelector } from "react-redux";
// import { loginStart, loginSuccess, loginFailure } from "../../slice/AuthSlice";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

// const Login = () => {
//   const dispatch = useDispatch();
//   const { isLoading, userToken } = useSelector((state) => state.auth);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const buttonPress = () => {
//     if (!email) {
//       return Toast.show({ type: "error", text1: "Enter Email" });
//     }
//     if (!password) {
//       return Toast.show({ type: "error", text1: "Enter Password" });
//     }

//     dispatch(loginStart());

//     try {
//       // fake token
//       const token = "abcd";
//       dispatch(loginSuccess(token));

//       Toast.show({ type: "success", text1: "Welcome back 👋" });
//     } catch (error) {
//       dispatch(loginFailure());
//       Toast.show({ type: "error", text1: "Something went wrong" });
//     }
//   };

//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (



//     <KeyboardAvoidingView style={{flex:1,  backgroundColor: "#4d6fa9" }}>

//       <View style={{ flexDirection: "row", justifyContent: "center" }}>
//         <Image style={styles.image} source={require("../login/logo.png")} />
//       </View>

//       <View style={{ flexDirection: "row", justifyContent: "center" }}>
//         <Text style={{ color: "white", fontSize: 20 }}>WELCOME TO PS PRO</Text>
//       </View>

//       <View style={[styles.container, { marginTop: 30 }]}>
//         <Text style={styles.label}>Enter Email</Text>
//         <TextInput
//           placeholder="Enter Your Email"
//           placeholderTextColor="#4d6fa9"
//           style={styles.textinput}
//           onChangeText={setEmail}
//           value={email}
//         />
//       </View>

//       <View style={styles.container}>
//         <Text style={styles.label}>Enter Password</Text>
//         <TextInput
//           secureTextEntry={!showPassword}
//           placeholder="Enter Your Password"
//           placeholderTextColor="#4d6fa9"
//           style={styles.textinput}
//           onChangeText={setPassword}
//           value={password}
//         />
//         <TouchableOpacity
//           onPress={() => setShowPassword(!showPassword)}
//           style={{ position: "absolute", right: 25, top: 30 }}
//         >
//           <Icon
//             name={showPassword ? "eye" : "eye-slash"}
//             size={26}
//             color="#888"
//           />
//         </TouchableOpacity>
//       </View>

//       <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: "13%" }}>
//         <Custombutton title="Login" onPress={buttonPress} />
//       </View>

//     </KeyboardAvoidingView>




//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 30,
//     resizeMode: "contain",
//   },
//   label: {
//     marginBottom: 5,
//     fontWeight: "bold",
//     color: "white",
//     marginLeft: 17,
//   },
//   textinput: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 15,
//     color: "#4d6fa9aaa",
//     backgroundColor: "white",
//   },
//   container: {
//     marginVertical: 10,
//   },
// });

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
// } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import Custombutton from "../../components/Custombutton";
// import Toast from "react-native-toast-message";
// import { useDispatch, useSelector } from "react-redux";
// import { loginStart, loginSuccess, loginFailure } from "../../slice/AuthSlice";
// import { SafeAreaView } from "react-native-safe-area-context";

// const Login = () => {
//   const dispatch = useDispatch();
//   const { isLoading } = useSelector((state) => state.auth);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const buttonPress = () => {
//     if (!email) {
//       return Toast.show({ type: "error", text1: "Enter Email" });
//     }
//     if (!password) {
//       return Toast.show({ type: "error", text1: "Enter Password" });
//     }

//     // dispatch(loginStart());

//     try {
//       const token = "abcd"; // fake token
//       dispatch(loginSuccess(token));
//       Toast.show({ type: "success", text1: "Welcome back 👋" });
//     } catch (error) {
//       dispatch(loginFailure());
//       Toast.show({ type: "error", text1: "Something went wrong" });
//     }
//   };

//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#4d6fa9" }} edges={["top", "left", "right"]}>
//       <KeyboardAvoidingView style={{ flex: 1 }}>
//         <View style={{ flexDirection: "row", justifyContent: "center" }}>
//           <Image style={styles.image} source={require("../login/logo.png")} />
//         </View>

//         <View style={{ flexDirection: "row", justifyContent: "center" }}>
//           <Text style={{ color: "white", fontSize: 20 }}>WELCOME TO PS PRO</Text>
//         </View>

//         <View style={[styles.container, { marginTop: 30 }]}>
//           <Text style={styles.label}>Enter Email</Text>
//           <TextInput
//             placeholder="Enter Your Email"
//             placeholderTextColor="#4d6fa9"
//             style={styles.textinput}
//             onChangeText={setEmail}
//             value={email}
//           />
//         </View>

//         <View style={styles.container}>
//           <Text style={styles.label}>Enter Password</Text>
//           <TextInput
//             secureTextEntry={!showPassword}
//             placeholder="Enter Your Password"
//             placeholderTextColor="#4d6fa9"
//             style={styles.textinput}
//             onChangeText={setPassword}
//             value={password}
//           />
//           <TouchableOpacity
//             onPress={() => setShowPassword(!showPassword)}
//             style={{ position: "absolute", right: 25, top: 30 }}
//           >
//             <Icon name={showPassword ? "eye" : "eye-slash"} size={26} color="#888" />
//           </TouchableOpacity>
//         </View>

//         <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: "13%" }}>
//           <Custombutton title="Login" onPress={buttonPress} />
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 30,
//     resizeMode: "contain",
//   },
//   label: {
//     marginBottom: 5,
//     fontWeight: "bold",
//     color: "white",
//     marginLeft: 17,
//   },
//   textinput: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 15,
//     color: "#4d6fa9aaa",
//     backgroundColor: "white",
//   },
//   container: {
//     marginVertical: 10,
//   },
// });

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
// } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import Custombutton from "../../components/Custombutton";
// import Toast from "react-native-toast-message";
// import { useDispatch, useSelector } from "react-redux";
// import { loginStart, loginSuccess, loginFailure } from "../../slice/AuthSlice";
// // import { SafeAreaView } from "react-native-safe-area-context";
// import { SafeAreaView } from "react-native";

// const Login = (props) => {
//   const dispatch = useDispatch();
//   const { isLoading } = useSelector((state) => state.auth);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // ✅ Regex rules
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const buttonPress = () => {
//     if (!email) {
//       return Toast.show({ type: "error", text1: "Enter Email" });
//     }

//     if (!emailRegex.test(email)) {
//       return Toast.show({
//         type: "error",
//         text1: "Please enter a valid email address",
//       });
//     }

//     if (!password) {
//       return Toast.show({ type: "error", text1: "Enter Password" });
//     }

//     if (!passwordRegex.test(password)) {
//       return Toast.show({
//         type: "error",
//         text1: "Password must include uppercase, lowercase, number & special char",
//       });
//     }

//     dispatch(loginStart());
//     try {
//       const token = "abcd"; // fake token
//       dispatch(loginSuccess(token));
//       Toast.show({ type: "success", text1: "Welcome back 👋" });
//     } catch (error) {
//       dispatch(loginFailure());
//       Toast.show({ type: "error", text1: "Something went wrong" });
//     }
//   };

//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   const handleSignup = () =>{
//     props.navigation.navigate("Signup")
//   }

//   return (
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: "#4d6fa9" }}
//       edges={["top", "left", "right"]}
//     >
//       <KeyboardAvoidingView style={{ flex: 1 }}>
//         {/* Logo */}
//         <View style={{ flexDirection: "row", justifyContent: "center" }}>
//           <Image style={styles.image} source={require("../login/logo.png")} />
//         </View>

//         {/* Title */}
//         <View style={{ flexDirection: "row", justifyContent: "center" }}>
//           <Text style={{ color: "white", fontSize: 20 }}>WELCOME TO PS PRO</Text>
//         </View>

//         {/* Email Input */}
//         <View style={[styles.container, { marginTop: 30 }]}>
//           <Text style={styles.label}>Enter Email</Text>
//           <TextInput
//             placeholder="Enter Your Email"
//             placeholderTextColor="#4d6fa9"
//             style={styles.textinput}
//             onChangeText={setEmail}
//             value={email}
//             autoCapitalize="none"
//             keyboardType="email-address"
//           />
//         </View>

//         {/* Password Input */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Enter Password</Text>
//           <TextInput
//             secureTextEntry={!showPassword}
//             placeholder="Enter Your Password"
//             placeholderTextColor="#4d6fa9"
//             style={styles.textinput}
//             onChangeText={setPassword}
//             value={password}
//           />
//           <TouchableOpacity
//             onPress={() => setShowPassword(!showPassword)}
//             style={{ position: "absolute", right: 25, top: 30 }}
//           >
//             <Icon
//               name={showPassword ? "eye" : "eye-slash"}
//               size={26}
//               color="#888"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Login Button */}
//         <View
//           style={{ flex: 1, justifyContent: "flex-end", marginBottom: "13%" }}>
//           <Custombutton title="Login" onPress={buttonPress} />
//           <Custombutton title="Signup" onPress={handleSignup}/>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 30,
//     resizeMode: "contain",
//   },
//   label: {
//     marginBottom: 5,
//     fontWeight: "bold",
//     color: "white",
//     marginLeft: 17,
//   },
//   textinput: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 15,
//     color: "#4d6fa9aaa",
//     backgroundColor: "white",
//   },
//   container: {
//     marginVertical: 10,
//   },
// });





// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
// } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import Custombutton from "../../components/Custombutton";
// import Toast from "react-native-toast-message";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../slice/AuthSlice";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { SafeAreaView } from "react-native";
// import { login } from "../../slice/AuthSlice";

// const Login = (props) => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth); // persisted user {email, password}
//   const { isLoading } = useSelector((state) => state.auth);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // ✅ Regex rules
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const buttonPress = async () => {
//     if (!email) {
//       return Toast.show({ type: "error", text1: "Enter Email" });
//     }

//     if (!emailRegex.test(email)) {
//       return Toast.show({
//         type: "error",
//         text1: "Please enter a valid email address",
//       });
//     }

//     if (!password) {
//       return Toast.show({ type: "error", text1: "Enter Password" });
//     }

//     if (!passwordRegex.test(password)) {
//       return Toast.show({
//         type: "error",
//         text1: "Password must include uppercase, lowercase, number & special char",
//       });
//     }
//     if (email === user.email && password === user.password) {
//       dispatch(login());
//       Toast.show({ type: "success", text1: "Welcome back 👋" });
//       // navigate to home if you want
//     } else {
//       Toast.show({ type: "error", text1: "Invalid email or password" });
//     }

//     try {
//       const storedUser = await AsyncStorage.getItem("user");

//       if (!storedUser) {
//         return Toast.show({ type: "error", text1: "No account found. Please sign up." });
//       }

//       const { email: savedEmail, password: savedPassword } = JSON.parse(storedUser);

//       if (email === savedEmail && password === savedPassword) {
//         dispatch(login({ email, password }));
//         Toast.show({ type: "success", text1: "Welcome back 👋" });
//       } else {
//         Toast.show({ type: "error", text1: "Invalid email or password" });
//       }
//     } catch (error) {
//       dispatch(loginFailure(error.message));
//       Toast.show({ type: "error", text1: "Something went wrong" });
//     }
//   };

//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   const handleSignup = () => {
//     props.navigation.navigate("Signup");
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#4d6fa9" }} edges={["top", "left", "right"]}>
//       <KeyboardAvoidingView style={{ flex: 1 }}>
//         {/* Logo */}
//         <View style={{ flexDirection: "row", justifyContent: "center" }}>
//           <Image style={styles.image} source={require("../login/logo.png")} />
//         </View>

//         {/* Title */}
//         <View style={{ flexDirection: "row", justifyContent: "center" }}>
//           <Text style={{ color: "white", fontSize: 20 }}>WELCOME TO PS PRO</Text>
//         </View>

//         {/* Email Input */}
//         <View style={[styles.container, { marginTop: 30 }]}>
//           <Text style={styles.label}>Enter Email</Text>
//           <TextInput
//             placeholder="Enter Your Email"
//             placeholderTextColor="#4d6fa9"
//             style={styles.textinput}
//             onChangeText={setEmail}
//             value={email}
//             autoCapitalize="none"
//             keyboardType="email-address"
//           />
//         </View>

//         {/* Password Input */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Enter Password</Text>
//           <TextInput
//             secureTextEntry={!showPassword}
//             placeholder="Enter Your Password"
//             placeholderTextColor="#4d6fa9"
//             style={styles.textinput}
//             onChangeText={setPassword}
//             value={password}
//           />
//           <TouchableOpacity
//             onPress={() => setShowPassword(!showPassword)}
//             style={{ position: "absolute", right: 25, top: 30 }}
//           >
//             <Icon
//               name={showPassword ? "eye" : "eye-slash"}
//               size={26}
//               color="#888"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Login Button */}
//         <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: "13%" }}>
//           <Custombutton title="Login" onPress={buttonPress} />
//           <Custombutton title="Signup" onPress={handleSignup} />
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 30,
//     resizeMode: "contain",
//   },
//   label: {
//     marginBottom: 5,
//     fontWeight: "bold",
//     color: "white",
//     marginLeft: 17,
//   },
//   textinput: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 15,
//     color: "#4d6fa9aaa",
//     backgroundColor: "white",
//   },
//   container: {
//     marginVertical: 10,
//   },
// });


import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import Custombutton from "../../components/Custombutton";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slice/AuthSlice";
import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";


const Login = (props) => {
  const passwordRef = useRef()
  const authState = useSelector((state) => state.auth);
  console.log(authState)
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // persisted user {email, password}

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Regex rules
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const buttonPress = () => {
    if (!email) return Toast.show({ type: "error", text1: "Enter Email" });
    if (!emailRegex.test(email))
      return Toast.show({ type: "error", text1: "Please enter a valid email" });
    if (!password) return Toast.show({ type: "error", text1: "Enter Password" });
    if (!passwordRegex.test(password))
      return Toast.show({
        type: "error",
        text1: "Password must include uppercase, lowercase, number & special char",
      });

    // ✅ Check persisted user from redux
    if (!user) {
      return Toast.show({ type: "error", text1: "No account found. Please sign up." });
    }

    if (email === user.email && password === user.password) {
      dispatch(login()); // just flips isAuthenticated = true
      Toast.show({ type: "success", text1: "Welcome back 👋" });
      // props.navigation.navigate("Home");  <-- optional
    } else {
      Toast.show({ type: "error", text1: "Invalid email or password" });
    }
  };

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }


  const handleSignup = () => props.navigation.navigate("Signup");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4d6fa9" }} edges={["top", "left", "right"]}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        {/* Logo */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image style={styles.image} source={require("../login/logo.png")} />
        </View>

        {/* Title */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "white", fontSize: 20 }}>WELCOME TO PS PRO</Text>
        </View>

        {/* Email Input */}
        <View style={[styles.container, { marginTop: 30 }]}>
          <Text style={styles.label}>Enter Email</Text>
          <TextInput
            placeholder="Enter Your Email"
            placeholderTextColor="#4d6fa9"
            style={styles.textinput}
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
        </View>

        {/* Password Input */}
        <View style={styles.container}>
          <Text style={styles.label}>Enter Password</Text>
          <TextInput
            ref={passwordRef}
            secureTextEntry={!showPassword}
            placeholder="Enter Your Password"
            placeholderTextColor="#4d6fa9"
            style={styles.textinput}
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ position: "absolute", right: 25, top: 31 }}
          >
            {/* <Icon
              name={showPassword ? "eye" : "eye-slash"}
              size={26}
              color="#888"
            /> */}
            <Icon
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#555"
            />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={handleSignup} style={{}}> */}


        </View>

        {/* Login Button */}
        {/* <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: "13%" }}> */}
        {/* <Custombutton style={{ borderRadius: 20 }} title="Login" onPress={buttonPress} /> */}
        {/* <LinearGradient
            colors={["#97ADD4", "#4677CB", "#3F6FBF"]}

          >
            <TouchableOpacity style={{
              borderRadius: 12,
              marginHorizontal: 30,
              alignItems: "center",
              paddingVertical: 20,
              paddingHorizontal: 40,
              borderRadius: 20
            }}>
              <Text style={{ color: "white" }}>Login</Text>
            </TouchableOpacity>

          </LinearGradient>
          <View style={{ alignItems: "center" }}>


            <Text style={{ color: "white", marginTop: 8 }}>
              Don’t have an account?{" "}
              <Text
                style={{ color: "white", textDecorationLine: "underline", fontWeight: "bold" }}
                onPress={handleSignup}
              >
                Create Account
              </Text>
            </Text>
          </View>
        </View> */}
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: "13%" }}>
  {/* Login Button */}
  <Custombutton title="Login" onPress={buttonPress} />

  {/* Signup Text */}
  <View style={{ alignItems: "center", marginTop: 15 }}>
    <Text style={{ color: "white", fontSize: 14 }}>
      Don’t have an account?{" "}
      <Text
        style={{
          color: "white",
          textDecorationLine: "underline",
          fontWeight: "bold",
        }}
        onPress={handleSignup}
      >
        Create Account
      </Text>
    </Text>
  </View>
</View>



      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginTop: 30,
    resizeMode: "contain",
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
    color: "white",
    marginLeft: 17,
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 15,
    color: "#4d6fa9aaa",
    backgroundColor: "white",
  },
  container: {
    marginVertical: 10,
  },
  linearGradient: {
    borderRadius: 12,
    marginHorizontal: 20,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 30

  }
});
