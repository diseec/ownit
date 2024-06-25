import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./HomeFeaturedItem.styles";
import homeImg from "@/assets/images/house.png";

const HomeFeaturedItem = () => (
	<View style={styles.container}>
		<Image source={homeImg} resizeMode="cover" style={styles.image} />

		<TouchableOpacity style={styles.favoriteButton}>
			<Ionicons name="heart" size={22} color="red" />
		</TouchableOpacity>

		<View style={styles.infoContainer}>
			<View style={styles.infoLeft}>
				<Text style={styles.title}>Inner Sunset, San Francisco, CA</Text>

				<View style={styles.rateContainer}>
					<View>
						<Text>icon 4.9</Text>
					</View>
					<View>
						<Text style={styles.reviewText}>10.2k Review</Text>
					</View>
				</View>
			</View>

			<View style={styles.priceContainer}>
				<View style={styles.priceRow}>
					<Text style={styles.price}>$1200</Text>
					<Text style={styles.perMonth}>/month</Text>
				</View>
			</View>
		</View>
	</View>
);

export default HomeFeaturedItem;
