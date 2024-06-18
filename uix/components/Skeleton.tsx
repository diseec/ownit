import React, {
  useState,
  useEffect,
  ReactNode,
  createContext,
  useContext,
} from "react";
import {
  View as DefaultView,
  StyleSheet,
  ActivityIndicator,
  Animated,
  Text as DefaultText,
  TextStyle,
} from "@/components/Wrapped";
import Colors from "@/constants/Colors";
import Clocks from "@/constants/Clocks";

const AnimationContext = createContext(new Animated.Value(0));

interface BoneProps {
  of: any;
  width?: number;
  height?: number;
  style?: any;
  children?: ReactNode | ((data: any) => ReactNode);
}

function Bone({ children, of, width, height, style }: BoneProps) {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useContext(AnimationContext);

  useEffect(() => {
    setIsLoading(!Boolean(of || of === 0));
  }, [of]);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.neutral,
      minWidth: 2,
      minHeight: 2,
      width: width ?? height,
      height: height ?? width,
      ...style,
    },
  });

  return isLoading ? (
    <Animated.View
      style={{ ...styles.container, opacity: fadeAnim }}
      testID="loading"
    >
      {/* <ActivityIndicator size="large" color="#0000ff"  /> */}
    </Animated.View>
  ) : typeof children === "function" ? (
    children(of)
  ) : (
    children
  );
}

function Skeleton({ children }: { children: ReactNode }) {
  const fadeAnim = new Animated.Value(0.5);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: Clocks.duration.slow,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: Clocks.duration.slowest,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: Clocks.duration.slow,
          useNativeDriver: false,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  return (
    <AnimationContext.Provider value={fadeAnim}>
      {children}
    </AnimationContext.Provider>
  );
}

interface TextBoneProps extends BoneProps {
  style?: TextStyle;
  numberOfLines?: number;
  capitalizeFirstLetter?: boolean;
  translate?: boolean;
  translationParams?: any;
}

Skeleton.Text = function Text({
  style,
  numberOfLines,
  capitalizeFirstLetter,
  translate,
  translationParams,
  ...props
}: TextBoneProps) {
  return (
    <Bone {...props}>
      {(x) => (
        <DefaultText
          numberOfLines={numberOfLines}
          style={style}
          capitalizeFirstLetter={capitalizeFirstLetter}
          translate={translate}
          translationParams={translationParams}
        >
          {x}
        </DefaultText>
      )}
    </Bone>
  );
};

Skeleton.Bone = Bone;
export default Skeleton;
