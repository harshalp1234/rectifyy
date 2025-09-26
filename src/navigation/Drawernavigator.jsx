import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Order from '../screens/orders/Order';
import Wishlist from '../screens/wishlist/Wishlist';
import Chatsupport from '../screens/chatsupport/Chatsupport';
import Aboutus from '../screens/aboutus/Aboutus';
import Customdrawercontent from './Customdrawercontent';
import Icon from 'react-native-vector-icons/Ionicons'; // Example icon set
import Home from '../screens/home/Home';
import Document from '../screens/document/Document';


const Drawernavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{
      headerTitleAlign: 'center', headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
      drawerItemStyle: { paddingVertical: 9, paddingHorizontal: 16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#e0e0e0" },
      drawerLabelStyle: { fontSize: 16, fontWeight: "500", color: "#202124" }, drawerIconStyle: { marginRight: -20 }
    }}
      drawerContent={(props) => <Customdrawercontent{...props} />} >

      <Drawer.Screen name="Home" component={Home} options={{
        drawerIcon: ({ color, size }) => (
          <Icon name="home-outline" color={color} size={size} />
        ),
      }} />
      <Drawer.Screen name="Orders" component={Order} options={{
        drawerIcon: ({ color, size }) => (
          <Icon name="cart-outline" color={color} size={size} />
        ),
      }} />
      <Drawer.Screen name="Wishlist" component={Wishlist} options={{
        drawerIcon: ({ color, size }) => (
          <Icon name="heart-outline" color={color} size={size} />
        ),
      }} />
      <Drawer.Screen name="Chat support" component={Chatsupport} options={{
        drawerIcon: ({ color, size }) => (
          <Icon name="chatbubbles-outline" color={color} size={size} />
        ),
      }} />
      <Drawer.Screen name="About us" component={Aboutus} options={{
        drawerIcon: ({ color, size }) => (
          <Icon name="information-circle-outline" color={color} size={size} />
        ),
      }} />
      <Drawer.Screen name="Document" component={Document} options={{
        drawerIcon: ({ color, size }) => (
          <Icon name="document-text" color={color} size={size} />
        ),
      }} />
    </Drawer.Navigator>
  )
}
//
export default Drawernavigator

const styles = StyleSheet.create({})