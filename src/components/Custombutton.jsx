
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const Custombutton = ({ onPress, title, style, textStyle }) => {
  return (
    <LinearGradient
      colors={["#97ADD4", "#4677CB", "#3F6FBF"]}
     
      style={[styles.linearGradient, style]}
    >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.buttonContainer}
      >
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Custombutton;

const styles = StyleSheet.create({
  linearGradient: {
    marginHorizontal: 20,
    borderRadius: 13,
    shadowRadius: 3,
 
  },
  buttonContainer: {
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

