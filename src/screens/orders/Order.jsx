import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const IMAGES = [
  "https://picsum.photos/800/400?1",
  "https://picsum.photos/800/400?2",
  "https://picsum.photos/800/400?3",
  "https://picsum.photos/800/400?4",
];

export default function Order() {
  const translateX = useSharedValue(0);
  const currentIndex = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = -currentIndex.value * width + e.translationX;
    })
    .onEnd((e) => {
      const move = e.translationX;
      if (move < -50 && currentIndex.value < IMAGES.length - 1) {
        currentIndex.value += 1;
      } else if (move > 50 && currentIndex.value > 0) {
        currentIndex.value -= 1;
      }
      translateX.value = withSpring(-currentIndex.value * width);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.slider, animatedStyle]}>
          {IMAGES.map((uri, index) => (
            <Image
              key={index}
              source={{ uri }}
              style={{ width, height: 250, resizeMode: "cover" }}
            />
          ))}
        </Animated.View>
      </GestureDetector>

      {/* Dots Indicator */}
      <View style={styles.dots}>
        {IMAGES.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === currentIndex.value && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  slider: {
    flexDirection: "row",
    width: width * IMAGES.length,
  },
  dots: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    margin: 4,
  },
  activeDot: {
    backgroundColor: "#ff5a5f",
    width: 12,
    height: 12,
  },
});
