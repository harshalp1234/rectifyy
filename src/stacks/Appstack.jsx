import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { StackScreen } from 'react-native-screens'
import Signup from '../screens/signup/Signup'
import Logout from '../screens/logout/Logout'
import Drawernavigator from '../navigation/Drawernavigator'
import Editprofile from '../screens/editprofile/Editprofile'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Tabnavigator from '../navigation/Tabnavigator'

import { navigationRef } from '../service/navigationsevice'
const Stack = createNativeStackNavigator()

const Appstack = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name="Drawernavigator" component={Tabnavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Tabnavigator" component={Tabnavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false }} />
                <Stack.Screen name="Editprofile" component={Editprofile} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Appstack

const styles = StyleSheet.create({})