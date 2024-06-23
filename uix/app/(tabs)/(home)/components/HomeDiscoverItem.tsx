import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

interface HomeDiscoverItemProps {
	image: any;
	location: string;
}

const HomeDiscoverItem = ({ image, location }: HomeDiscoverItemProps) => (
	<TouchableOpacity className="w-[49%] h-48 mb-3 relative">
		<Image source={image} resizeMode="cover" className="w-full h-full rounded-3xl relative" />

		<View
			style={{ backgroundColor: "rgba(90, 90, 90, 0.3)" }}
			className="absolute top-3 left-3 rounded-3xl"
		>
			<Text className="capitalize text-white text-xs px-4 py-2">{location}</Text>
		</View>
	</TouchableOpacity>
);

export default HomeDiscoverItem;
