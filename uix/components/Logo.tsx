import React from "react";
import Svg, { Path } from "@/components/Svg";
import { DimensionValue, ViewStyle } from "react-native";
import { useColors } from "@/hooks/useColors";

const Logo = ({
  color,
  size,
  style,
  strokeWidth,
}: {
  size: DimensionValue;
  color?: string;
  style?: ViewStyle;
  strokeWidth?: number;
}) => (
  <Svg
    style={{
      width: size,
      height: size,
      ...style,
    }}
    viewBox="0 0 980 964"
    fill="none"
    stroke={color || useColors().contrast}
  >
    <Path
      d="M970 491.76C970 783.63 746.313 987.185 549.32 949.512C352.328 911.839 279.8 718.908 318.951 538.535C358.103 358.161 521.023 159.522 632.036 162.947C743.048 166.372 600.836 409.417 532.27 446.643C463.703 483.869 423.071 423.82 513.405 423.82C603.738 423.82 789.25 587.138 589.355 813.175C389.46 1039.21 9.99981 820.874 10 512.641C10.0002 204.408 243.492 20.2462 482.568 10.3523C721.644 0.458418 970 199.89 970 491.76Z"
      strokeWidth={strokeWidth ?? "22"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Logo;
