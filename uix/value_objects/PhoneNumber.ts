export default class PhoneNumber {
  protected value: string;

  constructor(value: string) {
    this.value = value;
  }

  get isValid() {
    return /^\+?[1-9]\d{1,14}$/.test(this.value);
  }

  get formatted() {
    return this.value.replace(/(\d{1,3})(\d{1,3})(\d{1,4})/, "+$1 $2 $3");
  }

  toString() {
    return this.value;
  }
}
