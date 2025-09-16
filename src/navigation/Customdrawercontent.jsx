// // import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// // import React, { useState, useContext } from 'react';
// // import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// // import ConfirmModal from '../components/Confirmmodal';
// // import { AuthContext } from '../context/Authcontext';
// // import { Image } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import { useSafeAreaInsets } from 'react-native-safe-area-context';


// // const Customdrawercontent = (props) => {
// //     const insets = useSafeAreaInsets()
// //     const [modalVisible, setModalVisible] = useState(false);
// //     const { logout } = useContext(AuthContext); // Get logout function from AuthContext

// //     const handleLogout = async () => {
// //         setModalVisible(false);
// //         try {
// //             await logout(); // Call context logout (handles AsyncStorage too)
// //             // props.navigation.replace("Login");
// //         } catch (error) {
// //             console.log("Error during logout:", error);
// //         }
// //     };

// //     return (
// //         // ----
// //         <SafeAreaView style={{ flex: 1, paddingTop: insets.top, }}  >
// //             {/* ---- */}
// //             <TouchableOpacity onPress={() => {
// //                 props.navigation.navigate("Editprofile"); // 👈 navigate to your EditProfile screenððððð
// //             }}>
// //                 <View style={{ flex: 1, flexDirection: "row", padding: 22, alignItems: 'center', gap: 12 }}>
// //                     <Image style={{ height: 60, width: 60, borderRadius: 30 }} source={require("../assets/images/person.jpeg")} />
// //                     <Text style={{ fontWeight: "bold", fontSize: 25 }}>John Lennon</Text>
// //                 </View>
// //             </TouchableOpacity>
// //         <View style={{flex:1,paddingTop:3}}>


// //             {/* Scrollable Drawer Items */}
// //             <DrawerContentScrollView {...props} contentContainerStyle={{
// //                 paddingTop: 20, 
// //                 // padding: 10
// //                 // adjust as needed
// //             }} >
// //                 <DrawerItemList {...props} />
// //             </DrawerContentScrollView>
// //             </View>

// //             {/* Logout Button */}
// //             <View style={{ paddingHorizontal: 10, paddingVertical: 16 }}>
// //                 <TouchableOpacity
// //                     style={styles.logoutButton}
// //                     onPress={() => setModalVisible(true)}
// //                 >
// //                     <Text style={styles.logoutText}>Logout</Text>
// //                 </TouchableOpacity>

// //                 {/* Confirmation Modal */}
// //                 <ConfirmModal
// //                     visible={modalVisible}
// //                     message="Are you sure you want to logout?"
// //                     onConfirm={handleLogout}
// //                     onCancel={() => setModalVisible(false)}
// //                 />
// //             </View>
// //         </SafeAreaView>
// //     );
// // };

// // export default Customdrawercontent;

// // const styles = StyleSheet.create({
// //     logoutButton: {
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         backgroundColor: '#4d6fa9',
// //         paddingVertical: 10,
// //         paddingHorizontal: 10,
// //         borderRadius: 20,
// //     },
// //     logoutText: {
// //         color: 'white',
// //         fontSize: 16,
// //         fontWeight: 'bold',
// //     },
// // });

// import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
// import React, { useState, useContext } from 'react';
// import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import ConfirmModal from '../components/Confirmmodal';
// import { AuthContext } from '../context/Authcontext';
// import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

// const Customdrawercontent = (props) => {
//   const insets = useSafeAreaInsets();
//   const [modalVisible, setModalVisible] = useState(false);
//   const { logout } = useContext(AuthContext); // Get logout function from AuthContext

//   const handleLogout = async () => {
//     setModalVisible(false);
//     try {
//       await logout(); // Call context logout (handles AsyncStorage too)
//       // props.navigation.replace("Login");
//     } catch (error) {
//       console.log("Error during logout:", error);
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
      
//       {/* Profile Header */}
//       <TouchableOpacity
//         onPress={() => props.navigation.navigate("Editprofile")}
//         style={styles.profileContainer}
//       >
//         <Image
//           style={styles.profileImage}
//           source={require("../assets/images/person.jpeg")}
//         />
//         <View style={styles.profileTextContainer}>
//           <Text style={styles.profileName}>John Lennon</Text>
//           <Text style={styles.profileEmail}>john.lennon@example.com</Text>
//         </View>
//       </TouchableOpacity>

//       {/* Drawer Items */}
//       <View style={{ flex: 1, paddingTop: 10 }}>
//         <DrawerContentScrollView
//           {...props}
//           contentContainerStyle={{ paddingTop: 0 }}
//         >
//           <DrawerItemList {...props} />
//         </DrawerContentScrollView>
//       </View>

//       {/* Logout Button */}
//       <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
//         <TouchableOpacity
//           style={styles.logoutButton}
//           onPress={() => setModalVisible(true)}
//         >
//           <Text style={styles.logoutText}>Logout</Text>
//         </TouchableOpacity>

//         {/* Confirmation Modal */}
//         <ConfirmModal
//           visible={modalVisible}
//           message="Are you sure you want to logout?"
//           onConfirm={handleLogout}
//           onCancel={() => setModalVisible(false)}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Customdrawercontent;

// const styles = StyleSheet.create({
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f5f6fa",  // light background
//     padding: 16,
//     borderRadius: 12,
//     marginHorizontal: 12,
//     marginTop: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 3,
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: "#4d6fa9",
//   },
//   profileTextContainer: {
//     marginLeft: 12,
//     flex: 1,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#333",
//   },
//   profileEmail: {
//     fontSize: 14,
//     color: "#666",
//     marginTop: 2,
//   },
//   logoutButton: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: '#4d6fa9',
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   logoutText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });



import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import ConfirmModal from "../components/Confirmmodal"; // your modal
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slice/AuthSlice";

const Customdrawercontent = (props) => {
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    setModalVisible(false);
    dispatch(logout());
    props.navigation.replace("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
      {/* Profile Header */}
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Editprofile")}
        style={styles.profileContainer}
      >
        <Image
          style={styles.profileImage}
          // source={require("../assets/images/person.jpeg")}
          source={{uri:user.profilePic}}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{user?.firstName || "Guest"}{" "}{user?.lastName}</Text>
          <Text style={styles.profileEmail}>{user?.email || "guest@example.com"}</Text>
        </View>
      </TouchableOpacity>

      {/* Drawer Items */}
      <View style={{ flex: 1, paddingTop: 10 }}>
        <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>

      {/* Logout Button */}
      <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* Confirmation Modal */}
        <ConfirmModal
          visible={modalVisible}
          message="Are you sure you want to logout?"
          onConfirm={handleLogout}
          onCancel={() => setModalVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Customdrawercontent;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f6fa",
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 12,
    marginTop: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#4d6fa9",
  },
  profileTextContainer: { marginLeft: 12, flex: 1 },
  profileName: { fontSize: 18, fontWeight: "600", color: "#333" },
  profileEmail: { fontSize: 14, color: "#666", marginTop: 2 },
  logoutButton: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#4d6fa9",
    paddingVertical: 10,
    borderRadius: 20,
  },
  logoutText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
