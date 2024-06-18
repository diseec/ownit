type FontWeight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "bold"
  | "normal";

const xxxs = 1;
const xxs = 2;
const xs = 3;
const sm = 5;
const base = 8;
const lg = 13;
const xl = 21;
const xxl = 34;
const xxxl = 55;

const memoFibo: Record<number, number> = {};

export default {
  xxxs,
  xxs,
  xs,
  sm,
  base,
  lg,
  xl,
  xxl,
  xxxl,
  font: {
    xs: 13,
    sm: 16,
    base: 20,
    lg: 27,
    xl: 39,
  },
  weight: {
    base: "400" as FontWeight,
    semibold: "500" as FontWeight,
    bold: "600" as FontWeight,
  },
  spacing: {
    xxxs,
    xxs,
    xs,
    sm,
    base,
    lg,
    xl,
    xxl,
    xxxl,
  },
  radius: {
    base: xl,
    lg: xxl,
    full: 9999,
  },
  border: {
    base: xxs,
    lg: xs,
  },
  elements: {
    bar: {
      height: xxxl,
      margin: lg,
    },
  },

  fibonacci(n: number): number {
    return n <= 1
      ? 1
      : memoFibo[n]
      ? memoFibo[n]
      : this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },
};
