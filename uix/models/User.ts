import Model from "./Model";
import Order from "./Order";

export default class User extends Model {
  name: string = "";
  // orders: Order[] = [];

  get isAdmin() {
    return this.name === "ADMIN";
  }

  static relations = {
    // orders: Order,
    // cart: Cart
  };
}
