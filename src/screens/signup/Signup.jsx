// import React, { useState, useRef } from "react";
// import moment from "moment";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   SafeAreaView,
//   Platform,
// } from "react-native";
// import DatePicker from "react-native-date-picker";
// import Toast from "react-native-toast-message";
// import { useDispatch } from "react-redux";
// import { signup } from "../../slice/AuthSlice";
// import Icon from "react-native-vector-icons/Ionicons";
// import Custombutton from "../../components/Custombutton";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// const Signup = (props) => {
//   const dispatch = useDispatch();

//   // Form States
//   const [date, setDate] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [secureText, setSecureText] = useState(true);
//   const [secureConfirmText, setSecureConfirmText] = useState(true);
//   const [loading, setLoading] = useState(false);

//   // Refs
//   const lastNameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();

//   // Regex
//   const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.(com|org|net|in|co|edu|gov|io)$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const handleSignup = async () => {
//     const trimmedFirstName = firstName.trim();
//     const trimmedLastName = lastName.trim();
//     const trimmedEmail = email.trim();
//     const trimmedPassword = password.trim();
//     const trimmedConfirmPassword = confirmPassword.trim();

//     if (!trimmedFirstName || !trimmedLastName || !trimmedEmail || !trimmedPassword || !trimmedConfirmPassword || !date) {
//       return Toast.show({ type: "error", text1: "All fields are required" });
//     }

//     if (!emailRegex.test(trimmedEmail)) {
//       return Toast.show({ type: "error", text1: "Please enter a valid email" });
//     }

//     if (!passwordRegex.test(trimmedPassword)) {
//       return Toast.show({
//         type: "error",
//         text1: "Password must have 8+ chars, uppercase, lowercase, number, and special char",
//       });
//     }

//     if (trimmedPassword !== trimmedConfirmPassword) {
//       return Toast.show({ type: "error", text1: "Password and confirm password must be same." });
//     }

//     try {
//       setLoading(true);
//       await dispatch(
//         signup({
//           firstName: trimmedFirstName,
//           lastName: trimmedLastName,
//           email: trimmedEmail,
//           password: trimmedPassword,
//           confirmPassword: trimmedConfirmPassword,
//           date: date.toISOString(),
//         })
//       );
//       Toast.show({ type: "success", text1: "Account created 🎉" });
//       props.navigation.goBack();
//     } catch (error) {
//       Toast.show({ type: "error", text1: "Signup failed. Try again!" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#4d6fa9" }}>
//       <KeyboardAwareScrollView
//         contentContainerStyle={{ paddingVertical: 20, flexGrow: 1 }}
//         enableOnAndroid
//         extraScrollHeight={Platform.OS === "ios" ? 10 : 50}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* Responsive Header */}
//         <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15, marginVertical:15}}>
//           <TouchableOpacity
//             onPress={() => props.navigation.goBack()}
//             activeOpacity={0.7}
//             style={{ padding: 5 }}
//           >
//             <Icon name="arrow-back" size={24} color="white" />
//           </TouchableOpacity>

//           <Text style={{ 
//             flex: 1,
//             textAlign: "center",
//             color: "white",
//             fontSize: 24,
//             fontWeight: "bold",
//             marginRight: 35,
//           }}>
//             Create Account
//           </Text>
//         </View>

//         {/* First Name */}
//         <View style={styles.container}>
//           <Text style={styles.label}>First Name</Text>
//           <TextInput
//             style={styles.textinput}
//             placeholder="Enter First Name"
//             value={firstName}
//             onChangeText={(text) => setFirstName(text.replace(/^\s+/g, ""))}
//             placeholderTextColor="#4d6fa9"
//             returnKeyType="next"
//             onSubmitEditing={() => lastNameRef.current.focus()}
//           />
//         </View>

//         {/* Last Name */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Last Name</Text>
//           <TextInput
//             ref={lastNameRef}
//             style={styles.textinput}
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChangeText={(text) => setLastName(text.replace(/^\s+/g, ""))}
//             placeholderTextColor="#4d6fa9"
//             returnKeyType="next"
//             onSubmitEditing={() => emailRef.current.focus()}
//           />
//         </View>

