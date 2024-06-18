import Price from "../Price";

describe("Price", () => {
  it("amount with zero decimals", () => {
    const price = new Price(100.0, "USD");
    expect(String(price.amount) === String(100.0)).toBe(true);
    expect(price.currency).toBe("USD");
  });
});
