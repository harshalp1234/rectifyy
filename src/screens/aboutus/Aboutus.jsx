
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import React from 'react';
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withDelay,
//   withTiming,
// } from 'react-native-reanimated';

// export const Aboutus = () =>{  
//   const toggle = useSharedValue(0);
//   const activeStyle = useAnimatedStyle(() => {
//     return {
//       backgroundColor: withDelay(
//         500,
//         withTiming(toggle.value === 1 ? 'yellow' : 'transparent'),
//       ),
//     };
//   });
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         activeOpacity={1}
//         onPress={() => {
//           toggle.value = 1;
//           setTimeout(() => {
//             toggle.value = 0;
//           }, 500);
//         }}>
//         <Animated.View style={[styles.button, activeStyle]}>
//           <Text style={{color: 'black'}}>{'My component'}</Text>
//         </Animated.View>
//       </TouchableOpacity>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     width: 120,
//     height: 60,
//     borderRadius: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//   },
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Aboutus = () => {
  return (
    <View>
      <Text>Aboutus</Text>
    </View>
  )
}

export default Aboutus

const styles = StyleSheet.create({})