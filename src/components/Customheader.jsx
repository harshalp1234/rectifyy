// import React, { useEffect } from "react";
// import { View, TouchableOpacity, Text } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withRepeat,
// } from "react-native-reanimated";

// const Customheader = () => {
//   const blink = useSharedValue(1); // initial opacity of red background

//   useEffect(() => {
//     // Blink 3 times (6 alternations = 3 full blinks)
//     blink.value = withRepeat(
//       withTiming(0, { duration: 500 }),
//       6,
//       true
//     );
//   }, []);

//   const animatedStyle = useAnimatedStyle(() => ({
//     opacity: blink.value,
//   }));

//   return (
//     <View style={{ backgroundColor: "#fff", paddingHorizontal: 16, paddingVertical: 13 }}>
//       {/* Top Row: Title + Icons */}
//       <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//         <Text style={{ fontSize: 25, fontWeight: "900" }}>Pocket Sergeant</Text>

//         <View style={{ flexDirection: "row", gap: 12 }}>
//           {/* Blinking Share Icon */}
//           <Animated.View
//             style={[
//               {
//                 backgroundColor: "#e2effe",
//                 height: 35,
//                 width: 35,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: 20,
//               },
//               animatedStyle, // <-- blink effect
//             ]}
//           >
//             <TouchableOpacity>
//               <Icon name="share-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </Animated.View>

//           {/* Other Icons */}
//           <View
//             style={{
//               backgroundColor: "#e2effe",
//               height: 35,
//               width: 35,
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 20,
//             }}
//           >
//             <TouchableOpacity>
//               <Icon name="notifications-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               backgroundColor: "#e2effe",
//               height: 35,
//               width: 35,
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 20,
//             }}
//           >
//             <TouchableOpacity>
//               <Icon name="settings-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Customheader;







// import React, { useEffect } from "react";
// import { View, TouchableOpacity, Text } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withRepeat,
// } from "react-native-reanimated";

// const Customheader = () => {
//   const blink = useSharedValue(1); // initial opacity of red background

//   useEffect(() => {
//     // Blink 3 times (6 alternations = 3 full blinks)
//     blink.value = withRepeat(
//       withTiming(0, { duration: 500 }),
//       6,
//       true
//     );
//   }, []);

//   const animatedStyle = useAnimatedStyle(() => ({
//     opacity: blink.value,
//   }));

//   return (
//     <View style={{ backgroundColor: "#fff", paddingHorizontal: 16, paddingVertical: 13 }}>
//       {/* Top Row: Title + Icons */}
//       <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//         <Text style={{ fontSize: 25, fontWeight: "900" }}>Pocket Sergeant</Text>

//         <View style={{ flexDirection: "row", gap: 12 }}>
//           {/* Blinking Share Icon */}
//           <Animated.View
//             style={[
//               {
//                 backgroundColor: "#e2effe",
//                 height: 35,
//                 width: 35,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: 20,
//               },
//               animatedStyle, // <-- blink effect
//             ]}
//           >
//             <TouchableOpacity>
//               <Icon name="share-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </Animated.View>

//           {/* Other Icons */}
//           <View
//             style={{
//               backgroundColor: "#e2effe",
//               height: 35,
//               width: 35,
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 20,
//             }}
//           >
//             <TouchableOpacity>
//               <Icon name="notifications-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               backgroundColor: "#e2effe",
//               height: 35,
//               width: 35,
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 20,
//             }}
//           >
//             <TouchableOpacity>
//               <Icon name="settings-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Customheader;











// import React, { useEffect } from "react";
// import { View, TouchableOpacity, Text } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withSequence,
//   withRepeat,
// } from "react-native-reanimated";

// const Customheader = () => {
//   const shake = useSharedValue(0); // initial horizontal offset

//   useEffect(() => {
//     const OFFSET = 10; // horizontal shake distance
//     const TIME = 1000;  // duration per shake
//     const REPEAT = 3;  // number of shakes

//     // Start shaking
//     shake.value = withSequence(
//       withRepeat(
//         withTiming(OFFSET, { duration: TIME }),
//         REPEAT * 2, // multiply by 2 because alternating
//         true // alternate direction
//       ),
//       withTiming(0, { duration: TIME }) // go back to center
//     );
//   }, []);

