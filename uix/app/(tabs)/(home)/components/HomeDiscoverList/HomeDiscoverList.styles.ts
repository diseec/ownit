import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

export const styles = StyleSheet.create({
	container: {
		flex: 4,
	},
	title: {
		fontSize: Sizes.font.lg,
		paddingBottom: Sizes.xs,
		color: Colors.light.text,
	},
	scrollViewContent: {
		justifyContent: "space-between",
		flexDirection: "row",
		flexWrap: "wrap",
		marginVertical: Sizes.base,
	},
});