//         {/* Email */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             ref={emailRef}
//             style={styles.textinput}
//             placeholder="Enter Your Email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             value={email}
//             onChangeText={(text) => setEmail(text.replace(/^\s+/g, ""))}
//             placeholderTextColor="#4d6fa9"
//             returnKeyType="next"
//             onSubmitEditing={() => passwordRef.current.focus()}
//           />
//         </View>

//         {/* Password */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Password</Text>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               ref={passwordRef}
//               style={[styles.textinput, { flex: 1, marginHorizontal: 0, borderWidth: 0 }]}
//               placeholder="Enter Your password"
//               secureTextEntry={secureText}
//               autoCapitalize="none"
//               value={password}
//               onChangeText={(text) => setPassword(text.replace(/^\s+/g, ""))}
//               placeholderTextColor="#4d6fa9"
//               returnKeyType="next"
//               onSubmitEditing={() => confirmPasswordRef.current.focus()}
//             />
//             <TouchableOpacity onPress={() => setSecureText(!secureText)}>
//               <Icon name={secureText ? "eye-off" : "eye"} size={20} color="#555" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Confirm Password */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Confirm Password</Text>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               ref={confirmPasswordRef}
//               style={[styles.textinput, { flex: 1, marginHorizontal: 0, borderWidth: 0 }]}
//               placeholder="Confirm Your Password"
//               secureTextEntry={secureConfirmText}
//               autoCapitalize="none"
//               value={confirmPassword}
//               onChangeText={(text) => setConfirmPassword(text.replace(/^\s+/g, ""))}
//               placeholderTextColor="#4d6fa9"
//               returnKeyType="done"
//               onSubmitEditing={handleSignup}
//             />
//             <TouchableOpacity onPress={() => setSecureConfirmText(!secureConfirmText)}>
//               <Icon name={secureConfirmText ? "eye-off" : "eye"} size={20} color="#555" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Birth Date */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Birth Date</Text>
//           <TouchableOpacity
//             style={[styles.textinput, { justifyContent: "center" }]}
//             onPress={() => setOpen(true)}
//             activeOpacity={0.7}
//           >
//             <Text style={{ color: date ? "black" : "#4d6fa9" }}>
//               {date ? moment(date).format("DD MMMM YYYY") : "Please Enter Your Birth Date"}
//             </Text>
//           </TouchableOpacity>
//         </View>

//         <DatePicker
//           modal
//           mode="date"
//           open={open}
//           date={date || new Date()}
//           maximumDate={new Date()}
//           onConfirm={(selectedDate) => {
//             setOpen(false);
//             setDate(selectedDate);
//           }}
//           onCancel={() => setOpen(false)}
//         />
//       </KeyboardAwareScrollView>

//       {/* Fixed bottom button */}
//       <View style={{ backgroundColor: "#4d6fa9", marginBottom: "13%" }}>
//         <Custombutton
//           style={{ borderRadius: 20 }}
//           title={"Signup"}
//           onPress={handleSignup}
//           disabled={loading}
//         />

//         <View style={{ alignItems: "center", marginTop: 10 }}>
//           <Text style={{ color: "white" }}>
//             Already have an account?{" "}
//             <Text
//               style={{ color: "white", textDecorationLine: "underline", fontWeight: "bold" }}
//               onPress={() => props.navigation.goBack("Login")}
//             >
//               Login
//             </Text>
//           </Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Signup;

