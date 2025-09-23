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






