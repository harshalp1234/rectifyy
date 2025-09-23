import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Customtoast() {
  const [message, setMessage] = useState('');

  global.Toast = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 1000);
  };

  if (!message) return null;
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    bottom: "90%",
    left: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    zIndex: 9999,

  },
  text: { color: 'black' },
});