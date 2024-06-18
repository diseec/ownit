import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "@/components/Wrapped";
import Sizes from "@/constants/Sizes";
import { useColors } from "@/hooks/useColors";

interface ButtonProps {
  title: string;
  style?: StyleProp<TextStyle>;
  props?: any;
}

const Button: React.FC<ButtonProps> = ({ title, style, ...props }) => {
  const Colors = useColors();
  return (
    <Text
      style={[
        {
          fontSize: Sizes.lg,
          fontWeight: "500",
          color: Colors.contrast,
          textAlign: "center",
          textTransform: "capitalize",
        },
        style,
      ]}
      {...props}
    >
      {title}
    </Text>
  );
};

export default Button;
