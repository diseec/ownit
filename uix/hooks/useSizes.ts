import s from "@/constants/Sizes";
import { useSafeAreaInsets } from "@/hooks/useSafeAreaInsets";

export function useSizes() {
  const insets = useSafeAreaInsets();

  return {
    ...s,
    insets,

    elements: {
      bar: {
        height: s.xxxl,
        margin: s.lg,
      },
    },

    barInsets: {
      top: insets.top + s.elements.bar.height + s.elements.bar.margin,
      // bottom:
      //   insets.bottom +
      //   s.elements.bar.height +
      //   (insets.bottom > s.elements.bar.margin ? 0 : s.elements.bar.margin),
      bottom:
        insets.bottom +
        (insets.bottom > s.elements.bar.margin ? 0 : s.elements.bar.margin),
    },
  };
}
