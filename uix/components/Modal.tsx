import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import { View } from "@/components/Wrapped";
import React, { useState, useEffect } from "react";
import {
  Modal as DefaultModal,
  PanResponder,
  Animated,
  GestureResponderEvent as GRE,
  PanResponderGestureState as PRGS,
} from "react-native";
import { Pressable } from "@/components/Wrapped";
import Sizes from "@/constants/Sizes";
import { useColors } from "@/hooks/useColors";
import Texture from "./Texture";
import Clocks from "@/constants/Clocks";
import { Dimensions } from "react-native";
import { useSizes } from "@/hooks/useSizes";

interface ModalOptions {
  trigger?: React.ReactElement<React.ComponentProps<typeof Pressable>>;

  // isOpen?: boolean;
  // backdropDismiss?: boolean; If true, the modal will be dismissed when the backdrop is clicked.
  // animated?: boolean;
  // canDismiss?: boolean | ((data?: any, role?: string) => Promise<boolean>); If the value is true or the value's function returns true, the modal will close when trying to dismiss. If the value is false or the value's function returns false, the modal will not close when trying to dismiss.
  // breakpoints?: number[]; A decimal value between 0 and 1 that indicates the point after which the backdrop will begin to fade in when using a sheet modal. Prior to this point, the backdrop will be hidden and the content underneath the sheet can be interacted with. This value is exclusive meaning the backdrop will become active after the value specified.
  // initialBreakpoint?: number; A decimal value between 0 and 1 that indicates the initial point the modal will open at when creating a sheet modal. This value must also be listed in the breakpoints array.

  children: React.ReactNode[] | React.ReactNode;
  onClose?: () => void;
}

const screenHeight = Dimensions.get("window").height;

export default function Modal({ trigger, children }: ModalOptions) {
  const [isShow, setIsShow] = useState(false);

  const handler = new AnimatedReaction(setIsShow);
  const colors = useColors();

  useEffect(() => {
    if (isShow) handler.show();
  }, [isShow]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: handler.moved,
    onPanResponderRelease: handler.released,
  });

  const styles = StyleSheet.create({
    modal: {},
    animateView: {
      transform: handler.position.getTranslateTransform(),
      height: "auto",
      width: "100%",
      position: "absolute",
      bottom: 0,
      borderTopRightRadius: Sizes.radius.lg,
      borderTopLeftRadius: Sizes.radius.lg,
      overflow: "hidden",
    },
    texture: {
      flex: 1,
      paddingBottom: useSizes().insets.bottom,
    },
    backdrop: {
      backgroundColor: colors.pure + colors.opacity.soft,
      ...(StyleSheet.absoluteFill as any),
    },
  });

  return (
    <>
      <DefaultModal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={isShow}
      >
        <TouchableWithoutFeedback
          testID={"modal-backdrop"}
          onPress={handler.dismiss}
        >
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>

        <Animated.View
          style={styles.animateView}
          testID={"modal"}
          {...panResponder.panHandlers}
        >
          <Texture.Blur
            background="pure"
            intensity="hard"
            style={styles.texture}
          >
            {children}
          </Texture.Blur>
        </Animated.View>
      </DefaultModal>

      {trigger &&
        React.cloneElement(trigger, {
          onPress: () => handler.setIsShow(true),
        })}
    </>
  );
}

class AnimatedReaction {
  position: Animated.ValueXY;
  setIsShow: CallableFunction;
  lastY: number;

  constructor(setIsShow: CallableFunction) {
    this.position = new Animated.ValueXY({ x: 0, y: screenHeight });
    this.setIsShow = setIsShow;
    this.lastY = 0;

    this.moved = this.moved.bind(this);
    this.released = this.released.bind(this);
    this.dismiss = this.dismiss.bind(this);
  }

  moved(event: GRE, gesture: PRGS) {
    let newY = this.position.y._value + (gesture.dy - this.lastY);
    // Ensure the new y value is not less than 0 and not more than the screen height
    newY = Math.max(0, Math.min(screenHeight, newY));
    this.position.setValue({ x: 0, y: newY });
    this.lastY = gesture.dy;
  }

  released(event: GRE, gesture: PRGS) {
    const currentHeight = screenHeight - this.position.y._value;
    if (currentHeight < screenHeight / 1.3 && gesture.dy > 50) {
      this.dismiss();
    } else {
      this.bounce();
    }
    this.lastY = 0;
  }

  show() {
    Animated.timing(this.position, {
      toValue: { x: 0, y: 0 },
      duration: Clocks.duration.base,
      useNativeDriver: false,
    }).start();
  }

  move(event: GRE, gesture: PRGS) {
    let newY = this.position.y._value + gesture.dy;
    this.position.setValue({ x: 0, y: newY });
  }

  dismiss() {
    Animated.timing(this.position, {
      toValue: { x: 0, y: screenHeight },
      duration: Clocks.duration.base,
      useNativeDriver: false,
    }).start(() => {
      this.setIsShow(false);
    });
  }

  bounce() {
    const breakpoints = [0, 200, 400, 600, 800, 1000]; // Add or remove values based on your needs

    // Calculate the nearest breakpoint
    const currentY = this.position.y._value;
    const nearestBreakpoint = breakpoints.reduce((prev, curr) =>
      Math.abs(curr - currentY) < Math.abs(prev - currentY) ? curr : prev
    );

    // Animate the modal to the nearest breakpoint
    Animated.spring(this.position, {
      toValue: { x: 0, y: nearestBreakpoint },
      bounciness: 0,
      useNativeDriver: false,
    }).start();
  }
}
