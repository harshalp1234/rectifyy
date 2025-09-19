// import React, { useState, useRef, useMemo, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   PermissionsAndroid,
//   Platform,
//   Alert,
//   Linking,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
// import {
//   BottomSheetModal,
//   BottomSheetModalProvider,
//   BottomSheetView,
// } from "@gorhom/bottom-sheet";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useSelector, useDispatch } from "react-redux";
// import { updateName, updateDate, updateProfilePic } from "../../slice/AuthSlice";
// import DatePicker from "react-native-date-picker";
// import moment from "moment";

// export default function Editprofile({ navigation }) {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);

//   const [selectedImage, setSelectedImage] = useState(user?.profilePic || null);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState(new Date()); // keep as Date object
//   const [open, setOpen] = useState(false);

//   // ✅ Pre-fill values from Redux
//   useEffect(() => {
//     if (user) {
//       setFirstName(user.firstName || "");
//       setLastName(user.lastName || "");
//       setEmail(user.email || "");
//       if (user.date) {
//         setDate(new Date(user.date)); // store Date object, not formatted string
//       }
//     }
//   }, [user]);

//   // ✅ Save updated name to Redux
//   const handleSave = () => {
//     dispatch(updateName({ firstName, lastName }));

//     if (date) {
//       dispatch(updateDate({ date: date.toISOString() })); // ✅ always ISO string in redux
//     }
//   };

//   const bottomSheetModalRef = useRef(null);
//   const snapPoints = useMemo(() => ["35%"], []);
//   const openSheet = () => bottomSheetModalRef.current?.present();
//   const closeSheet = () => bottomSheetModalRef.current?.dismiss();

//   // ✅ Camera Permission
//   const requestCameraPermission = async () => {
//     if (Platform.OS === "ios") return true;
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;

//     if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//       Alert.alert("Permission denied permanently", "Enable camera permission from settings", [
//         { text: "Cancel", style: "cancel" },
//         { text: "Open Settings", onPress: () => Linking.openSettings() },
//       ]);
//     }
//     return false;
//   };

//   // ✅ Gallery Permission
//   const requestGalleryPermission = async () => {
//     if (Platform.OS === "ios") return true;
//     const permission =
//       Platform.Version >= 33
//         ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
//         : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

//     const granted = await PermissionsAndroid.request(permission);
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;

//     if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//       Alert.alert("Permission denied permanently", "Enable gallery permission from settings", [
//         { text: "Cancel", style: "cancel" },
//         { text: "Open Settings", onPress: () => Linking.openSettings() },
//       ]);
//     }
//     return false;
//   };

//   // ✅ Open Camera
//   const handlecamera = async () => {
//     const allowed = await requestCameraPermission();
//     if (!allowed) return;

//     launchCamera(
//       { mediaType: "photo", maxHeight: 2000, maxWidth: 2000 },
//       (response) => {
//         if (response.didCancel || response.errorCode) return;
//         let imageUri = response.assets?.[0]?.uri;
//         setSelectedImage(imageUri);
//         dispatch(updateProfilePic({ profilePic: imageUri }));
//         closeSheet();
//       }
//     );
//   };

//   // ✅ Open Gallery
//   const handlegallery = async () => {
//     const allowed = await requestGalleryPermission();
//     if (!allowed) return;

//     launchImageLibrary(
//       { mediaType: "photo", maxHeight: 2000, maxWidth: 2000 },
//       (response) => {
//         if (response.didCancel || response.errorCode) return;
//         let imageUri = response.assets?.[0]?.uri;
//         setSelectedImage(imageUri);
//         dispatch(updateProfilePic({ profilePic: imageUri }));
//         closeSheet();
//       }
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
//       <BottomSheetModalProvider>
//         {/* ✅ Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Icon name="arrow-left" size={28} color="#000" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Edit Profile</Text>
//           <View style={{ width: 28 }} />
//         </View>

//         {/* ✅ Profile Section */}
//         <View style={styles.container}>
//           <View style={styles.imageContainer}>
//             <Image
//               source={
//                 selectedImage
//                   ? { uri: selectedImage }
//                   : require("../../assets/images/user.png")
//               }
//               style={styles.profileImage}
//             />

