import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import React from 'react';

const Customloader = ({ size = 'large', color = 'blue', label }) => {
    return (
        <View style={styles.overlay}>
            <ActivityIndicator size={size} color={color} />
            {label && <Text style={styles.text}>{label}</Text>}
        </View>
    );
};

export default Customloader;

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
    text: {
        marginTop: 10,
        fontSize: 14,
        color: '#333',
    },
});
