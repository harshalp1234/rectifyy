// import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
// import React, { useState } from "react";
// import DatePicker from "react-native-date-picker";
// import Toast from "react-native-toast-message";

// import { useDispatch } from "react-redux";
// import { signup } from "../../slice/AuthSlice";
// import { userdata } from "../../slice/AuthSlice";


// const Signup = () => {
//   const dispatch = useDispatch();
//   const [date, setDate] = useState(new Date());
//   const [open, setOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   // ✅ Regex rules
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const handleSignup = () => {
//     // Empty fields
//     if (!firstName || !lastName || !email || !password || !confirmPassword) {
//       return Toast.show({ type: "error", text1: "Please fill all fields" });
//     }

//     // Email validation
//     if (!emailRegex.test(email)) {
//       return Toast.show({
//         type: "error",
//         text1: "Please enter a valid email address",
//       });
//     }

//     // Password strength
//     if (!passwordRegex.test(password)) {
//       return Toast.show({
//         type: "error",
//         text1: "Password must include uppercase, lowercase, number & special char",
//       });
//     }

//     // Password match
//     if (password !== confirmPassword) {
//       return Toast.show({
//         type: "error",
//         text1: "Password and Confirm Password must match",
//       });
//     }

//     // dispatch(signup({ email, password }));
//     dispatch(signup({
//       firstName,
//       lastName,
//       email,
//       password,
//       confirmPassword,
//       date: date.toISOString(),
//     }));

//     Toast.show({ type: "success", text1: "Account created 🎉" });




//     // ✅ If all good
//     Toast.show({ type: "success", text1: "Account created successfully 🎉" });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Create Account</Text>

//       {/* Birthdate */}


//       {/* First Name */}
//       <Text style={styles.label}>First Name</Text>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter your first name"
//         placeholderTextColor="#4d6fa9"
//         value={firstName}
//         onChangeText={setFirstName}
//       />

//       {/* Last Name */}
//       <Text style={styles.label}>Last Name</Text>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter your last name"
//         placeholderTextColor="#4d6fa9"
//         value={lastName}
//         onChangeText={setLastName}
//       />

//       {/* Email */}
//       <Text style={styles.label}>Email</Text>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter your email"
//         placeholderTextColor="#4d6fa9"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         value={email}
//         onChangeText={setEmail}
//       />

//       {/* Password */}
//       <Text style={styles.label}>Password</Text>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter your password"
//         placeholderTextColor="#4d6fa9"
//         secureTextEntry
//         autoCapitalize="none"
//         value={password}
//         onChangeText={setPassword}
//       />

//       {/* Confirm Password */}
//       <Text style={styles.label}>Confirm Password</Text>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Confirm your password"
//         placeholderTextColor="#4d6fa9"
//         secureTextEntry
//         autoCapitalize="none"
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//       />
//       <Text style={styles.label}>Birth Date</Text>
//       <TouchableOpacity style={styles.dateInput} onPress={() => setOpen(true)}>
//         <Text style={styles.dateText}>{date.toDateString()}</Text>
//       </TouchableOpacity>

//       {/* Date Picker */}

//       <DatePicker
//         modal
//         mode="date"
//         open={open}
//         date={date}
//         maximumDate={new Date()}
//         onConfirm={(selectedDate) => {
//           setOpen(false);
//           setDate(selectedDate);
//         }}
//         onCancel={() => setOpen(false)}
//       />

//       {/* Signup Button */}
//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default Signup;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: "center",
//     backgroundColor: "#4d6fa9",
//     padding: 20,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "800",
//     color: "#2c3e50",
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: "600",
//     marginBottom: 6,
//     marginTop: 15,
//     color: "#fff",
//   },
//   dateInput: {
//     paddingVertical: 14,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderColor: "#dcdcdc",
//     borderRadius: 12,
//     backgroundColor: "#fff",
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   dateText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#dcdcdc",
//     borderRadius: 12,
//     padding: 14,
//     backgroundColor: "#fff",
//     fontSize: 16,
//     color: "#333",
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//   },
//   button: {
//     marginTop: 30,
//     backgroundColor: "#4d6fa9",
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "700",
//   },
// });




// import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
// import React, { useState } from "react";
// import DatePicker from "react-native-date-picker";
// import Toast from "react-native-toast-message";
// import { useDispatch } from "react-redux";
// import { signup } from "../../slice/AuthSlice";

// const Signup = () => {
//   const dispatch = useDispatch();
//   const [date, setDate] = useState(new Date());
//   const [open, setOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   // ✅ Regex rules
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const handleSignup = () => {
//     if (!firstName || !lastName || !email || !password || !confirmPassword) {
//       return Toast.show({ type: "error", text1: "Please fill all fields" });
//     }
//     if (!emailRegex.test(email)) {
//       return Toast.show({ type: "error", text1: "Please enter a valid email" });
//     }
//     if (!passwordRegex.test(password)) {
//       return Toast.show({
//         type: "error",
//         text1: "Password must include uppercase, lowercase, number & special char",
//       });
//     }
//     if (password !== confirmPassword) {
//       return Toast.show({ type: "error", text1: "Passwords do not match" });
//     }

//     dispatch(
//       signup({
//         firstName,
//         lastName,
//         email,
//         password,
//         confirmPassword,
//         date: date.toISOString(),
//       })
//     );

//     Toast.show({ type: "success", text1: "Account created 🎉" });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Create Account</Text>



//       {/* First Name */}
//       <Text style={styles.label}>First Name</Text>
//       <TextInput
//         style={styles.textinput}
//         placeholder="Enter your first name"
//         placeholderTextColor="#4d6fa9"
//         value={firstName}
//         onChangeText={setFirstName}
//       />

//       {/* Last Name */}
//       <Text style={styles.label}>Last Name</Text>
//       <TextInput
//         style={styles.textinput}
//         placeholder="Enter your last name"
//         placeholderTextColor="#4d6fa9"
//         value={lastName}
//         onChangeText={setLastName}
//       />


//       {/* Email */}
//       <Text style={styles.label}>Email</Text>
//       <TextInput
//         style={styles.textinput}
//         placeholder="Enter your email"
//         placeholderTextColor="#4d6fa9"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         value={email}
//         onChangeText={setEmail}
//       />

//       {/* Password */}
//       <Text style={styles.label}>Password</Text>
//       <TextInput
//         style={styles.textinput}
//         placeholder="Enter your password"
//         placeholderTextColor="#4d6fa9"
//         secureTextEntry
//         autoCapitalize="none"
//         value={password}
//         onChangeText={setPassword}
//       />

//       {/* Confirm Password */}
//       <Text style={styles.label}>Confirm Password</Text>
//       <TextInput
//         style={styles.textinput}
//         placeholder="Confirm your password"
//         placeholderTextColor="#4d6fa9"
//         secureTextEntry
//         autoCapitalize="none"
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//       />

//       {/* Birth Date */}
//       <Text style={styles.label}>Birth Date</Text>
//       <TouchableOpacity style={styles.textinput} onPress={() => setOpen(true)}>
//         <Text style={{ color: "#333" }}>{date.toDateString()}</Text>
//       </TouchableOpacity>

//       <DatePicker
//         modal
//         mode="date"
//         open={open}
//         date={date}
//         maximumDate={new Date()}
//         onConfirm={(selectedDate) => {
//           setOpen(false);
//           setDate(selectedDate);
//         }}
//         onCancel={() => setOpen(false)}
//       />

//       {/* Signup Button */}
//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default Signup;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: "center",
//     backgroundColor: "#4d6fa9",
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "700",
//     color: "#fff",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   label: {
//     marginBottom: 5,
//     fontWeight: "bold",
//     color: "white",
//     marginLeft: 5,
//   },
//   textinput: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 12,
//     color: "#4d6fa9aaa",
//     backgroundColor: "white",
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: "#2c3e50",
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "700",
//   },
// });

// import React, { useState } from "react";
// import moment from "moment";

// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
//   SafeAreaView,
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

//   // Regex
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const handleSignup = async () => {
//     if (!firstName || !lastName || !email || !password || !confirmPassword) {
//       return Toast.show({ type: "error", text1: "All fields are required" });
//     }
//     if (!emailRegex.test(email)) {
//       return Toast.show({ type: "error", text1: "Invalid email format" });
//     }
//     if (!passwordRegex.test(password)) {
//       return Toast.show({
//         type: "error",
//         text1:
//           "Password must have 8+ chars, uppercase, lowercase, number, and special char",
//       });
//     }
//     if (password !== confirmPassword) {
//       return Toast.show({ type: "error", text1: "Passwords do not match" });
//     }
//     props.navigation.goBack("Login");

//     try {
//       setLoading(true);
//       await dispatch(
//         signup({
//           firstName,
//           lastName,
//           email,
//           password,
//           confirmPassword,
//           date: moment(date).format("DD MMMM YYYY"),
//         })
//       );
//       Toast.show({ type: "success", text1: "Account created 🎉" });
//     } catch (error) {
//       Toast.show({ type: "error", text1: "Signup failed. Try again!" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Create Account</Text>

//       {/* First Name */}
//       <Text style={styles.label}>First Name</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textinput}
//           placeholder="Enter first name"
//           value={firstName}
//           onChangeText={setFirstName}
//           placeholderTextColor="#4d6fa9"
//         />
//       </View>

//       {/* Last Name */}
//       <Text style={styles.label}>Last Name</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textinput}
//           placeholder="Enter last name"
//           value={lastName}
//           onChangeText={setLastName}
//           placeholderTextColor="#4d6fa9"
//         />
//       </View>

//       {/* Email */}
//       <Text style={styles.label}>Email</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textinput}
//           placeholder="Enter email"
//           keyboardType="email-address"
//           autoCapitalize="none"
//           value={email}
//           onChangeText={setEmail}
//           placeholderTextColor="#4d6fa9"
//         />
//       </View>

//       {/* Password */}
//       <Text style={styles.label}>Password</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textinput}
//           placeholder="Enter password"
//           secureTextEntry={secureText}
//           autoCapitalize="none"
//           value={password}
//           onChangeText={setPassword}
//           placeholderTextColor="#4d6fa9"
//         />
//         <TouchableOpacity onPress={() => setSecureText(!secureText)}>
//           <Icon name={secureText ? "eye-off" : "eye"} size={20} color="#555" />
//         </TouchableOpacity>
//       </View>

//       {/* Confirm Password */}
//       <Text style={styles.label}>Confirm Password</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textinput}
//           placeholder="Confirm password"
//           secureTextEntry={secureConfirmText}
//           autoCapitalize="none"
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           placeholderTextColor="#4d6fa9"
//         />
//         <TouchableOpacity
//           onPress={() => setSecureConfirmText(!secureConfirmText)}
//         >
//           <Icon
//             name={secureConfirmText ? "eye-off" : "eye"}
//             size={20}
//             color="#555"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Birth Date */}
//       <Text style={styles.label}>Birth Date</Text>
//       <TouchableOpacity
//         style={styles.inputContainer}
//         onPress={() => setOpen(true)}
//         activeOpacity={0.7}
//       >
//         <Text style={{ color: date ? "#4d6fa9" : "#4d6fa9", fontSize: 16 }}>
//           {date
//             ? moment(date).format("DD MMMM YYYY")
//             : "Please enter your birthdate"}
//         </Text>
//       </TouchableOpacity>

//       <DatePicker
//         modal
//         mode="date"
//         open={open}
//         date={date || new Date()}
//         maximumDate={new Date()}
//         onConfirm={(selectedDate) => {
//           setOpen(false);
//           setDate(selectedDate);
//         }}
//         onCancel={() => setOpen(false)}
//       />

//       {/* Signup Button */}
//       <Custombutton
//         style={{ margin: 0, marginTop: 15 }}
//         title={loading ? "Creating..." : "Signup"}
//         onPress={handleSignup}
//         disabled={loading}
//       />
//       {loading && <ActivityIndicator size="small" color="#fff" />}
//     </SafeAreaView>
//   );
// };

// export default Signup;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#4d6fa9",
//     padding: 12,
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: 30,
//     color: "white",
//     fontSize: 35,
//   },
//   label: {
//     marginBottom: 5,
//     fontWeight: "bold",
//     color: "white",
//     marginLeft: 5,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#dcdcdc",
//     borderRadius: 8,
//     backgroundColor: "#fff",
//     marginBottom: 15,
//     paddingHorizontal: 12,
//     height: 50, // ✅ same height for all fields
//   },
//   textinput: {
//     flex: 1,
//     fontSize: 16,
//     color: "#4d6fa9",
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: "#ffffff",
//     paddingVertical: 15,
//     borderRadius: 12,
//     alignItems: "center",
//     elevation: 15,
//     borderWidth: 2,
//     borderColor: "#4d6fa9",
//   },
//   buttonText: {
//     color: "#4d6fa9",
//     fontSize: 18,
//     fontWeight: "700",
//   },
// });


// import React, { useState } from "react";
// import moment from "moment";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
//   SafeAreaView,
//   ScrollView,
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

//   // Regex
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const handleSignup = async () => {
//     if (!firstName || !lastName || !email || !password || !confirmPassword) {
//       return Toast.show({ type: "error", text1: "All fields are required" });
//     }
//     if (!emailRegex.test(email)) {
//       return Toast.show({ type: "error", text1: "Invalid email format" });
//     }
//     if (!passwordRegex.test(password)) {
//       return Toast.show({
//         type: "error",
//         text1:
//           "Password must have 8+ chars, uppercase, lowercase, number, and special char",
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
//           date: moment(date).format("DD MMMM YYYY"),
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
//           />
//         </View>

//         {/* Last Name */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Last Name</Text>
//           <TextInput
//             style={styles.textinput}
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChangeText={setLastName}
//             placeholderTextColor="#4d6fa9"
//           />
//         </View>

//         {/* Email */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             style={styles.textinput}
//             placeholder="Enter Your Email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             value={email}
//             onChangeText={setEmail}
//             placeholderTextColor="#4d6fa9"
//           />
//         </View>

//         {/* Password */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Password</Text>
//           <TextInput
//             style={styles.textinput}
//             placeholder="Enter Your password"
//             secureTextEntry={secureText}
//             autoCapitalize="none"
//             value={password}
//             onChangeText={setPassword}
//             placeholderTextColor="#4d6fa9"
//           />
//           <TouchableOpacity
//             onPress={() => setSecureText(!secureText)}
//             style={{ position: "absolute", right: 25, top: 35 }}
//           >
//             <Icon name={secureText ? "eye-off" : "eye"} size={20} color="#555" />
//           </TouchableOpacity>
//         </View>

//         {/* Confirm Password */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Confirm Password</Text>
//           <TextInput
//             style={styles.textinput}
//             placeholder="Confirm Your Password"
//             secureTextEntry={secureConfirmText}
//             autoCapitalize="none"
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//             placeholderTextColor="#4d6fa9"
//           />
//           <TouchableOpacity
//             onPress={() => setSecureConfirmText(!secureConfirmText)}
//             style={{ position: "absolute", right: 25, top: 35 }}
//           >
//             <Icon
//               name={secureConfirmText ? "eye-off" : "eye"}
//               size={20}
//               color="#555"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Birth Date */}
//         <View style={styles.container}>
//           <Text style={styles.label}>Birth Date</Text>
//           <TouchableOpacity
//             style={[styles.textinput, { justifyContent: "center" }]}
//             onPress={() => setOpen(true)}
//             activeOpacity={0.7}
//           >
//             <Text style={{ color: date ? "#4d6fa9" : "#4d6fa9" }}>
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
//           title={loading ? "Creating..." : "Signup"}
//           onPress={handleSignup}
//           disabled={loading}
//         />
//         {loading && (
//           <ActivityIndicator
//             size="small"
//             color="#fff"
//             style={{ marginTop: 10 }}
//           />
//         )}
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
//     padding:10,
//     marginHorizontal: 15,
//     color: "black",   // 👈 change here
//     backgroundColor: "white",
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
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";
import DatePicker from "react-native-date-picker";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { signup } from "../../slice/AuthSlice";
import Icon from "react-native-vector-icons/Ionicons";
import Custombutton from "../../components/Custombutton";

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

  // Refs for input navigation
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return Toast.show({ type: "error", text1: "All fields are required" });
    }
    if (!emailRegex.test(email)) {
      return Toast.show({ type: "error", text1: "Invalid email format" });
    }
    if (!passwordRegex.test(password)) {
      return Toast.show({
        type: "error",
        text1:
          "Password must have 8+ chars, uppercase, lowercase, number, and special char",
      });
    }
    if (password !== confirmPassword) {
      return Toast.show({ type: "error", text1: "Passwords do not match" });
    }

    try {
      setLoading(true);
      await dispatch(
        signup({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          date:date.toISOString(),
        })
      );
      Toast.show({ type: "success", text1: "Account created 🎉" });
      props.navigation.goBack(); // back to login
    } catch (error) {
      Toast.show({ type: "error", text1: "Signup failed. Try again!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4d6fa9" }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        {/* Back Button */}
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center",marginLeft:10 }}
          onPress={() => props.navigation.goBack()}
          activeOpacity={0.7}
        >
          <Icon name="arrow-back" size={24} color="white" />
        
        </TouchableOpacity>

        <Text style={styles.title}>Create Account</Text>

        {/* First Name */}
        <View style={styles.container}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholderTextColor="#4d6fa9"
            returnKeyType="next"
            onSubmitEditing={() => lastNameRef.current.focus()}
            blurOnSubmit={false}
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
            onChangeText={setLastName}
            placeholderTextColor="#4d6fa9"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            blurOnSubmit={false}
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
            onChangeText={setEmail}
            placeholderTextColor="#4d6fa9"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            blurOnSubmit={false}
          />
        </View>

        {/* Password */}
        <View style={styles.container}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            ref={passwordRef}
            style={styles.textinput}
            placeholder="Enter Your password"
            secureTextEntry={secureText}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#4d6fa9"
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            blurOnSubmit={false}
          />
          <TouchableOpacity
            onPress={() => setSecureText(!secureText)}
            style={{ position: "absolute", right: 25, top: 31 }}
          >
            <Icon name={secureText ? "eye-off" : "eye"} size={20} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <View style={styles.container}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            ref={confirmPasswordRef}
            style={styles.textinput}
            placeholder="Confirm Your Password"
            secureTextEntry={secureConfirmText}
            autoCapitalize="none"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor="#4d6fa9"
            returnKeyType="done"
            onSubmitEditing={handleSignup}
          />
          <TouchableOpacity
            onPress={() => setSecureConfirmText(!secureConfirmText)}
            style={{ position: "absolute", right: 25, top: 31 }}
          >
            <Icon
              name={secureConfirmText ? "eye-off" : "eye"}
              size={20}
              color="#555"
            />
          </TouchableOpacity>
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
              {date
                ? moment(date).format("DD MMMM YYYY")
                : "Please Enter Your Birth Date"}
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

        {/* Signup Button */}
        <Custombutton
          style={{ marginTop: 20, borderRadius: 20 }}
          title={ "Signup"}
          onPress={handleSignup}
          disabled={loading}
        />
        
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", marginTop: 8 }}>
            Already have an account? {" "}
            <Text
              style={{ color: "white", textDecorationLine: "underline", fontWeight: "bold" }}
              onPress={() => props.navigation.goBack("Login")}
            >
              Login
            </Text>
          </Text>

        </View>
      </ScrollView>
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
});
