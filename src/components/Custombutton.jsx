import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";

const Custombutton = ({ onPress, title, style, textStyle }) => {
  const [blink, setBlink] = useState(false);

  const handlePress = () => {
    // Start blink
    setBlink(true);

    // Stop blink after 200ms
    setTimeout(() => setBlink(false), 150);

    // Call user onPress
    if (onPress) onPress();
  };

  return (
    <TouchableOpacity
      activeOpacity={1} // we control opacity manually
      onPress={handlePress}
      style={{ marginHorizontal: 20 }}
    >
      <LinearGradient
        colors={["#97ADD4", "#4677CB", "#3F6FBF"]}
        style={[
          styles.linearGradient,
          style,
          { opacity: blink ? 0.5 : 1 }, // blink effect
        ]}
      >
        <View style={styles.buttonContainer}>
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Custombutton;

const styles = StyleSheet.create({
  linearGradient: {
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
