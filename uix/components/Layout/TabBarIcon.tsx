import { Icon } from "@/components/Icon";
import Sizes from "@/constants/Sizes";

export default function TabBarIcon(props: {
  name: React.ComponentProps<typeof Icon>["name"];
  color: string;
}) {
  return <Icon set="IonIcons" size={Sizes.font.base} {...props} />;
}
