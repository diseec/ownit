import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

export const styles = StyleSheet.create({
	container: {
		width: "49%",
		height: Sizes.xl2 * 6.4,
		marginBottom: Sizes.md - 2,
		position: "relative",
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: Sizes.xl,
	},
	locationContainer: {
		position: "absolute",
		top: Sizes.md - 2,
		left: Sizes.md - 2,
		borderRadius: Sizes.xl,
		backgroundColor: Colors.neutral.background,
	},
	locationText: {
		color: Colors.white,
		fontSize: Sizes.font.xs,
		paddingHorizontal: Sizes.md,
		paddingVertical: Sizes.base,
		textTransform: "capitalize",
	},
});