// const styles = StyleSheet.create({
//   title: {
//     textAlign: "center",
//     marginBottom: 30,
//     color: "white",
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   container: {
//     marginVertical: 10,
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
//     color: "black",
//     backgroundColor: "white",
//   },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     marginHorizontal: 15,
//     backgroundColor: "white",
//     paddingRight: 10,
//   },
// });
// import React, { useState, useRef } from "react";
// import moment from "moment";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   SafeAreaView,
//   Platform,
// } from "react-native";
// import DatePicker from "react-native-date-picker";
// import Toast from "react-native-toast-message";
// import { useDispatch } from "react-redux";
// import { signup } from "../../slice/AuthSlice";
// import Icon from "react-native-vector-icons/Ionicons";
// import Custombutton from "../../components/Custombutton";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// const Signup = (props) => {
//   const dispatch = useDispatch();

//   // Form States
//   const [date, setDate] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [secureText, setSecureText] = useState(true);
//   const [secureConfirmText, setSecureConfirmText] = useState(true);
//   const [loading, setLoading] = useState(false);

//   // Refs
//   const lastNameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();

//   // Regex
//   const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.(com|org|net|in|co|edu|gov|io)$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const handleSignup = async () => {
//     const trimmedFirstName = firstName.trim();
//     const trimmedLastName = lastName.trim();
//     const trimmedEmail = email.trim();
//     const trimmedPassword = password.trim();
//     const trimmedConfirmPassword = confirmPassword.trim();

//     if (!trimmedFirstName || !trimmedLastName || !trimmedEmail || !trimmedPassword || !trimmedConfirmPassword || !date) {
//       Toast.hide();
//       return Toast.show({ type: "error", text1: "All fields are required" });
//     }

//     if (!emailRegex.test(trimmedEmail)) {
//       Toast.hide();
//       return Toast.show({ type: "error", text1: "Please enter a valid email" });
//     }

//     if (!passwordRegex.test(trimmedPassword)) {
//       Toast.hide();
//       return Toast.show({
//         type: "error",
//         text1: "Password must have 8+ chars, uppercase, lowercase, number, and special char",
//       });
//     }

//     if (trimmedPassword !== trimmedConfirmPassword) {
//       Toast.hide();
//       return Toast.show({ type: "error", text1: "Password and confirm password must be same." });
//     }

//     try {
//       setLoading(true);
//       await dispatch(
//         signup({
//           firstName: trimmedFirstName,
//           lastName: trimmedLastName,
//           email: trimmedEmail,
//           password: trimmedPassword,
//           confirmPassword: trimmedConfirmPassword,
//           date: date.toISOString(),
//         })
//       );
//       Toast.hide();
//       Toast.show({ type: "success", text1: "Account created 🎉" });
//       props.navigation.goBack();
//     } catch (error) {
//       Toast.hide();
//       Toast.show({ type: "error", text1: "Signup failed. Try again!" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#4d6fa9" }}>
//       <KeyboardAwareScrollView
//         contentContainerStyle={{ paddingVertical: 20, flexGrow: 1 }}
//         enableOnAndroid
//         extraScrollHeight={Platform.OS === "ios" ? 10 : 50}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* Responsive Header */}
//         <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15, marginVertical:15}}>
//           <TouchableOpacity
//             onPress={() => props.navigation.goBack()}
//             activeOpacity={0.7}
//             style={{ padding: 5 }}
//           >
//             <Icon name="arrow-back" size={24} color="white" />
//           </TouchableOpacity>

//           <Text style={{ 
//             flex: 1,
//             textAlign: "center",
//             color: "white",
//             fontSize: 24,
//             fontWeight: "bold",
//             marginRight: 35,
//           }}>
//             Create Account
//           </Text>
//         </View>

//         {/* First Name */}
//         <View style={styles.container}>
//           <Text style={styles.label}>First Name</Text>
//           <TextInput
//             style={styles.textinput}
//             placeholder="Enter First Name"
//             value={firstName}
//             onChangeText={(text) => setFirstName(text.replace(/^\s+/g, ""))}
//             placeholderTextColor="#4d6fa9"
//             returnKeyType="next"
//             onSubmitEditing={() => lastNameRef.current.focus()}
//           />
//         </View>

//         {/* Last Name */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Last Name</Text>
//           <TextInput
//             ref={lastNameRef}
//             style={styles.textinput}
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChangeText={(text) => setLastName(text.replace(/^\s+/g, ""))}
//             placeholderTextColor="#4d6fa9"
//             returnKeyType="next"
//             onSubmitEditing={() => emailRef.current.focus()}
//           />
//         </View>

//         {/* Email */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             ref={emailRef}
//             style={styles.textinput}
//             placeholder="Enter Your Email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             value={email}
//             onChangeText={(text) => setEmail(text.replace(/^\s+/g, ""))}
//             placeholderTextColor="#4d6fa9"
//             returnKeyType="next"
//             onSubmitEditing={() => passwordRef.current.focus()}
//           />
//         </View>

//         {/* Password */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Password</Text>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               ref={passwordRef}
//               style={[styles.textinput, { flex: 1, marginHorizontal: 0, borderWidth: 0 }]}
//               placeholder="Enter Your password"
//               secureTextEntry={secureText}
//               autoCapitalize="none"
//               value={password}
//               onChangeText={(text) => setPassword(text.replace(/^\s+/g, ""))}
//               placeholderTextColor="#4d6fa9"
//               returnKeyType="next"
//               onSubmitEditing={() => confirmPasswordRef.current.focus()}
//             />
//             <TouchableOpacity onPress={() => setSecureText(!secureText)}>
//               <Icon name={secureText ? "eye-off" : "eye"} size={20} color="#555" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Confirm Password */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Confirm Password</Text>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               ref={confirmPasswordRef}
//               style={[styles.textinput, { flex: 1, marginHorizontal: 0, borderWidth: 0 }]}
//               placeholder="Confirm Your Password"
//               secureTextEntry={secureConfirmText}
//               autoCapitalize="none"
//               value={confirmPassword}
//               onChangeText={(text) => setConfirmPassword(text.replace(/^\s+/g, ""))}
//               placeholderTextColor="#4d6fa9"
//               returnKeyType="done"
//               onSubmitEditing={handleSignup}
//             />
//             <TouchableOpacity onPress={() => setSecureConfirmText(!secureConfirmText)}>
//               <Icon name={secureConfirmText ? "eye-off" : "eye"} size={20} color="#555" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Birth Date */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Birth Date</Text>
//           <TouchableOpacity
//             style={[styles.textinput, { justifyContent: "center" }]}
//             onPress={() => setOpen(true)}
//             activeOpacity={0.7}
//           >
//             <Text style={{ color: date ? "black" : "#4d6fa9" }}>
//               {date ? moment(date).format("DD MMMM YYYY") : "Please Enter Your Birth Date"}
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Render DatePicker only when open */}
//         {open && (
//           <DatePicker
//             modal
//             mode="date"
//             open={open}
//             date={date || new Date()}
//             maximumDate={new Date()}
//             onConfirm={(selectedDate) => {
//               setOpen(false);
//               setDate(selectedDate);
//             }}
//             onCancel={() => setOpen(false)}
//           />
//         )}
//       </KeyboardAwareScrollView>

