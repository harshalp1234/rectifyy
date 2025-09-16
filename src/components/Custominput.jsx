import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Custominput = ({ onChangeText,label,placeholder,secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput secureTextEntry={!secureTextEntry} placeholder={placeholder} placeholderTextColor="#4d6fa9" style={styles.textinput} onChangeText={(text) => { onChangeText(text) }} />
        </View>
    )
}

export default Custominput

const styles = StyleSheet.create({
    textinput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginHorizontal:15,
        color:"#4d6fa9aaa",
        backgroundColor:"white",
    
        

    }, container: { marginVertical: 10 }, label: {
        marginBottom: 5,
        fontWeight: 'bold',
        color:"white",
        marginLeft:17

    }
})


