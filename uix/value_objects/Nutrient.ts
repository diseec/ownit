import Product from "@/models/Product";

const DEFAULT_MASS = 100;

export default class Nutrient {
  unit = "g";
  calorie: Calorie;

  protein: Protein;
  fat: Fat;
  carb: Carb;
  other: Other;

  totalMass: number;

  constructor(p: Product) {
    this.calorie = new Calorie(p.nutrientCalorie);
    this.protein = new Protein(p.nutrientProtein);
    this.fat = new Fat(p.nutrientFat, p.nutrientFatSaturated);
    this.other = new Other(p.nutrientCarbSugar);
    this.carb = new Carb(
      p.nutrientCarb,
      p.nutrientCarbFiber,
      p.nutrientCarbSugar
    );
    this.totalMass = this.calculateTotalMass();
    Object.values(this.macros).forEach((n) => n.setTotalMass(this.totalMass));
    Object.freeze(this);
  }

  get macros(): { [key: string]: Macro } {
    return {
      protein: this.protein,
      fat: this.fat,
      carb: this.carb,
      other: this.other,
    };
  }

  calculateTotalMass(): number {
    return Object.values(this.macros).reduce((acc, n) => acc + n.total, 0);
  }

  microRatio(n: "protein" | "fat" | "carb" | "other") {
    return this[n].total / this.totalMass;
  }

  get displayTotalMass() {
    return this.showCaseByUnit(
      this.totalMass === 0 ? DEFAULT_MASS : this.totalMass
    );
  }

  showCaseByUnit(value: number) {
    if (typeof value !== "number") value = 0;
    return value.toFixed(1) + this.unit;
  }
}

export abstract class Macro {
  unit = "g";
  totalMass?: number;
  total: number;
  abstract subTypes: string[];

  constructor(total: number | string) {
    this.total = f(total);
  }

  abstract name: string;

  get display() {
    return this.showCaseByUnit(this.total);
  }

  get displayPercentageOfTotalMass() {
    if (!this.totalMass) return undefined;
    return (this.ratio * 100).toFixed(1) + "%";
  }

  get displaySubTypes(): { [key: string]: string } {
    return this.subTypes.reduce((acc: any, subType) => {
      acc[subType] = this.showCaseByUnit(this[subType]);
      return acc;
    }, {});
  }

  get ratio() {
    if (!this.totalMass) return 0;
    return this.total / this.totalMass;
  }

  showCaseByUnit(value: number) {
    if (typeof value !== "number") value = 0;
    return value.toFixed(1) + this.unit;
  }

  setTotalMass(totalMass: number) {
    this.totalMass = totalMass;
  }

  [key: string]: any;
}

export class Calorie extends Macro {
  unit = "cal";
  subTypes = [];
  name = "calorie";

  constructor(total?: number) {
    super(total ?? DEFAULT_MASS);
  }

  get display() {
    return this.total > 1000
      ? Math.round(this.total / 1000).toFixed(0) + " k" + this.unit
      : this.total.toFixed(0) + this.unit;
  }

  get joules() {
    return this.total * 4.184;
  }

  get displayJoules() {
    return this.joules > 1000
      ? Math.round(this.joules / 1000).toFixed(0) + " kJ"
      : this.joules.toFixed(0) + " J";
  }
}

class Protein extends Macro {
  subTypes = [];
  name = "protein";
  constructor(total?: number) {
    super(total ?? 0);
  }
}

class Fat extends Macro {
  name = "fat";
  subTypes = ["saturated", "unsaturated"];
  saturated: number;
  unsaturated: number;

  constructor(total?: number, saturated?: number) {
    super((total ??= saturated ?? 0));
    this.saturated = f(saturated) ?? 0;
    this.unsaturated = f(total) - this.saturated;
  }
}

class Carb extends Macro {
  name = "carb";
  subTypes = ["fiber", "sugar"];
  fiber: number;
  sugar: number;

  constructor(total?: number, fiber?: number, sugar?: number) {
    (fiber = f(fiber ?? 0)), (sugar = f(sugar ?? 0));
    super(total ?? fiber + sugar);
    this.fiber = fiber;
    this.sugar = sugar;
  }
}

class Other extends Macro {
  name = "other";
  subTypes = [];
  constructor(total?: number) {
    super(total ?? 0);
  }
}

function f(v: any) {
  return parseFloat(v as any);
}
