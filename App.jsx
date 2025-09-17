// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Appnavigator from './src/navigation/Appnavigator'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import { AuthProvider } from './src/context/Authcontext'
// import Toast from 'react-native-toast-message'
// import Tabnavigator from './src/navigation/Tabnavigator'
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import Appnav from './src/stacks/Appnav'
// import { Provider } from 'react-redux'
// import { store } from './src/store/store'
// import persistStore from 'redux-persist/es/persistStore'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistor } from './src/store/store'
// let persistor = persistStore(store)
// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaProvider>
//         <AuthProvider>
//           <Provider store={store}>
//             <PersistGate persistor={persistor}>
//               <Appnav />
//               <Toast />
//             </PersistGate>
//           </Provider>
//         </AuthProvider>
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//     //


//   )
// }

// export default App

// const styles = StyleSheet.create({})




// import { StyleSheet } from 'react-native'
// import React from 'react'
// import Appnav from './src/stacks/Appnav'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import { AuthProvider } from './src/context/Authcontext'
// import Toast from 'react-native-toast-message'
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { Provider } from 'react-redux'
// import { store, persistor } from './src/store/store' // ✅ import both together
// import { PersistGate } from 'redux-persist/integration/react'
// import { SafeAreaView } from 'react-native'


// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaProvider>
//         <AuthProvider>
//           <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//               <SafeAreaView style={{flex:1}}>
//               <Appnav />
//               <Toast />
//               </SafeAreaView>
             
//             </PersistGate>
//           </Provider>
//         </AuthProvider>
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


// import { StyleSheet } from 'react-native'
// import React from 'react'
// import Appnav from './src/stacks/Appnav'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import { AuthProvider } from './src/context/Authcontext'
// import Toast from 'react-native-toast-message'
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { Provider } from 'react-redux'
// import { store, persistor } from './src/store/store'
// import { PersistGate } from 'redux-persist/integration/react'

// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaProvider>
//         <AuthProvider>
//           <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//                 <Appnav />
//                 <Toast />
//             </PersistGate>
//           </Provider>
//         </AuthProvider>
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


// import { StyleSheet } from 'react-native'
// import React from 'react'
// import Appnav from './src/stacks/Appnav'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import { AuthProvider } from './src/context/Authcontext'
// import Toast from 'react-native-toast-message'
// import { SafeAreaProvider} from "react-native-safe-area-context";
// import { Provider } from 'react-redux'
// import { store, persistor } from './src/store/store'
// import { PersistGate } from 'redux-persist/integration/react'
// import { SafeAreaView } from 'react-native'

// const App = () => {
//   return (

//      <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaProvider>
//         <AuthProvider>
//           <Provider store={store}>
//           <PersistGate loading={null} persistor={persistor}>
//               <Appnav />           
//               <Toast />
//             </PersistGate>
//           </Provider>
//         </AuthProvider>
//       </SafeAreaProvider>
//      </GestureHandlerRootView>

//   )
// }

// export default App

// const styles = StyleSheet.create({})



// import React, { useEffect, useState } from 'react';
// import { Alert, Platform, PermissionsAndroid } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Toast from 'react-native-toast-message';
// import messaging from '@react-native-firebase/messaging';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// import { store, persistor } from './src/store/store';
// import Appnav from './src/stacks/Appnav';
// import { AuthProvider } from './src/context/Authcontext';
// // import { navigate, navigationRef } from './src/service/Navigationservice';

// const App = () => {
//   const [initialNotification, setInitialNotification] = useState(null);

//   // Request permission & get FCM token
//   const requestNotificationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
//       );
//       if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//         Alert.alert('Permission Denied', 'You will not receive notifications.');
//       }
//     }
//     await getFCMToken();
//   };

//   const getFCMToken = async () => {
//     try {
//       await messaging().registerDeviceForRemoteMessages();
//       const token = await messaging().getToken();
//       console.log('FCM Token:', token);
//     } catch (e) {
//       console.log('FCM token error:', e);
//     }
//   };

//   useEffect(() => {
//     requestNotificationPermission();

//     // Foreground notifications
//     const unsubscribeForeground = messaging().onMessage(remoteMessage => {
//       Alert.alert('New Notification', remoteMessage.notification?.title || 'You have a new message');
//     });

//     // Background notifications
//     const unsubscribeBackground = messaging().onNotificationOpenedApp(remoteMessage => {
//       navigate('Notification', { fromNotification: true });
//     });

//     // Killed state notifications
//     messaging().getInitialNotification().then(remoteMessage => {
//       if (remoteMessage) setInitialNotification(remoteMessage);
//     });

//     return () => {
//       unsubscribeForeground();
//       unsubscribeBackground();
//     };
//   }, []);

//   // Navigate if app opened from killed state
//   useEffect(() => {
//     if (!initialNotification) return;

//     const interval = setInterval(() => {
//       if (navigationRef.isReady()) {
//         navigate('Notification', { fromNotification: true });
//         setInitialNotification(null);
//         clearInterval(interval);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [initialNotification]);

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaProvider>
//         <AuthProvider>
//           <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//               <Appnav />
//               <Toast />
//             </PersistGate>
//           </Provider>
//         </AuthProvider>
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react';
import { Alert, Platform, PermissionsAndroid } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import messaging from '@react-native-firebase/messaging';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store/store';
import Appnav from './src/stacks/Appnav';
import { AuthProvider } from './src/context/Authcontext';

const App = () => {
  const [initialNotification, setInitialNotification] = useState(null);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  // Request permission & get FCM token
  const requestNotificationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission Denied', 'You will not receive notifications.');
      }
    }
    await getFCMToken();
  };
  const requestIospermission = async() => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getFCMToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
    } catch (e) {
      console.log('FCM token error:', e);
    }
  };

  useEffect(() => {
    requestNotificationPermission();
    if(Platform.OS === 'ios'){
      requestIospermission();
    }

    // Foreground notifications
    const unsubscribeForeground = messaging().onMessage(remoteMessage => {
      Alert.alert('New Notification', remoteMessage.notification?.title || 'You have a new message');
    });

    // Background notifications
    const unsubscribeBackground = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('App opened from background with notification:', remoteMessage);
    });

    // Killed state notifications
    messaging().getInitialNotification().then(remoteMessage => {
      if (remoteMessage) setInitialNotification(remoteMessage);
    });

    return () => {
      unsubscribeForeground();
      unsubscribeBackground();
    };
  }, []);

  // Just log initial notification instead of navigating
  useEffect(() => {
    if (initialNotification) {
      console.log('App opened from killed state with notification:', initialNotification);
      setInitialNotification(null);
    }
  }, [initialNotification]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AuthProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Appnav />
              <Toast />
            </PersistGate>
          </Provider>
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
