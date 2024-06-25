import React from "react";
import { ScrollView, View, Text } from "react-native";

import homeImg from "@/assets/images/house.png";
import HomeDiscoverItem from "@/app/(tabs)/(home)/components/HomeDiscoverItem/HomeDiscoverItem";
import { styles } from "./HomeDiscoverList.styles";

const discoverImages = [homeImg, homeImg, homeImg, homeImg, homeImg, homeImg];

const HomeDiscoverList = () => (
	<View style={styles.container}>
		{/* TITLE */}
		<Text style={styles.title}>Discover New Locations</Text>

		<ScrollView contentContainerStyle={styles.scrollViewContent}>
			{discoverImages.map((image, index) => (
				<HomeDiscoverItem key={index} image={image} location="toronto" />
			))}
		</ScrollView>
	</View>
);

export default HomeDiscoverList;
