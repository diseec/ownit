import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import { View } from "@/components/Wrapped";
import { Modal as DefaultModal, Animated } from "react-native";
import Sizes from "@/constants/Sizes";
import Texture from "./Texture";
import { Dimensions } from "react-native";

interface PopupOptions {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode[] | React.ReactNode;
}

export default function Popup({ show, children, onClose }: PopupOptions) {
  const styles = StyleSheet.create({
    modal: {},
    animateView: {
      height: "100%",
      width: "100%",
      borderTopRightRadius: Sizes.radius.lg,
      borderTopLeftRadius: Sizes.radius.lg,
      overflow: "hidden",
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: Dimensions.get("window").height,
      position: "absolute",
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
    },
  });

  return (
    <DefaultModal
      style={styles.modal}
      animationType="fade"
      transparent={true}
      visible={show}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={styles.animateView} testID={"popup"}>
          <Texture.Blur
            background="transparent"
            intensity="hard"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
            }}
          ></Texture.Blur>
          <View style={styles.content}>{children}</View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </DefaultModal>
  );
}
