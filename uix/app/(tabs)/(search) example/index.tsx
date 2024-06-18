import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "@/components/Wrapped";
import Skeleton from "@/components/Skeleton";
import { useSizes } from "@/hooks/useSizes";
import { Text } from "@/components/Wrapped";

export default function TabSearchScreen() {
  const sizes = useSizes();

  return <Text>this is search screen!</Text>;
}
