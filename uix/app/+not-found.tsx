import { Link, Stack, usePathname, Redirect } from "@/utils/router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Wrapped";

export default function NotFoundScreen() {
  const pathname = usePathname();
  Redirect({ href: "/(tabs)/(search)" });

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>No screen found for '{pathname}'.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
