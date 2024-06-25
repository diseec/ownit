import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./HomeDiscoverItem.styles";

interface HomeDiscoverItemProps {
	image: any;
	location: string;
}

const HomeDiscoverItem = ({ image, location }: HomeDiscoverItemProps) => (
	<TouchableOpacity style={styles.container}>
		<Image source={image} resizeMode="cover" style={styles.image} />

		<View style={styles.locationContainer}>
			<Text style={styles.locationText}>{location}</Text>
		</View>
	</TouchableOpacity>
);

export default HomeDiscoverItem;
