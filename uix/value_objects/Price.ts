export default class Price {
  amount: number;
  currency: string;
  unit?: string;

  constructor(amount: number | string, currency: string, unit?: string) {
    this.amount = typeof amount === "string" ? parseFloat(amount) : amount;
    this.currency = currency;
    this.unit = unit;
  }

  get display(): string {
    return parseFloat(this.amount?.toFixed(2)) + "₺";
  }
}
