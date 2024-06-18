import { useColorScheme } from "@/hooks/useColorScheme";
import Colors from "@/constants/Colors";

export function useColors() {
  const scheme = useColorScheme();
  return {
    ...Colors,

    get pure(): string {
      return this.isDark ? this.black : this.white;
    },

    get contrast(): string {
      return this.isDark ? this.white : this.black;
    },

    get isDark() {
      return scheme === "dark";
    },

    get isLight() {
      return scheme === "light";
    },
  };
}
