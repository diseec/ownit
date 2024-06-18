import { Model as BaseModel } from "@k1zang/models-react";
import config from "@/config";
// import * as schema from "@common/jsonschemas";
// import { types } from "@k1/models";

export default abstract class Model extends BaseModel {
  static apiUri = config.api.url + "/graphql/";

  // static schema() {
  //   const schema = getTypeDefinition(this.name);
  //   if (schema === null) throw new Error(`Schema not found for ${this.name}`);
  //   return schema;
  // }

  // boot() {}

  // static allReactive(query?: types.Query): any {
  //   const all = reactive<Model[]>([]);
  //   this.all(query).then(
  //     (r: any) => (all.push(...r), all.forEach((m) => m.forceUpdateDom()))
  //   );
  //   return all;
  // }

  // static firstReactive(query?: types.Query | number | string): any {
  //   const model = reactive<Model>(new (this as any)());
  //   this.first(query).then((r) =>
  //     model.setAttributes(r.attributes).forceUpdateDom()
  //   );
  //   return model;
  // }

  // /**
  //  * Due to accessors for attributes via proxy,
  //  * Vue can't detect changes to the attributes. so:
  //  */
  // protected forceUpdateDom() {
  //   for (const key in this.attributes)
  //     (this[key] = undefined), delete this[key];
  //   // for (const key in this.attributes) this[key] = this.attributes[key];
  // }
}