//       {/* Fixed bottom button */}
//       <View style={{ backgroundColor: "#4d6fa9", marginBottom: "13%" }}>
//         <Custombutton
//           style={{ borderRadius: 20 }}
//           title={"Signup"}
//           onPress={handleSignup}
//           disabled={loading}
//         />

//         <View style={{ alignItems: "center", marginTop: 10 }}>
//           <Text style={{ color: "white" }}>
//             Already have an account?{" "}
//             <Text
//               style={{ color: "white", textDecorationLine: "underline", fontWeight: "bold" }}
//               onPress={() => props.navigation.goBack("Login")}
//             >
//               Login
//             </Text>
//           </Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Signup;

// const styles = StyleSheet.create({
//   title: {
//     textAlign: "center",
//     marginBottom: 30,
//     color: "white",
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   container: {
//     marginVertical: 10,
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
//     color: "black",
//     backgroundColor: "white",
//   },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     marginHorizontal: 15,
//     backgroundColor: "white",
//     paddingRight: 10,
//   },
// });


// import React, { useState, useRef } from "react";
// import moment from "moment";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   SafeAreaView,
//   ScrollView,
//   Button,
// } from "react-native";
// import DatePicker from "react-native-date-picker";
// import Toast from "react-native-toast-message";
// import { useDispatch } from "react-redux";
// import { signup } from "../../slice/AuthSlice";
// import Icon from "react-native-vector-icons/Ionicons";
// import Custombutton from "../../components/Custombutton";



// const Signup = (props) => {
//   const dispatch = useDispatch();

//   // Form States
//   const [date, setDate] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [secureText, setSecureText] = useState(true);
//   const [secureConfirmText, setSecureConfirmText] = useState(true);
//   const [loading, setLoading] = useState(false);

//   // Refs
//   const lastNameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();

//   // Regex
//   // ✅ Stronger Email Regex (valid domains + common TLDs)
//   const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.(com|org|net|in|co|edu|gov|io)$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const handleSignup = async () => {
//     // ✅ Validation only when Signup is pressed
//     if (!firstName || !lastName || !email || !password || !confirmPassword || !date) {
//       return Toast.show({ type: "error", text1: "All fields are required" });
//     }

//     if (!emailRegex.test(email)) {
//       return Toast.show({ type: "error", text1: "Please enter a valid email (e.g., name@example.com)" });
//     }

//     if (!passwordRegex.test(password)) {
//       return Toast.show({
//         type: "error",
//         text1: "Password must have 8+ chars, uppercase, lowercase, number, and special char",
//       });
//     }

//     if (password !== confirmPassword) {
//       return Toast.show({ type: "error", text1: "Passwords do not match" });
//     }

//     try {
//       setLoading(true);
//       await dispatch(
//         signup({
//           firstName,
//           lastName,
//           email,
//           password,
//           confirmPassword,
//           date: date.toISOString(),
//         })
//       );
//       Toast.show({ type: "success", text1: "Account created 🎉" });
//       props.navigation.goBack(); // back to login
//     } catch (error) {
//       Toast.show({ type: "error", text1: "Signup failed. Try again!" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#4d6fa9" }}>
//       <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
//         {/* Back Button */}
//         <TouchableOpacity
//           style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
//           onPress={() => props.navigation.goBack()}
//           activeOpacity={0.7}
//         >
//           <Icon name="arrow-back" size={24} color="white" />
//         </TouchableOpacity>

//         <Text style={styles.title}>Create Account</Text>

//         {/* First Name */}
//         <View style={styles.container}>
//           <Text style={styles.label}>First Name</Text>
//           <TextInput
//             style={styles.textinput}
//             placeholder="Enter First Name"
//             value={firstName}
//             onChangeText={setFirstName}
//             placeholderTextColor="#4d6fa9"
//             returnKeyType="next"
//             onSubmitEditing={() => lastNameRef.current.focus()}
//             blurOnSubmit={false}
//           />
//         </View>

//         {/* Last Name */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Last Name</Text>
//           <TextInput
//             ref={lastNameRef}
//             style={styles.textinput}
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChangeText={setLastName}
//             placeholderTextColor="#4d6fa9"
//             returnKeyType="next"
//             onSubmitEditing={() => emailRef.current.focus()}
//             blurOnSubmit={false}
//           />
//         </View>

//         {/* Email */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             ref={emailRef}
//             style={styles.textinput}
//             placeholder="Enter Your Email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             value={email}
//             onChangeText={setEmail}
//             placeholderTextColor="#4d6fa9"
//             returnKeyType="next"
//             onSubmitEditing={() => passwordRef.current.focus()}
//             blurOnSubmit={false}
//           />
//         </View>

//         {/* Password */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Password</Text>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               ref={passwordRef}
//               style={[styles.textinput, { flex: 1, marginHorizontal: 0, borderWidth: 0 }]}
//               placeholder="Enter Your password"
//               secureTextEntry={secureText}
//               autoCapitalize="none"
//               value={password}
//               onChangeText={setPassword}
//               placeholderTextColor="#4d6fa9"
//               returnKeyType="next"
//               onSubmitEditing={() => confirmPasswordRef.current.focus()}
//               blurOnSubmit={false}
//             />
//             <TouchableOpacity onPress={() => setSecureText(!secureText)}>
//               <Icon name={secureText ? "eye-off" : "eye"} size={20} color="#555" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Confirm Password */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Confirm Password</Text>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               ref={confirmPasswordRef}
//               style={[styles.textinput, { flex: 1, marginHorizontal: 0, borderWidth: 0 }]}
//               placeholder="Confirm Your Password"
//               secureTextEntry={secureConfirmText}
//               autoCapitalize="none"
//               value={confirmPassword}
//               onChangeText={setConfirmPassword}
//               placeholderTextColor="#4d6fa9"
//               returnKeyType="done"
//               onSubmitEditing={handleSignup}
//             />
//             <TouchableOpacity onPress={() => setSecureConfirmText(!secureConfirmText)}>
//               <Icon name={secureConfirmText ? "eye-off" : "eye"} size={20} color="#555" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Birth Date */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Birth Date</Text>
//           <TouchableOpacity
//             style={[styles.textinput, { justifyContent: "center" }]}
//             onPress={() => setOpen(true)}
//             activeOpacity={0.7}
//           >
//             <Text style={{ color: date ? "black" : "#4d6fa9" }}>
//               {date
//                 ? moment(date).format("DD MMMM YYYY")
//                 : "Please Enter Your Birth Date"}
//             </Text>
//           </TouchableOpacity>
//         </View>

//         <DatePicker
//           modal
//           mode="date"
//           open={open}
//           date={date || new Date()}
//           maximumDate={new Date()}
//           onConfirm={(selectedDate) => {
//             setOpen(false);
//             setDate(selectedDate);
//           }}
//           onCancel={() => setOpen(false)}
//         />

//         {/* Signup Button */}
//         <Custombutton
//           style={{ marginTop: 20, borderRadius: 20 }}
//           title={"Signup"}
//           onPress={handleSignup}/>

//         <View style={{ alignItems: "center" }}>
//           <Text style={{ color: "white", marginTop: 8 }}>
//             Already have an account?{" "}
//             <Text
//               style={{
//                 color: "white",
//                 textDecorationLine: "underline",
//                 fontWeight: "bold",
//               }}
//               onPress={() => props.navigation.goBack("Login")}
//             >
//               Login
//             </Text>
//           </Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Signup;

// const styles = StyleSheet.create({
//   title: {
//     textAlign: "center",
//     marginBottom: 30,
//     color: "white",
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   container: {
//     marginVertical: 10,
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
//     color: "black",
//     backgroundColor: "white",
//   },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center", // ✅ keeps icon vertically centered
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     marginHorizontal: 15,
//     backgroundColor: "white",
//     paddingRight: 10,
//   },
// });


import React, { useState, useRef } from "react";
import moment from "moment";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import DatePicker from "react-native-date-picker";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { signup } from "../../slice/AuthSlice";
import Icon from "react-native-vector-icons/Ionicons";
import Custombutton from "../../components/Custombutton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Signup = (props) => {
  const dispatch = useDispatch();

  // Form States
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [secureConfirmText, setSecureConfirmText] = useState(true);
  const [loading, setLoading] = useState(false);

  // Refs
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // Regex
  const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.(com|org|net|in|co|edu|gov|io)$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSignup = async () => {
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    if (!trimmedFirstName || !trimmedLastName || !trimmedEmail || !trimmedPassword || !trimmedConfirmPassword || !date) {
      return Toast.show({ type: "error", text1: "All fields are required" });
    }

    if (!emailRegex.test(trimmedEmail)) {
      return Toast.show({ type: "error", text1: "Please enter a valid email" });
    }

    if (!passwordRegex.test(trimmedPassword)) {
      return Toast.show({
        type: "error",
        text1: "Password must have 8+ chars, uppercase, lowercase, number, and special char",
      });
    }

    if (trimmedPassword !== trimmedConfirmPassword) {
      return Toast.show({ type: "error", text1: "Password and confirm password must be same." });
    }

    try {
      setLoading(true);
      await dispatch(
        signup({
          firstName: trimmedFirstName,
          lastName: trimmedLastName,
          email: trimmedEmail,
          password: trimmedPassword,
          confirmPassword: trimmedConfirmPassword,
          date: date.toISOString(),
        })
      );
      Toast.show({ type: "success", text1: "Account created 🎉" });
      props.navigation.goBack();
    } catch (error) {
      Toast.show({ type: "error", text1: "Signup failed. Try again!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4d6fa9" }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ paddingVertical: 20, flexGrow: 1 }}
        enableOnAndroid
        extraScrollHeight={Platform.OS === "ios" ? 10 : 50}
        keyboardShouldPersistTaps="handled"
      >
        {/* Responsive Header */}
        <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15, marginVertical:15}}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            activeOpacity={0.7}
            style={{ padding: 5 }}
          >
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <Text style={{ 
            flex: 1,
            textAlign: "center",
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginRight: 35,
          }}>
            Create Account
          </Text>
        </View>

        {/* First Name */}
        <View style={styles.container}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text.replace(/^\s+/g, ""))}
            placeholderTextColor="#4d6fa9"
            returnKeyType="next"
            onSubmitEditing={() => lastNameRef.current.focus()}
          />
        </View>

        {/* Last Name */}
        <View style={styles.container}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            ref={lastNameRef}
            style={styles.textinput}
            placeholder="Enter Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text.replace(/^\s+/g, ""))}
            placeholderTextColor="#4d6fa9"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
        </View>

        {/* Email */}
        <View style={styles.container}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            ref={emailRef}
            style={styles.textinput}
            placeholder="Enter Your Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text.replace(/^\s+/g, ""))}
            placeholderTextColor="#4d6fa9"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
        </View>

        {/* Password */}
        <View style={styles.container}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              ref={passwordRef}
              style={[styles.textinput, { flex: 1, marginHorizontal: 0, borderWidth: 0 }]}
              placeholder="Enter Your password"
              secureTextEntry={secureText}
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text.replace(/^\s+/g, ""))}
              placeholderTextColor="#4d6fa9"
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <Icon name={secureText ? "eye-off" : "eye"} size={20} color="#555" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password */}
        <View style={styles.container}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              ref={confirmPasswordRef}
              style={[styles.textinput, { flex: 1, marginHorizontal: 0, borderWidth: 0 }]}
              placeholder="Confirm Your Password"
              secureTextEntry={secureConfirmText}
              autoCapitalize="none"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text.replace(/^\s+/g, ""))}
              placeholderTextColor="#4d6fa9"
              returnKeyType="done"
              onSubmitEditing={handleSignup}
            />
            <TouchableOpacity onPress={() => setSecureConfirmText(!secureConfirmText)}>
              <Icon name={secureConfirmText ? "eye-off" : "eye"} size={20} color="#555" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Birth Date */}
        <View style={styles.container}>
          <Text style={styles.label}>Birth Date</Text>
          <TouchableOpacity
            style={[styles.textinput, { justifyContent: "center" }]}
            onPress={() => setOpen(true)}
            activeOpacity={0.7}
          >
            <Text style={{ color: date ? "black" : "#4d6fa9" }}>
              {date ? moment(date).format("DD MMMM YYYY") : "Please Enter Your Birth Date"}
            </Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          mode="date"
          open={open}
          date={date || new Date()}
          maximumDate={new Date()}
          onConfirm={(selectedDate) => {
            setOpen(false);
            setDate(selectedDate);
          }}
          onCancel={() => setOpen(false)}
        />
      </KeyboardAwareScrollView>

      {/* Fixed bottom button */}
      <View style={{ backgroundColor: "#4d6fa9", marginBottom: "13%" }}>
        <Custombutton
          style={{ borderRadius: 20 }}
          title={"Signup"}
          onPress={handleSignup}
          disabled={loading}
        />

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ color: "white" }}>
            Already have an account?{" "}
            <Text
              style={{ color: "white", textDecorationLine: "underline", fontWeight: "bold" }}
              onPress={() => props.navigation.goBack("Login")}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginBottom: 30,
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    marginVertical: 10,
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
    color: "black",
    backgroundColor: "white",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginHorizontal: 15,
    backgroundColor: "white",
    paddingRight: 10,
  },
});