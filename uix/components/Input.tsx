import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { __c } from "@/utils/translation";
import { FC } from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

const Input: FC<TextInputProps> = (props) => {
  return (
    <TextInput
      selectionColor={Colors.primary}
      cursorColor={Colors.primary}
      placeholderTextColor={Colors.neutral}
      style={[styles.input, props.style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: Sizes.font.base,
  },
});

export default Input;
