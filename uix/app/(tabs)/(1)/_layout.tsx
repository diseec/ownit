import { Redirect } from "@/utils/router";

export default function Tabs() {
  Redirect({ href: "/(tabs)/(feed)" });
  return null;
}
