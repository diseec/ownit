import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

export const styles = StyleSheet.create({
	container: {
		position: "relative",
		marginVertical: Sizes.base * 2,
	},
	input: {
		backgroundColor: Colors.white,
		borderRadius: Sizes.radius.full,
		paddingLeft: Sizes.xxl * 2,
		paddingVertical: Sizes.xxl / 2,
		shadowColor: Colors.shadow,
		shadowOffset: { width: 0, height: Sizes.xs },
		shadowOpacity: 0.25,
		shadowRadius: Sizes.base / 2,
		elevation: 5,
	},
	searchIcon: {
		position: "absolute",
		left: Sizes.base * 2,
		top: Sizes.xl / 1.5,
	},
	buttonText: {
		position: "absolute",
		right: Sizes.base * 2,
		top: Sizes.base * 2,
	},
});
