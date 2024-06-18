import Colors from "@/constants/Colors";
import React from "react";
import Sizes from "@/constants/Sizes";
import { useColors } from "@/hooks/useColors";
import {
  ScrollView as DefaultScrollView,
  ScrollViewProps,
  Text as DefaultText,
  TextProps as DefaultTextProps,
  FlatList as DefaultFlatList,
  FlatListProps,
} from "react-native";
import { __ } from "@/utils/translation";

export function ScrollView(props: ScrollViewProps) {
  return (
    <DefaultScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  );
}

export function FlatList(props: FlatListProps<any>) {
  return (
    <DefaultFlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  );
}

export interface TextProps extends DefaultTextProps {
  capitalizeFirstLetter?: boolean;
  translate?: boolean;
  translationParams?: any;
}

export function Text({
  capitalizeFirstLetter,
  translate = true,
  translationParams,
  ...props
}: TextProps) {
  const c = useColors();

  const children = React.Children.map(props.children, (child: any) => {
    if (typeof child === "string") {
      if (translate) child = __(child, translationParams);
      if (capitalizeFirstLetter)
        child = child.charAt(0).toUpperCase() + child.slice(1);
    }
    return child;
  });

  return (
    <DefaultText
      {...props}
      style={[{ color: c.contrast, fontSize: Sizes.font.base }, props.style]}
      children={children}
    />
  );
}
export { Suspense } from "react";
export {
  Image,
  StyleSheet,
  TextStyle,
  Button,
  View,
  SafeAreaView,
  Easing,
  ActivityIndicator,
  TouchableOpacity,
  SectionList,
  Animated,
  // Touchable,
  StyleProp,
  ImageStyle,
  ViewStyle,
  ViewProps,
  Pressable,
  ImageProps,
  Dimensions,
} from "react-native";
export { BlurView, BlurViewProps } from "expo-blur";
