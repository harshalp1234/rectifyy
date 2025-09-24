import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/login/Login'
import Signup from '../screens/signup/Signup'
import Termsandconditions from '../screens/termsandcondition/Termsandcondition'
const Stack = createNativeStackNavigator()
const Authstack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false}} />
        <Stack.Screen name="Termsandconditions" component={Termsandconditions} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Authstack

const styles = StyleSheet.create({})