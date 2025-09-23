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
import { navigate, navigationRef } from './src/service/navigationsevice';
import { StatusBar } from 'react-native';


const App = () => {
  const [initialNotification, setInitialNotification] = useState(null);

  // 🔹 Request notification permission
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

  // 🔹 Get FCM token
  const getFCMToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('📲 FCM Token:', token);
    } catch (e) {
      console.log('❌ FCM token error:', e);
    }
  };

  useEffect(() => {
    requestNotificationPermission();

    // Foreground notifications
    const unsubscribeForeground = messaging().onMessage(remoteMessage => {
      Alert.alert(
        'New Notification',
        remoteMessage.notification?.title || 'You have a new message'
      );
    });

    // Background notification tap
    const unsubscribeBackground = messaging().onNotificationOpenedApp(remoteMessage => {
      navigate('History', { fromNotification: true, data: remoteMessage?.data });
    });

    // Killed state notification tap
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          setInitialNotification(remoteMessage);
        }
      });

    return () => {
      unsubscribeForeground();
      unsubscribeBackground();
    };
  }, []);

  // 🔹 Navigate to History if app opened from killed state
  useEffect(() => {
    if (!initialNotification) return;

    const interval = setInterval(() => {
      if (navigationRef.isReady()) {
        navigate('History', { fromNotification: true, data: initialNotification?.data });
        setInitialNotification(null);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [initialNotification]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#4d6fa9" // your custom color
        barStyle="light-content"   // for white text/icons
      />
      <SafeAreaProvider>
        <AuthProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Appnav ref={navigationRef} />
              <Toast />
            </PersistGate>
          </Provider>
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
