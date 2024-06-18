import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  Pressable as DefaultPressable,
  Animated,
  StyleProp,
  ViewStyle,
  ViewProps,
} from "@/components/Wrapped";
import Colors from "@/constants/Colors";
import * as Haptics from "expo-haptics";
import { Link, LinkProps } from "@/utils/router";
import Clocks from "@/constants/Clocks";
import { createContext, useContext } from "react";
import { Platform } from "react-native";

type SupportedEffects = "scale" | "opacity" | "background";

type PressableProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  onLongPress?: () => void;
  onPressOut?: () => void;
  linkOptions?: LinkProps<any>;
};

type PressableViewProps = {
  children: React.ReactNode;
  effect: SupportedEffects | SupportedEffects[];
  style?: StyleProp<ViewStyle>;
} & ViewProps;

type PressableComponent = React.ForwardRefExoticComponent<PressableProps> & {
  View: typeof View;
};

const PressableContext = createContext<any>(null);
const TOUCH_DEBOUNCE = 0;

function View({ children, effect, style, ...props }: PressableViewProps) {
  const { anim } = useContext(PressableContext);

  const effects = {
    scale: {
      transform: [
        {
          scale: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.95],
          }),
        },
      ],
    },
    opacity: {
      opacity: anim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.8],
      }),
    },
    background: {
      backgroundColor: anim.interpolate({
        inputRange: [0, 1],
        outputRange: [
          Colors.transparent,
          Colors.neutral + Colors.opacity.softest,
        ],
      }),
    },
  };

  const animatedStyles = (Array.isArray(effect) ? effect : [effect]).reduce(
    (acc, curr) => ({ ...acc, ...effects[curr] }),
    {}
  );

  return (
    <Animated.View style={[animatedStyles, style]} {...props}>
      {children}
    </Animated.View>
  );
}

const Pressable = forwardRef(
  (
    {
      children,
      style,
      onPressOut,
      onLongPress,
      linkOptions,
      ...props
    }: PressableProps,
    ref
  ) => {
    let pressTimeout: NodeJS.Timeout;
    const anim = useState(new Animated.Value(0))[0];

    const animatePressIn = () => {
      pressTimeout = setTimeout(() => {
        Animated.timing(anim, {
          toValue: 1,
          duration: Clocks.duration.fast,
          useNativeDriver: false,
        }).start();
      }, TOUCH_DEBOUNCE);
    };

    const animatePressOut = () => {
      clearTimeout(pressTimeout);
      Animated.timing(anim, {
        toValue: 0,
        duration: Clocks.duration.fast,
        useNativeDriver: false,
      }).start();
    };

    const handleLongPress = async () => {
      if (!onLongPress) return;
      if (Platform.OS !== "web")
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      animatePressOut();
      onLongPress();
    };

    useImperativeHandle(ref, () => ({
      animatePressIn,
      animatePressOut,
      handleLongPress,
    }));

    const pressable = (
      <DefaultPressable
        {...props}
        onPressIn={animatePressIn}
        onPressOut={() => {
          animatePressOut();
          onPressOut?.();
        }}
        onLongPress={onLongPress ? handleLongPress : undefined}
        style={style}
      >
        <PressableContext.Provider value={{ anim }}>
          {children}
        </PressableContext.Provider>
      </DefaultPressable>
    );

    return linkOptions ? (
      <Link {...linkOptions} asChild>
        {pressable}
      </Link>
    ) : (
      pressable
    );
  }
) as PressableComponent;

Pressable.View = View;

export default Pressable;
