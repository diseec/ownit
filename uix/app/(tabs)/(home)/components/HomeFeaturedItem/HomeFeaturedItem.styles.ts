import { StyleSheet, Dimensions } from "react-native";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
	container: {
		marginVertical: Sizes.base,
		flex: 3,
		marginBottom: Sizes.md,
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: Sizes.xl2,
	},
	favoriteButton: {
		position: "absolute",
		top: Sizes.md,
		right: Sizes.md,
		backgroundColor: Colors.white,
		borderRadius: Sizes.radius.full,
		width: Sizes.xl2 * 1.6,
		height: Sizes.xl2 * 1.6,
		alignItems: "center",
		justifyContent: "center",
	},
	infoContainer: {
		position: "absolute",
		backgroundColor: Colors.white,
		justifyContent: "space-between",
		bottom: 0,
		width: "100%",
		flexDirection: "row",
		paddingVertical: Sizes.base,
		paddingHorizontal: Sizes.md,
		borderRadius: Sizes.xl,
		shadowColor: Colors.shadow,
		shadowOffset: { width: 0, height: Sizes.xxs },
		shadowOpacity: 0.5,
		shadowRadius: 3.84,
		elevation: 1.5,
	},
	infoLeft: {
		flexDirection: "column",
		flex: 1,
	},
	title: {
		flexWrap: "wrap",
	},
	rateContainer: {
		flexDirection: "row",
		marginTop: Sizes.xs,
	},
	reviewText: {
		color: Colors.neutral.text,
		marginLeft: Sizes.xs * 2,
	},
	priceContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	priceRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	price: {
		fontSize: Sizes.font.md,
	},
	perMonth: {
		color: Colors.neutral.text,
		fontSize: Sizes.font.xs,
	},
});