//             {/* Pencil Icon */}
//             <TouchableOpacity style={styles.editButton} onPress={openSheet}>
//               <Icon name="pencil" size={20} color="#fff" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* ✅ User Info Section */}
//         <View style={{ padding: 20 }}>
//           <TextInput
//             style={styles.input}
//             placeholder="First Name"
//             value={firstName}
//             onChangeText={setFirstName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Last Name"
//             value={lastName}
//             onChangeText={setLastName}
//           />
//           <TextInput
//             style={[styles.input, styles.disabledInput]}
//             placeholder="Email"
//             value={email}
//             editable={false}
//           />

//           {/* Date Picker */}
//           <TouchableOpacity
//             style={styles.input}
//             onPress={() => setOpen(true)}
//             activeOpacity={0.7}
//           >
//             <Text style={{ color: date ? "#000" : "#888" }}>
//               {date ? moment(date).format("DD MMMM YYYY") : "Please select your birthdate"}
//             </Text>
//           </TouchableOpacity>

//           <DatePicker
//             modal
//             mode="date"
//             open={open}
//             date={date}
//             maximumDate={new Date()}
//             onConfirm={(selectedDate) => {
//               setOpen(false);
//               setDate(selectedDate); // keep Date object
//             }}
//             onCancel={() => setOpen(false)}
//           />
//         </View>

//         <View style={{ flex: 1, alignItems: "center" }}>
//           <TouchableOpacity
//             style={{
//               paddingVertical: 10,
//               paddingHorizontal: 135,
//               backgroundColor: "#4d6fa9",
//               borderRadius: 10,
//               justifyContent: "center",
//               alignItems: "center",
//               position: "absolute",
//               bottom: 20,
//             }}
//             onPress={handleSave}
//           >
//             <Text style={{ color: "white" }}>Save Changes</Text>
//           </TouchableOpacity>
//         </View>

//         {/* ✅ Bottom Sheet */}
//         <BottomSheetModal
//           ref={bottomSheetModalRef}
//           index={0}
//           snapPoints={snapPoints}
//           enablePanDownToClose
//           backdropComponent={({ style }) => (
//             <View style={[style, { backgroundColor: "rgba(0,0,0,0.4)" }]} />
//           )}
//         >
//           <BottomSheetView style={styles.sheetContent}>
//             <Text style={styles.sheetTitle}>Choose Option</Text>

//             <TouchableOpacity style={styles.sheetButton} onPress={handlecamera}>
//               <Text style={styles.sheetButtonText}>📷 Open Camera</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.sheetButton} onPress={handlegallery}>
//               <Text style={styles.sheetButtonText}>🖼️ Open Gallery</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.sheetButton, styles.cancelButton]}
//               onPress={closeSheet}
//             >
//               <Text style={styles.cancelButtonText}>Cancel</Text>
//             </TouchableOpacity>
//           </BottomSheetView>
//         </BottomSheetModal>
//       </BottomSheetModalProvider>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 14,
//     backgroundColor: "#fff",
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//     justifyContent: "space-between",
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#000",
//   },
//   container: {
//     alignItems: "center",
//     marginTop: 20,
//   },
//   imageContainer: {
//     position: "relative",
//   },
//   profileImage: {
//     width: 140,
//     height: 140,
//     borderRadius: 70,
//     borderWidth: 3,
//     borderColor: "#4a90e2",
//   },
//   editButton: {
//     position: "absolute",
//     bottom: 8,
//     right: 8,
//     backgroundColor: "#4a90e2",
//     borderRadius: 20,
//     padding: 8,
//     elevation: 3,
//   },
//   sheetContent: {
//     padding: 20,
//   },
//   sheetTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     textAlign: "center",
//     marginBottom: 16,
//   },
//   sheetButton: {
//     paddingVertical: 14,
//     borderRadius: 10,
//     backgroundColor: "#f2f2f2",
//     marginVertical: 6,
//     alignItems: "center",
//   },
//   sheetButtonText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   cancelButton: {
//     backgroundColor: "#4d6fa9",
//   },
//   cancelButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 12,
//     marginVertical: 8,
//     borderRadius: 8,
//     fontSize: 16,
//     backgroundColor: "#fff",
//   },
//   disabledInput: {
//     backgroundColor: "#f2f2f2",
//     color: "#999",
//   },
// });






// import React from 'react';
// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Platform, Alert ,Linking} from 'react-native';
// import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// const Editprofile = () => {

