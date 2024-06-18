import Texture from "@/components/Texture";
import TabBarIcon from "./TabBarIcon";
import { useColors } from "@/hooks/useColors";
import { Text, View } from "@/components/Wrapped";
import { useSizes } from "@/hooks/useSizes";
import Pressable from "../Pressable";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export default function TabBar({
  tabs,
  props,
}: {
  tabs: { icon: string; name: string }[];
  props: BottomTabBarProps;
}) {
  const c = useColors();
  const s = useSizes();
  const currentTabName = props.state.routes[props.state.index].name;
  return (
    <Texture.Blur
      intensity="hard"
      background="pure"
      style={{
        position: "absolute",
        bottom: s.insets.bottom,
        margin: s.elements.bar.margin,
        marginBottom:
          s.insets.bottom > s.elements.bar.margin ? 0 : s.elements.bar.margin,
        left: 0,
        right: 0,
        overflow: "hidden",
        borderRadius: s.radius.full,
        height: s.elements.bar.height,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {tabs.map((tab) => (
          <Pressable
            key={"tab-" + tab.name}
            onPressOut={() => {
              const currentTabState = props.state.routes.find(
                (route) => route.name === currentTabName
              )?.state;
              if (currentTabName === tab.name) {
                if (currentTabState?.index > 0) props.navigation.popToTop();
                else if (
                  currentTabState?.routes[0].name !== undefined ||
                  currentTabState?.routes[0].name === "index"
                )
                  props.navigation.reset({
                    index: 0,
                    routes: [{ name: tab.name }],
                  });
              } else props.navigation.navigate(tab.name);
            }}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <TabBarIcon
              name={
                currentTabName === tab.name
                  ? tab.icon
                  : (`${tab.icon}-outline` as any)
              }
              color={currentTabName === tab.name ? c.primary : c.contrast}
            />
          </Pressable>
        ))}
      </View>
    </Texture.Blur>
  );
}
