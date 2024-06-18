import { Stack } from "@/utils/router";

export default function TabSearchLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="products" />
    </Stack>
  );
}
