import React, { useEffect } from "react";
import { Link, Tabs } from "@/utils/router";
import { useColors } from "@/hooks/useColors";
import { StyleSheet, Text } from "@/components/Wrapped";
import Sizes from "@/constants/Sizes";
import TabBar from "@/components/Layout/TabBar";
import { useSizes } from "@/hooks/useSizes";

const tabs = [
  {
    name: "index",
    icon: "index",
    // href: "/(tabs)/index", // causes rerender on double click
    headerShown: false,
  },
  {
    name: "profile",
    icon: "cafe",
    // href: "/(tabs)/profile",
  },
  {
    name: "(favorites)",
    icon: "heart",
    // href: "/(tabs)",
    href: null, // hide the button
  },
];

export default function TabLayout() {
  const s = useSizes();
  return (
    <Tabs
      tabBar={(props) => <TabBar tabs={tabs} props={props} />}
      initialRouteName="index"
    >
      {/* <Tabs.Screen name="index" options={{ headerShown: false }} /> */}

      {tabs.map(({ name, icon, ...options }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            lazy: false,
            headerShown: false,
            ...options,
          }}
        />
      ))}
    </Tabs>
  );
}
