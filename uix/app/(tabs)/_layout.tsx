import React, { useEffect } from "react";
import { Link, Tabs } from "@/utils/router";
import { useColors } from "@/hooks/useColors";
import { StyleSheet, Text } from "@/components/Wrapped";
import Sizes from "@/constants/Sizes";
import TabBar from "@/components/Layout/TabBar";
import { useSizes } from "@/hooks/useSizes";

const tabs = [
  {
    name: "(search)",
    icon: "search",
    // href: "/(tabs)/search", // causes rerender on double click
    headerShown: false,
  },
  {
    name: "profile",
    icon: "cafe",
    // href: "/(tabs)/profile",
  },
  // {
  //   name: "(feed)",
  //   icon: "book",
  //   // href: "/(tabs)",
  //   href: null, // hide the button
  // },
];

export default function TabLayout() {
  const s = useSizes();
  return (
    <Tabs
      tabBar={(props) => <></>}
      // tabBar={(props) => <TabBar tabs={tabs} props={props} />}
      initialRouteName="(1)"
    >
      <Tabs.Screen name="(1)" options={{ headerShown: false }} />

      {tabs.map(({ name, icon, ...options }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            lazy: false,
            ...options,
          }}
        />
      ))}
    </Tabs>
  );
}

{
  /* <Tabs.Screen
name="index"
options={{
  // title: 'Tab One',
  tabBarIcon: ({ color, focused }) => (
    <TabBarIcon
      name={focused ? "book" : "book-outline"}
      color={color}
    />
  ),
  // headerRight: () => (
  //   <Link href="/modal" asChild>
  //     <Pressable>
  //       {({ pressed }) => (
  //         <IonIcons
  //           name="home"
  //           size={25}
  //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
  //         />
  //       )}
  //     </Pressable>
  //   </Link>
  // ),
}}
/> */
}
