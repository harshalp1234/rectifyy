import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
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
    const TIME = 200;
    shake.value = withRepeat(
      withSequence(
        withTiming(-OFFSET, { duration: TIME }),
        withTiming(OFFSET, { duration: TIME }),
        withTiming(0, { duration: TIME }),
        withTiming(-OFFSET, { duration: TIME }),
        withTiming(OFFSET, { duration: TIME }),
        withTiming(0, { duration: TIME })
      ),
      2,
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
    <View style={styles.headerContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Pocket Sergeant</Text>

        <View style={styles.iconRow}>
          {/* Blinking Share Icon */}
          <Animated.View style={[styles.iconWrapper, animatedStyle]}>
            <TouchableOpacity>
              <Icon name="share-outline" size={22} color="#4d6fa9" />
            </TouchableOpacity>
          </Animated.View>

          {/* Shaking Notifications Icon */}
          <Animated.View style={[styles.iconWrapper, shakeStyle]}>
            <TouchableOpacity>
              <Icon name="notifications-outline" size={22} color="#4d6fa9" />
            </TouchableOpacity>
          </Animated.View>

          {/* Settings Icon */}
          <View style={styles.iconWrapper}>
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

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
  },
  iconRow: {
    flexDirection: "row",
  },
  iconWrapper: {
    backgroundColor: "#e2effe",
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 12,
  },
});