//   const shakeStyle = useAnimatedStyle(() => ({
//     transform: [{ translateX: shake.value }],
//   }));

//   return (
//     <View style={{ backgroundColor: "#fff", paddingHorizontal: 16, paddingVertical: 13 }}>
//       {/* Top Row: Title + Icons */}
//       <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//         <Text style={{ fontSize: 25, fontWeight: "900" }}>Pocket Sergeant</Text>

//         <View style={{ flexDirection: "row", gap: 12 }}>
//           {/* Share Icon (optional blink) */}
//           <View
//             style={{
//               backgroundColor: "#e2effe",
//               height: 35,
//               width: 35,
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 20,
//             }}
//           >
//             <TouchableOpacity>
//               <Icon name="share-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </View>

//           {/* Notification Icon (shaking) */}
//           <Animated.View
//             style={[
//               {
//                 backgroundColor: "#e2effe",
//                 height: 35,
//                 width: 35,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: 20,
//               },
//               shakeStyle,
//             ]}
//           >
//             <TouchableOpacity>
//               <Icon name="notifications-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </Animated.View>

//           {/* Settings Icon */}
//           <View
//             style={{
//               backgroundColor: "#e2effe",
//               height: 35,
//               width: 35,
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 20,
//             }}
//           >
//             <TouchableOpacity>
//               <Icon name="settings-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Customheader;






// import React, { useEffect } from "react";
// import { View, TouchableOpacity, Text } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withRepeat,
// } from "react-native-reanimated";

// const Customheader = () => {
//   const blink = useSharedValue(1); // initial opacity of red background
//   const shake = useSharedValue(0);

//   useEffect(() => {
//     const OFFSET = 10; // horizontal shake distance
//     const TIME = 1000;  // duration per shake
//     const REPEAT = 3;  // number of shakes
//     shake.value = withSequence(
//         withRepeat(
//           withTiming(OFFSET, { duration: TIME }),
//           REPEAT * 2, // multiply by 2 because alternating
//           true // alternate direction
//         ),
//         withTiming(0, { duration: TIME }) // go back to center
//       );
   
    
//     // Blink 3 times (6 alternations = 3 full blinks)
//     blink.value = withRepeat(
//       withTiming(0, { duration: 500 }),
//       6,
//       true
//     );
//   }, []);

//   const animatedStyle = useAnimatedStyle(() => ({
//     opacity: blink.value,
//   }));

//   const shakeStyle = useAnimatedStyle(() => ({
//     transform: [{ translateX: shake.value }],
//   }));

//   return (
//     <View style={{ backgroundColor: "#fff", paddingHorizontal: 16, paddingVertical: 13 }}>
//       {/* Top Row: Title + Icons */}
//       <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//         <Text style={{ fontSize: 25, fontWeight: "900" }}>Pocket Sergeant</Text>

//         <View style={{ flexDirection: "row", gap: 12 }}>
//           {/* Blinking Share Icon */}
//           <Animated.View
//             style={[
//               {
//                 backgroundColor: "#e2effe",
//                 height: 35,
//                 width: 35,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: 20,
//               },
//               animatedStyle, // <-- blink effect
//             ]}
//           >
//             <TouchableOpacity>
//               <Icon name="share-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </Animated.View>

//           {/* Other Icons */}
//           <Animated.View
//         style={[
//             {
//               backgroundColor: "#e2effe",
//               height: 35,
//               width: 35,
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 20,
//             },
//             shakeStyle, // <-- blink effect
//           ]}
//           >
//             <TouchableOpacity>
//               <Icon name="notifications-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </Animated.View>
//           <View
//             style={{
//               backgroundColor: "#e2effe",
//               height: 35,
//               width: 35,
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 20,
//             }}
//           >
//             <TouchableOpacity>
//               <Icon name="settings-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Customheader;


// import React, { useEffect } from "react";
// import { View, TouchableOpacity, Text } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withRepeat,
//   withSequence,
// } from "react-native-reanimated";

// const Customheader = () => {
//   const blink = useSharedValue(1);
//   const shake = useSharedValue(0);

//   useEffect(() => {
//     // Blink 3 times
//     blink.value = withRepeat(withTiming(0, { duration: 500 }), 6, true);

