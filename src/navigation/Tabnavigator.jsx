// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Home from '../screens/home/Home'
// import History from '../screens/history/History'
// import Location from '../screens/location/Location'

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from "react-native-vector-icons/Ionicons";
// import Drawernavigator from './Drawernavigator'
// import { NavigationContainer } from '@react-navigation/native'

// const Tabnavigator = () => {
//     const Tab = createBottomTabNavigator();
//     return (
   
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ color, size }) => {
//                         let iconName;
//                         if (route.name === "Home") {
//                             iconName = "home-outline";
//                         } else if (route.name === "Location") {
//                             iconName = "search-outline";
//                         } else if (route.name === "History") {
//                             iconName = "time-outline";
//                         }
//                         return <Icon name={iconName} size={size} color={color} />;
//                     },
//                     tabBarActiveTintColor: "#4d6fa9",  // Active color
//                     tabBarInactiveTintColor: "gray",
//                        // Inactive color
//                     headerShown: false,
//                     tabBarLabelStyle: { 
//                         fontWeight: "bold",   // 👈 This makes label bold
//                         fontSize: 15,          // (optional) adjust size if needed
                     

//                     },
//                 })}
//             >

//                 <Tab.Screen name="Home" component={Drawernavigator} />
//                 <Tab.Screen name="History" component={History} />
//                 <Tab.Screen name="Location" component={Location} />
//             </Tab.Navigator>
      
//     )
// }

// export default Tabnavigator

// const styles = StyleSheet.create({})




import { StyleSheet, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import History from '../screens/history/History';
import Location from '../screens/location/Location';
import Icon from 'react-native-vector-icons/Ionicons';
import Drawernavigator from './Drawernavigator';

const Tab = createBottomTabNavigator();

const Tabnavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Location') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'time' : 'time-outline';
          }

          return <Icon name={iconName} size={24} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: Platform.OS === 'ios' ? '#007aff' : '#4d6fa9',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarLabelStyle: {
          fontWeight: '600',
          fontSize: 11,
          marginBottom: Platform.OS === 'ios' ? -2 : 4, // balanced for both
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          height: Platform.OS === 'ios' ? 80 : 65,
          borderTopWidth: 0.5,
          borderTopColor: '#e0e0e0',
          elevation: 5, // shadow for Android
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.08,
          shadowRadius: 3,
        },
      })}
    >
      <Tab.Screen name="Home" component={Drawernavigator} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Location" component={Location} />
    </Tab.Navigator>
  );
};

export default Tabnavigator;

const styles = StyleSheet.create({});


