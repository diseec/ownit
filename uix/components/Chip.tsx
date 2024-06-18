import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  ViewProps,
  Animated,
  Pressable,
} from "@/components/Wrapped";
import { useColors } from "@/hooks/useColors";
import Sizes from "@/constants/Sizes";
import Icon from "./Icon";
import Clocks from "@/constants/Clocks";

export default function Chip({
  isActive,
  leftSlot,
  label,
  style,
  withCheckmark = false,
  onPress,
  deactivatedBackgroundColor,
  ...props
}: {
  isActive: boolean;
  leftSlot?: React.ReactNode;
  withCheckmark?: boolean;
  label: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  deactivatedBackgroundColor?: string;
  props?: ViewProps;
}) {
  const c = useColors();
  const animatedValue = useRef(new Animated.Value(isActive ? 1 : 0)).current;

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      deactivatedBackgroundColor ?? c.neutral + c.opacity.soft,
      c.primary,
    ],
  });
  const color = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [c.contrast, c.pure],
  });
  const rotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isActive ? 1 : 0,
      duration: Clocks.duration.fast,
      useNativeDriver: false,
    }).start();
  }, [isActive]);

  const s = StyleSheet.create({
    container: {
      padding: Sizes.spacing.base,
      paddingHorizontal: Sizes.spacing.lg,
      gap: Sizes.spacing.base,
      borderRadius: Sizes.radius.full,
      flexDirection: "row",
      alignSelf: "baseline",
      alignItems: "center",
      justifyContent: "center",
      shadowOpacity: 0.3,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 0 },
    },
    label: {
      fontSize: Sizes.font.sm,
      textTransform: "capitalize",
    },
    icon: {
      fontSize: Sizes.font.base,
    },
  });

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={[
          s.container,
          { backgroundColor, shadowColor: backgroundColor },
          style,
        ]}
        {...props}
      >
        {leftSlot && <View>{leftSlot}</View>}

        <Animated.Text style={[s.label, { color }]}>{label}</Animated.Text>

        {withCheckmark && (
          <Animated.Text
            style={[{ transform: [{ rotate: rotation }] }, { color }]}
          >
            <Icon
              set="IonIcons"
              name={isActive ? "checkmark-outline" : "close-outline"}
              style={[s.icon]}
            />
          </Animated.Text>
        )}
      </Animated.View>
    </Pressable>
  );
}
