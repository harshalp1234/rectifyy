import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import Custombutton from "../../components/Custombutton";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slice/AuthSlice";
import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = (props) => {
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const buttonPress = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password;

    if (!trimmedEmail)
      return Toast.show({ type: "error", text1: "Enter Email" });
    if (!emailRegex.test(trimmedEmail))
      return Toast.show({ type: "error", text1: "Please enter a valid email" });
    if (!trimmedPassword)
      return Toast.show({ type: "error", text1: "Enter Password" });
    if (!passwordRegex.test(trimmedPassword))
      return Toast.show({ type: "error", text1: "Invalid email or password" });

    if (!user) {
      return Toast.show({
        type: "error",
        text1: "No account found. Please sign up.",
      });
    }

    if (trimmedEmail === user.email && trimmedPassword === user.password) {
      dispatch(login());
      Toast.show({ type: "success", text1: "Welcome back 👋" });
    } else {
      Toast.show({ type: "error", text1: "Invalid email or password" });
    }
  };

  const handleSignup = () => props.navigation.navigate("Signup");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4d6fa9" }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraScrollHeight={Platform.OS === "ios" ? 20 : 50} // pushes content above keyboard
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1 }}>
          {/* Logo */}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image style={styles.image} source={require("../login/logo.png")} />
          </View>

          {/* Title */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              WELCOME TO PS PRO
            </Text>
          </View>

          {/* Email Input */}
          <View style={[styles.container]}>
            <Text style={styles.label}>Enter Email</Text>
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor="#4d6fa9"
              style={styles.textinput}
              onChangeText={(text) => setEmail(text.replace(/^\s+/g, ""))}
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
            <View style={styles.inputWrapper}>
              <TextInput
                ref={passwordRef}
                secureTextEntry={!showPassword}
                placeholder="Enter Your Password"
                placeholderTextColor="#4d6fa9"
                style={[
                  styles.textinput,
                  { flex: 1, marginHorizontal: 0, borderWidth: 0 },
                ]}
                onChangeText={(text) => setPassword(text.replace(/^\s+/g, ""))}
                value={password}
              />

              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? "eye" : "eye-off"}
                  size={22}
                  color="#555"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Fixed bottom part */}
        <View style={styles.bottomSection}>
          <Custombutton
            style={{ borderRadius: 20 }}
            title="Login"
            onPress={buttonPress}
          />

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
      </KeyboardAwareScrollView>
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
  bottomSection: {
    justifyContent: "flex-end",
    marginBottom: "13%",
  },
});
