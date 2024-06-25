import { StyleSheet } from "react-native";
import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";

export const styles = StyleSheet.create({
	scrollView: {
		flexDirection: "row",
		flexGrow: 0.5,
		paddingBottom: Sizes.xxxs,
		paddingRight: Sizes.base,
	},
	item: {
		paddingHorizontal: Sizes.xl,
		height: Sizes.xxl + Sizes.xxs,
		justifyContent: "center",
		borderRadius: Sizes.radius.full,
		marginRight: Sizes.base,
	},
	itemActive: {
		backgroundColor: Colors.dark.background,
	},
	itemInactive: {
		backgroundColor: Colors.white,
	},
	textActive: {
		color: Colors.white,
		textTransform: "capitalize",
	},
	textInactive: {
		color: Colors.neutral.text,
		textTransform: "capitalize",
	},
});