//   const debugPermissions = async () => {
//     if (Platform.OS !== 'ios') {
//       console.log('⚠️ This debug is only for iOS.');
//       return;
//     }

//     // --- CAMERA ---
//     const cameraStatus = await check(PERMISSIONS.IOS.CAMERA);
//     console.log('📷 Camera status before request:', cameraStatus);

//     if (cameraStatus === RESULTS.DENIED) {
//       const newStatus = await request(PERMISSIONS.IOS.CAMERA);
//       console.log('📷 Camera status after request:', newStatus);
//       if (newStatus === RESULTS.BLOCKED) {
//         Alert.alert(
//           'Camera Permission',
//           'You need to enable camera access in settings.',
//           [
//             { text: 'Cancel', style: 'cancel' },
//             { text: 'Open Settings', onPress: () => Linking.openSettings() },
//           ]
//         );
//       }
//     } else if (cameraStatus === RESULTS.BLOCKED) {
//       Alert.alert(
//         'Camera Permission',
//         'You need to enable camera access in settings.',
//         [
//           { text: 'Cancel', style: 'cancel' },
//           { text: 'Open Settings', onPress: () => Linking.openSettings() },
//         ]
//       );
//     }

//     // --- PHOTO LIBRARY ---
//     const photoStatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
//     console.log('🖼️ Photo Library status before request:', photoStatus);

//     if (photoStatus === RESULTS.DENIED) {
//       const newStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
//       console.log('🖼️ Photo Library status after request:', newStatus);
//       if (newStatus === RESULTS.BLOCKED) {
//         Alert.alert(
//           'Photo Library Permission',
//           'You need to enable photo library access in settings.',
//           [
//             { text: 'Cancel', style: 'cancel' },
//             { text: 'Open Settings', onPress: () => Linking.openSettings() },
//           ]
//         );
//       }
//     } else if (photoStatus === RESULTS.BLOCKED) {
//       Alert.alert(
//         'Photo Library Permission',
//         'You need to enable photo library access in settings.',
//         [
//           { text: 'Cancel', style: 'cancel' },
//           { text: 'Open Settings', onPress: () => Linking.openSettings() },
//         ]
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>Editprofile</Text>

//       <TouchableOpacity style={styles.button} onPress={debugPermissions}>
//         <Text style={styles.buttonText}>Check Permissions</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default Editprofile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });


import React, { useState, useRef, useMemo, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
  Linking,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateDate, updateProfilePic } from "../../slice/AuthSlice";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";

