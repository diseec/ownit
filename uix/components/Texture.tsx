import {
  View,
  BlurView,
  ViewProps,
  StyleProp,
  ViewStyle,
  BlurViewProps,
} from "@/components/Wrapped";
import Sizes from "@/constants/Sizes";
import { useColors } from "@/hooks/useColors";
import { Platform } from "react-native";

interface PureProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
}

export function Pure({ style, ...props }: PureProps) {
  const Colors = useColors();
  return <View {...props} style={[{ backgroundColor: Colors.pure }, style]} />;
}

interface PureProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  props?: BlurViewProps;
  intensity?: number | "soft" | "base" | "hard";
  background?: "pure" | "transparent";
  transparent?: boolean;
}

export function Blur({
  children,
  style,
  intensity = "base",
  background = "transparent",
  ...props
}: PureProps) {
  const c = useColors();

  const backgroundColor =
    (
      {
        ios: {
          pure: c.pure + c.opacity.hard,
          contrast: c.contrast + c.opacity.hard,
        },
        web: {
          pure: c.pure + c.opacity.harder,
          contrast: c.contrast + c.opacity.harder,
        },
      } as any
    )?.[Platform.OS]?.[background] ?? c[background];

  if (style && typeof style === "object" && "backgroundColor" in style)
    // @ts-ignore
    ({ backgroundColor, ...style } = style || {});

  // dont like this bit vv
  let extractedProps: any = {};
  if (style && typeof style === "object" && !Array.isArray(style)) {
    let styleCopy = { ...style } as any;
    [
      "padding",
      "paddingTop",
      "paddingBottom",
      "paddingLeft",
      "paddingRight",
    ].forEach((prop) => {
      if (prop in styleCopy) {
        extractedProps[prop] = styleCopy[prop];
        delete styleCopy[prop];
      }
    });
    style = styleCopy;
  }
  // dont like this bit ^^

  return (
    <BlurView
      {...props}
      intensity={
        ({ soft: 30, base: 50, hard: 100 } as any)?.[intensity] ?? intensity
      }
      // tint={
      //   background !== "transparent" ? "default" : c.isDark ? "dark" : "light"
      // }
      style={[
        {
          // backgroundColor: c.pure,
          // borderColor: "#8883",
          // borderWidth: Sizes.fibonacci(0),
        },
        style,
      ]}
    >
      <View
        style={[
          {
            backgroundColor,
            width: "100%",
            height: "100%",
          },
          extractedProps,
        ]}
      >
        {children}
      </View>
    </BlurView>
  );
}

export default { Pure, Blur };
