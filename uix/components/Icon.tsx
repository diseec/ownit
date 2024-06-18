import React from "react";
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import IonIcons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const iconSets = {
  IonIcons,
  FontAwesome6,
};

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export const Icon = function ({
  set,
  ...props
}: { set: keyof typeof iconSets } & React.ComponentProps<typeof IonIcons>) {
  const IconSet = iconSets[set];
  return <IconSet {...props} />;
};

export default Icon;