//     // Shake notifications icon
//     const OFFSET = 10;
//     const TIME = 900; // faster shake
//     shake.value = withSequence(
//       withRepeat(
//         withTiming(OFFSET, { duration: TIME }),
//         6, // 3 shakes -> 6 alternating
//         true
//       ),
//       withTiming(0, { duration: TIME }) // reset to center
//     );
//   }, []);

//   const animatedStyle = useAnimatedStyle(() => ({
//     opacity: blink.value,
//   }));

//   const shakeStyle = useAnimatedStyle(() => ({
//     transform: [{ translateX: shake.value }],
//   }));

//   return (
//     <View style={{ backgroundColor: "#fff", paddingHorizontal: 16, paddingVertical: 13 }}>
//       <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//         <Text style={{ fontSize: 25, fontWeight: "900" }}>Pocket Sergeant</Text>

//         <View style={{ flexDirection: "row" }}>
//           {/* Blinking Share Icon */}
//           <Animated.View
//             style={[
//               {
//                 backgroundColor: "#e2effe",
//                 height: 35,
//                 width: 35,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: 20,
//                 marginLeft: 12,
//               },
//               animatedStyle,
//             ]}
//           >
//             <TouchableOpacity>
//               <Icon name="share-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </Animated.View>

//           {/* Shaking Notifications Icon */}
//           <Animated.View
//             style={[
//               {
//                 backgroundColor: "#e2effe",
//                 height: 35,
//                 width: 35,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: 20,
//                 marginLeft: 12,
//               },
//               shakeStyle,
//             ]}
//           >
//             <TouchableOpacity>
//               <Icon name="notifications-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </Animated.View>

//           {/* Settings Icon */}
//           <View
//             style={{
//               backgroundColor: "#e2effe",
//               height: 35,
//               width: 35,
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 20,
//               marginLeft: 12,
//             }}
//           >
//             <TouchableOpacity>
//               <Icon name="settings-outline" size={22} color="#4d6fa9" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Customheader;


import React, { useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";

const Customheader = () => {
  const blink = useSharedValue(1);
  const shake = useSharedValue(0);

  useEffect(() => {
    // Blink 3 times
    blink.value = withRepeat(withTiming(0, { duration: 500 }), 6, true);

    // Shake notifications icon
    const OFFSET = 10;
    const TIME = 200; // faster shake
    shake.value = withRepeat(
      withSequence(
        withTiming(-OFFSET, { duration: TIME }),
        withTiming(OFFSET, { duration: TIME }),
        withTiming(0, { duration: TIME }), // reset to center
        withTiming(-OFFSET, { duration: TIME }),
        withTiming(OFFSET, { duration: TIME }),
        withTiming(0, { duration: TIME }) // reset to center
      ),
      2, // repeat the sequence twice
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: blink.value,
  }));

  const shakeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shake.value }],
  }));

  return (
    <View style={{ backgroundColor: "#fff", paddingHorizontal: 16, paddingVertical: 13 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "900" }}>Pocket Sergeant</Text>

        <View style={{ flexDirection: "row" }}>
          {/* Blinking Share Icon */}
          <Animated.View
            style={[
              {
                backgroundColor: "#e2effe",
                height: 35,
                width: 35,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                marginLeft: 12,
              },
              animatedStyle,
            ]}
          >
            <TouchableOpacity>
              <Icon name="share-outline" size={22} color="#4d6fa9" />
            </TouchableOpacity>
          </Animated.View>

          {/* Shaking Notifications Icon */}
          <Animated.View
            style={[
              {
                backgroundColor: "#e2effe",
                height: 35,
                width: 35,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                marginLeft: 12,
              },
              shakeStyle,
            ]}
          >
            <TouchableOpacity>
              <Icon name="notifications-outline" size={22} color="#4d6fa9" />
            </TouchableOpacity>
          </Animated.View>

          {/* Settings Icon */}
          <View
            style={{
              backgroundColor: "#e2effe",
              height: 35,
              width: 35,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              marginLeft: 12,
            }}
          >
            <TouchableOpacity>
              <Icon name="settings-outline" size={22} color="#4d6fa9" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Customheader;