export default function Editprofile({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [selectedImage, setSelectedImage] = useState(user?.profilePic || null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
      if (user.date) {
        setDate(new Date(user.date));
      }
    }
  }, [user]);

  const handleSave = () => {
    dispatch(updateName({ firstName, lastName }));
    if (date) {
      dispatch(updateDate({ date: date.toISOString() }));
    }
  };

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["35%"], []);
  const openSheet = () => bottomSheetModalRef.current?.present();
  const closeSheet = () => bottomSheetModalRef.current?.dismiss();

  // ✅ Camera Permission (iOS + Android)
  const requestCameraPermission = async () => {
    if (Platform.OS === "ios") {
      const status = await check(PERMISSIONS.IOS.CAMERA);
      if (status === RESULTS.DENIED) {
        const newStatus = await request(PERMISSIONS.IOS.CAMERA);
        if (newStatus === RESULTS.BLOCKED) {
          Alert.alert(
            "Camera Permission",
            "You need to enable camera access in settings.",
            [
              { text: "Cancel", style: "cancel" },
              { text: "Open Settings", onPress: () => Linking.openSettings() },
            ]
          );
          return false;
        }
        return newStatus === RESULTS.GRANTED;
      }
      if (status === RESULTS.BLOCKED) {
        Alert.alert(
          "Camera Permission",
          "You need to enable camera access in settings.",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Open Settings", onPress: () => Linking.openSettings() },
          ]
        );
        return false;
      }
      return status === RESULTS.GRANTED;
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
      if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
          "Permission denied permanently",
          "Enable camera permission from settings",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Open Settings", onPress: () => Linking.openSettings() },
          ]
        );
      }
      return false;
    }
  };

  // ✅ Gallery / Photo Library Permission (iOS + Android)
  const requestGalleryPermission = async () => {
    if (Platform.OS === "ios") {
      const status = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (status === RESULTS.DENIED) {
        const newStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        if (newStatus === RESULTS.BLOCKED) {
          Alert.alert(
            "Photo Library Permission",
            "You need to enable photo library access in settings.",
            [
              { text: "Cancel", style: "cancel" },
              { text: "Open Settings", onPress: () => Linking.openSettings() },
            ]
          );
          return false;
        }
        return newStatus === RESULTS.GRANTED;
      }
      if (status === RESULTS.BLOCKED) {
        Alert.alert(
          "Photo Library Permission",
          "You need to enable photo library access in settings.",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Open Settings", onPress: () => Linking.openSettings() },
          ]
        );
        return false;
      }
      return status === RESULTS.GRANTED;
    } else {
      const permission =
        Platform.Version >= 33
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const granted = await PermissionsAndroid.request(permission);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
      if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
          "Permission denied permanently",
          "Enable gallery permission from settings",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Open Settings", onPress: () => Linking.openSettings() },
          ]
        );
      }
      return false;
    }
  };

  // ✅ Open Camera
  const handlecamera = async () => {
    const allowed = await requestCameraPermission();
    if (!allowed) return;

    launchCamera(
      { mediaType: "photo", maxHeight: 2000, maxWidth: 2000 },
      (response) => {
        if (response.didCancel || response.errorCode) return;
        let imageUri = response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        dispatch(updateProfilePic({ profilePic: imageUri }));
        closeSheet();
      }
    );
  };

  // ✅ Open Gallery
  const handlegallery = async () => {
    const allowed = await requestGalleryPermission();
    if (!allowed) return;

    launchImageLibrary(
      { mediaType: "photo", maxHeight: 2000, maxWidth: 2000 },
      (response) => {
        if (response.didCancel || response.errorCode) return;
        let imageUri = response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        dispatch(updateProfilePic({ profilePic: imageUri }));
        closeSheet();
      }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <BottomSheetModalProvider>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
          <View style={{ width: 28 }} />
        </View>

        {/* Profile Section */}
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={
                selectedImage
                  ? { uri: selectedImage }
                  : require("../../assets/images/user.png")
              }
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editButton} onPress={openSheet}>
              <Icon name="pencil" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* User Info Section */}
        <View style={{ padding: 20 }}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            style={[styles.input, styles.disabledInput]}
            placeholder="Email"
            value={email}
            editable={false}
          />

          {/* Date Picker */}
          <TouchableOpacity
            style={styles.input}
            onPress={() => setOpen(true)}
            activeOpacity={0.7}
          >
            <Text style={{ color: date ? "#000" : "#888" }}>
              {date ? moment(date).format("DD MMMM YYYY") : "Please select your birthdate"}
            </Text>
          </TouchableOpacity>

          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            maximumDate={new Date()}
            onConfirm={(selectedDate) => {
              setOpen(false);
              setDate(selectedDate);
            }}
            onCancel={() => setOpen(false)}
          />
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              paddingHorizontal: 135,
              backgroundColor: "#4d6fa9",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: 20,
            }}
            onPress={handleSave}
          >
            <Text style={{ color: "white" }}>Save Changes</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Sheet */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose
          backdropComponent={({ style }) => (
            <View style={[style, { backgroundColor: "rgba(0,0,0,0.4)" }]} />
          )}
        >
          <BottomSheetView style={styles.sheetContent}>
            <Text style={styles.sheetTitle}>Choose Option</Text>

            <TouchableOpacity style={styles.sheetButton} onPress={handlecamera}>
              <Text style={styles.sheetButtonText}>📷 Open Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sheetButton} onPress={handlegallery}>
              <Text style={styles.sheetButtonText}>🖼️ Open Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.sheetButton, styles.cancelButton]}
              onPress={closeSheet}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  imageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "#4a90e2",
  },
  editButton: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#4a90e2",
    borderRadius: 20,
    padding: 8,
    elevation: 3,
  },
  sheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },
  sheetButton: {
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    marginVertical: 6,
    alignItems: "center",
  },
  sheetButtonText: {
    fontSize: 16,
    color: "#333",
  },
  cancelButton: {
    backgroundColor: "#4d6fa9",
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  disabledInput: {
    backgroundColor: "#f2f2f2",
    color: "#999",
  },
});
