import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/login/Login'
import Editprofile from '../screens/editprofile/Editprofile'
import Document from '../screens/document/Document'
import Location from '../screens/location/Location'
import Signup from '../screens/signup/Signup'
import Logout from '../screens/logout/Logout'


const Stack = createNativeStackNavigator();
const Appnavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Location" component={Location}/>
        <Stack.Screen name="Document" component={Document} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Appnavigator

const styles = StyleSheet.create({})
