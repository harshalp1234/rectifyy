


// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Alert,
//   Linking,
//   Platform,
//   PermissionsAndroid,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Geolocation from "react-native-geolocation-service";

// const Location = () => {
//   const [coords, setCoords] = useState({ latitude: null, longitude: null });

//   // Check + request permission
//   const requestPermission = async () => {
//     if (Platform.OS === "android") {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: "Location Permission",
//             message: "We need access to your location to continue",
//             buttonPositive: "OK",
//             buttonNegative: "Cancel",
//           }
//         );

//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           getLocation();
//         } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//           openSettingsAlert();
//         } else {
//           Alert.alert("Permission Denied", "Location access is required.");
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     } else {
//       getLocation(); // iOS handled via Info.plist
//     }
//   };

//   // Get current location
//   const getLocation = () => {
//     Geolocation.getCurrentPosition(
//       ({ coords }) => {
//         setCoords({
//           latitude: coords.latitude,
//           longitude: coords.longitude,
//         });
//       },
//       (error) => {
//         console.log(error);
//         if (error.code === 1) {
//           openSettingsAlert();
//         } else {
//           Alert.alert("Error", "Unable to fetch location.");
//         }
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   // Open settings alert
//   const openSettingsAlert = () => {
//     Alert.alert(
//       "Permission Needed",
//       "Please enable location permission in Settings.",
//       [
//         { text: "Cancel", style: "cancel" },
//         { text: "Open Settings", onPress: () => Linking.openSettings() },
//       ]
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>
//         Latitude: {coords.latitude ?? "Not available"}
//       </Text>
//       <Text style={styles.text}>
//         Longitude: {coords.longitude ?? "Not available"}
//       </Text>

//       <TouchableOpacity style={styles.button} onPress={requestPermission}>
//         <Text style={styles.buttonText}>Get Location</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default Location;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     color: "black",
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   button: {
//     height: 50,
//     width: 200,
//     backgroundColor: "#4d6fa9",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 15,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//   },
// });


///////////////
// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Alert,
//   Linking,
//   Platform,
//   PermissionsAndroid
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Geolocation from 'react-native-geolocation-service';

// const Location = () => {
//   const [longitude, setLongitude] = useState(null);
//   const [latitude, setLatitude] = useState(null);

//   // Request location permission
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location Permission',
//             message: 'App needs access to your location',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           }
//         );

//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           getLocation();
//         } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//           Alert.alert(
//             'Permission Blocked',
//             'Please enable location permission in Settings',
//             [
//               { text: 'Cancel', style: 'cancel' },
//               { text: 'Open Settings', onPress: () => Linking.openSettings() },
//             ]
//           );
//         } else {
//           Alert.alert('Permission Denied', 'Location permission denied');
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     } else {
//       // iOS → just call getLocation, permission handled via Info.plist
//       getLocation();
//     }
//   };

//   // Get current location
//   const getLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         setLongitude(position.coords.longitude);
//         setLatitude(position.coords.latitude);
//       },
//       (error) => {
//         console.log(error.code, error.message);
//         if (Platform.OS === 'ios' && error.code === 1) {
//           Alert.alert(
//             'Permission Needed',
//             'Please enable location in Settings',
//             [
//               { text: 'Cancel', style: 'cancel' },
//               { text: 'Open Settings', onPress: () => Linking.openURL('app-settings:') },
//             ]
//           );
//         }
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.text}>Longitude: {longitude}</Text>
//         <Text style={styles.text}>Latitude: {latitude}</Text>

//         <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
//           <Text style={styles.buttonText}>Request Location</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={getLocation}>
//           <Text style={styles.buttonText}>Get Location</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Location;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'black',
//     fontSize: 16,
//     marginVertical: 5,
//   },
//   button: {
//     height: 50,
//     width: 200,
//     backgroundColor: '#4d6fa9',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 15,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });



///

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Linking,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Geolocation from 'react-native-geolocation-service';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const Location = () => {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      },
      (error) => {
        console.log(error.code, error.message);
        if (Platform.OS === 'ios' && error.code === 1) {
          Alert.alert(
            'Permission Needed',
            'Please enable location in Settings',
            [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Open Settings', onPress: () => Linking.openURL('app-settings:') },
            ]
          );
        }
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const checkLocationPermission = async () => {
    const permission = Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    try {
      const result = await check(permission);

      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert('Error', 'Location services are not available on this device.');
          break;
        case RESULTS.DENIED:
          const requestResult = await request(permission);
          if (requestResult === RESULTS.GRANTED) {
            getLocation();
          } else {
            Alert.alert('Permission Denied', 'Location permission denied');
          }
          break;
        case RESULTS.LIMITED: // iOS only
        case RESULTS.GRANTED:
          getLocation();
          break;
        case RESULTS.BLOCKED:
          Alert.alert(
            'Permission Blocked',
            'Please enable location permission in Settings',
            [{ text: 'Open Settings', onPress: () => Linking.openSettings() }]
          );
          break;
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Longitude: {longitude}</Text>
        <Text style={styles.text}>Latitude: {latitude}</Text>

        <TouchableOpacity style={styles.button} onPress={checkLocationPermission}>
          <Text style={styles.buttonText}>Request Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={getLocation}>
          <Text style={styles.buttonText}>Get Location</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { color: 'black', fontSize: 16, marginVertical: 5 },
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#4d6fa9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: { color: 'white', fontSize: 16 },
});


///



