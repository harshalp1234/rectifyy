import { StyleSheet, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="Home" component={Drawernavigator} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Location" component={Location} />
    </Tab.Navigator>
  );
};

export default Tabnavigator;

const styles = StyleSheet.create({
  tabBarLabel: {
    fontWeight: '600',
    fontSize: 11,
    marginBottom: Platform.OS === 'ios' ? -2 : 4,
  },
  tabBar: {
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
});


