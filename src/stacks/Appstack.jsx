import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Logout from '../screens/logout/Logout'
import Editprofile from '../screens/editprofile/Editprofile'
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