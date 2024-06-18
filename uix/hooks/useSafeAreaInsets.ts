import { useSafeAreaInsets as defaultUseSafeAreaInsets } from "react-native-safe-area-context";

export function useSafeAreaInsets() {
  if (process.env.NODE_ENV === "test") {
    return { top: 0, bottom: 0, left: 0, right: 0 };
  }
  return defaultUseSafeAreaInsets();
}
