import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Wrapped";
import { Stack, router, useNavigation } from "@/utils/router";

export default function TabFavoritesScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
  });

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          animation: "slide_from_right",
          animationDuration: 300,
        }}
      />
      <Text style={styles.title} className=" text-green">
        Tab Favorites
      </Text>
      {/* <Text style={styles.title}>{}</Text> */}
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}
