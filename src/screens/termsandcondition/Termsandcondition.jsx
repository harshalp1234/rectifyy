import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const Termsandconditions = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: "https://www.pocketsergeant.co.uk/termsofuse" }} />
    </SafeAreaView>
  );
};

export default Termsandconditions;
