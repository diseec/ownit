import Sizes from "../Sizes"; // replace with the actual path to your Sizes file

describe("Sizes", () => {
  it("fibonacci function", () => {
    expect(Sizes.fibonacci(0)).toBe(1);
    expect(Sizes.fibonacci(1)).toBe(1);
    expect(Sizes.fibonacci(2)).toBe(2);
    expect(Sizes.fibonacci(3)).toBe(3);
    expect(Sizes.fibonacci(4)).toBe(5);
    expect(Sizes.fibonacci(5)).toBe(8);
    expect(Sizes.fibonacci(6)).toBe(13);
    expect(Sizes.fibonacci(7)).toBe(21);
  });
});
