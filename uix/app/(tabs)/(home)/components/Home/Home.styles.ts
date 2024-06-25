import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

export const styles = StyleSheet.create({
	safeAreaProvider: {
		flex: 1,
		backgroundColor: Colors.light.background,
		paddingHorizontal: Sizes.md,
		paddingTop: Sizes.md,
	},
});
